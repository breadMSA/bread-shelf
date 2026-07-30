// Cloudflare Worker: author authentication and publishing for Bread Shelf.
// Secrets (set with Wrangler): AUTHOR_PASSWORD_HASH, SESSION_SECRET, GITHUB_TOKEN.
// The Worker uploads images before publishing stories.js, so public readers never
// depend on the author's browser-local storage.
const E = new TextEncoder(), D = new TextDecoder();
const b64 = text => { const bytes=E.encode(text); let binary=""; for(let i=0;i<bytes.length;i+=8192) binary+=String.fromCharCode(...bytes.subarray(i,i+8192)); return btoa(binary) };
const fromB64 = text => D.decode(Uint8Array.from(atob(text), c => c.charCodeAt(0)));
const hash = async x => [...new Uint8Array(await crypto.subtle.digest("SHA-256",E.encode(x)))].map(b=>b.toString(16).padStart(2,"0")).join("");
const mac = async (value,secret) => { const key=await crypto.subtle.importKey("raw",E.encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]); return [...new Uint8Array(await crypto.subtle.sign("HMAC",key,E.encode(value)))].map(b=>b.toString(16).padStart(2,"0")).join("") };
const headers = env => ({"content-type":"application/json","access-control-allow-origin":env.PUBLIC_ORIGIN,"access-control-allow-headers":"content-type, authorization","access-control-allow-methods":"POST, OPTIONS"});
const reply = (env,data,status=200) => new Response(JSON.stringify(data),{status,headers:headers(env)});
const safe = value => String(value||"asset").replace(/[^a-z0-9_-]+/gi,"-").replace(/^-+|-+$/g,"").slice(0,72)||"asset";
const auth = async (request,env) => { const token=request.headers.get("authorization")?.replace("Bearer ",""); if(!token)return false; const [body,signature]=token.split("."); if(!body||!signature||await mac(body,env.SESSION_SECRET)!==signature)return false; try{return JSON.parse(fromB64(body)).exp>Date.now()}catch{return false} };

function imageData(source){
  if(typeof source!=="string"||!source.startsWith("data:image/"))return null;
  const match=source.match(/^data:(image\/(?:png|jpe?g|webp|gif));base64,([\s\S]+)$/i);
  if(!match)throw new Error("Only PNG, JPEG, WebP, and GIF image uploads are supported.");
  const mime=match[1].toLowerCase()==="image/jpg"?"image/jpeg":match[1].toLowerCase();
  const extension={"image/png":"png","image/jpeg":"jpg","image/webp":"webp","image/gif":"gif"}[mime];
  return {mime,extension,content:match[2].replace(/\s/g,"")};
}

async function githubPut(env,path,content,message){
  const branch=env.GITHUB_BRANCH||"main";
  const api=`https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${path}`;
  const ghHeaders={authorization:`Bearer ${env.GITHUB_TOKEN}`,"user-agent":"bread-author-worker",accept:"application/vnd.github+json"};
  const previous=await fetch(`${api}?ref=${encodeURIComponent(branch)}`,{headers:ghHeaders});
  const existing=previous.ok?await previous.json():null;
  const result=await fetch(api,{method:"PUT",headers:{...ghHeaders,"content-type":"application/json"},body:JSON.stringify({message,content,branch,...(existing?.sha?{sha:existing.sha}:{})})});
  if(!result.ok)throw new Error(await result.text());
}

async function publishImage(env,source,folder,name){
  const data=imageData(source); if(!data)return source;
  const digest=(await hash(data.content)).slice(0,16);
  const path=`assets/media/${folder}/${safe(name)}-${digest}.${data.extension}`;
  await githubPut(env,path,data.content,`Publish media: ${path}`);
  return path;
}

async function publishLibraryMedia(env,library){
  const published=structuredClone(library);
  for(const book of published.books||[]){
    book.cover=await publishImage(env,book.cover,"covers",`${book.id}-cover`);
    for(const chapter of book.chapters||[]){
      for(const block of chapter.blocks||[]){
        if(block?.type==="image") block.src=await publishImage(env,block.src,"illustrations",`${book.id}-${chapter.id}-${block.id||"image"}`);
      }
    }
  }
  return published;
}

export default { async fetch(request,env) {
  if(request.method==="OPTIONS")return new Response(null,{headers:headers(env)});
  const path=new URL(request.url).pathname;
  if(request.method==="POST"&&path==="/auth"){
    const {password}=await request.json();
    if(!password||await hash(password)!==env.AUTHOR_PASSWORD_HASH)return reply(env,{error:"unauthorized"},401);
    const body=b64(JSON.stringify({exp:Date.now()+12*60*60*1000}));
    return reply(env,{token:body+"."+await mac(body,env.SESSION_SECRET)});
  }
  if(request.method==="POST"&&path==="/publish"){
    if(!await auth(request,env))return reply(env,{error:"unauthorized"},401);
    const {library}=await request.json(); if(!library?.books)return reply(env,{error:"invalid library"},400);
    try{
      const publicLibrary=await publishLibraryMedia(env,library);
      await githubPut(env,"data/stories.js",b64(`window.BREAD_LIBRARY = ${JSON.stringify(publicLibrary,null,2)};\n`),"Publish stories from Bread Studio");
      return reply(env,{ok:true});
    }catch(error){return reply(env,{error:"GitHub publish failed",detail:error.message},502)}
  }
  return reply(env,{error:"not found"},404);
} };
