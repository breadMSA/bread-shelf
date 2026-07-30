// Cloudflare Worker: keeps both password hash and GitHub token off the public site.
// Required secrets: AUTHOR_PASSWORD_HASH, SESSION_SECRET, GITHUB_TOKEN.
// Required vars: PUBLIC_ORIGIN, GITHUB_OWNER, GITHUB_REPO. Optional: GITHUB_BRANCH=main.
const E = new TextEncoder(), D = new TextDecoder();
const b64 = text => { const bytes=E.encode(text); let binary=""; for(let i=0;i<bytes.length;i+=8192) binary+=String.fromCharCode(...bytes.subarray(i,i+8192)); return btoa(binary) };
const fromB64 = text => D.decode(Uint8Array.from(atob(text), c => c.charCodeAt(0)));
const hash = async x => [...new Uint8Array(await crypto.subtle.digest("SHA-256", E.encode(x)))].map(b=>b.toString(16).padStart(2,"0")).join("");
const mac = async (value, secret) => { const k=await crypto.subtle.importKey("raw",E.encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);return [...new Uint8Array(await crypto.subtle.sign("HMAC",k,E.encode(value)))].map(b=>b.toString(16).padStart(2,"0")).join("") };
const headers = env => ({"content-type":"application/json","access-control-allow-origin":env.PUBLIC_ORIGIN,"access-control-allow-headers":"content-type, authorization","access-control-allow-methods":"POST, OPTIONS"});
const reply=(env,data,status=200)=>new Response(JSON.stringify(data),{status,headers:headers(env)});
const auth = async (request, env) => { const token=request.headers.get("authorization")?.replace("Bearer ",""); if(!token)return false; const [body,signature]=token.split("."); if(!body||!signature||await mac(body,env.SESSION_SECRET)!==signature)return false; try{return JSON.parse(fromB64(body)).exp>Date.now()}catch{return false} };

export default { async fetch(request,env) {
  if(request.method==="OPTIONS")return new Response(null,{headers:headers(env)});
  const path=new URL(request.url).pathname;
  if(request.method==="POST"&&path==="/auth"){
    const {password}=await request.json(); if(!password||await hash(password)!==env.AUTHOR_PASSWORD_HASH)return reply(env,{error:"unauthorized"},401);
    const body=b64(JSON.stringify({exp:Date.now()+12*60*60*1000})); return reply(env,{token:body+"."+await mac(body,env.SESSION_SECRET)});
  }
  if(request.method==="POST"&&path==="/publish"){
    if(!await auth(request,env))return reply(env,{error:"unauthorized"},401);
    const {library}=await request.json(); if(!library?.books)return reply(env,{error:"invalid library"},400);
    const branch=env.GITHUB_BRANCH||"main", path="data/stories.js", api=`https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${path}?ref=${encodeURIComponent(branch)}`;
    const ghHeaders={authorization:`Bearer ${env.GITHUB_TOKEN}`,"user-agent":"bread-author-worker","accept":"application/vnd.github+json"};
    const old=await fetch(api,{headers:ghHeaders}); const existing=old.ok?await old.json():null;
    const source=`window.BREAD_LIBRARY = ${JSON.stringify(library,null,2)};\n`;
    const result=await fetch(api,{method:"PUT",headers:{...ghHeaders,"content-type":"application/json"},body:JSON.stringify({message:"Publish from Bread Studio",content:b64(source),branch,...(existing?.sha?{sha:existing.sha}:{})})});
    if(!result.ok)return reply(env,{error:"GitHub publish failed",detail:await result.text()},502);
    return reply(env,{ok:true});
  }
  return reply(env,{error:"not found"},404);
} };
