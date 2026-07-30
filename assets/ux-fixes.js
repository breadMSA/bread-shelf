/* Keeps the rich-text controls genuinely contextual, even after the editor rerenders. */
(() => {
  let savedRange = null;
  const editorForSelection = () => {
    const sel = getSelection();
    if (!sel?.rangeCount) return null;
    return [...document.querySelectorAll('.rich-editor')].find(el => el.contains(sel.anchorNode)) || null;
  };
  const saveRange = () => { const sel=getSelection(); if (editorForSelection() && !sel.isCollapsed) savedRange=sel.getRangeAt(0).cloneRange(); };
  const restoreRange = () => { if (!savedRange) return; const sel=getSelection(); sel.removeAllRanges(); sel.addRange(savedRange); };
  const bubble = () => document.querySelector('[data-format-bubble]');
  const hide = () => { const el=bubble(); if(el) el.hidden=true; };
  const commit = () => { const editor=editorForSelection(); if(editor) editor.dispatchEvent(new Event('input',{bubbles:true})); };
  const enhance = () => {
    const el=bubble(); if (!el || el.dataset.enhanced) return;
    el.dataset.enhanced='true';
    el.insertAdjacentHTML('beforeend','<label class="format-color" title="文字顏色"><input type="color" data-rich-color value="#a35c48"></label><select class="format-size" data-rich-size title="文字大小"><option value="">文字大小</option><option value="2">小</option><option value="3">標準</option><option value="4">大</option><option value="5">特大</option></select>');
    const color=el.querySelector('[data-rich-color]'), size=el.querySelector('[data-rich-size]');
    color.addEventListener('mousedown',saveRange); color.addEventListener('change',e=>{restoreRange(); document.execCommand('foreColor',false,e.target.value); commit(); hide();});
    size.addEventListener('mousedown',saveRange); size.addEventListener('change',e=>{if(!e.target.value)return;restoreRange();document.execCommand('fontSize',false,e.target.value);commit();hide();e.target.value='';});
  };
  const enableDragHandles = () => document.querySelectorAll('.edit-block[draggable="true"]').forEach(block=>{
    block.draggable=false;
    if(block.querySelector('.drag-handle')) return;
    const controls=block.querySelector('.block-controls'); if(!controls) return;
    const handle=document.createElement('button'); handle.type='button'; handle.className='drag-handle'; handle.draggable=true; handle.title='拖曳排序'; handle.setAttribute('aria-label','拖曳排序');
    handle.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="6" r="1.25"/><circle cx="15" cy="6" r="1.25"/><circle cx="9" cy="12" r="1.25"/><circle cx="15" cy="12" r="1.25"/><circle cx="9" cy="18" r="1.25"/><circle cx="15" cy="18" r="1.25"/></svg>';
    controls.prepend(handle);
  });
  new MutationObserver(()=>{enhance();enableDragHandles()}).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('selectionchange',()=>{saveRange();const sel=getSelection();if(!sel||sel.isCollapsed)hide()});
  document.addEventListener('pointerdown',e=>{if(e.target.closest('[data-format-bubble]'))return;hide()},true);
  document.addEventListener('dragstart',e=>{if(e.target.closest('.rich-editor,.edit-block input,.edit-block textarea,.edit-block select'))e.preventDefault()},true);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
  enhance(); enableDragHandles();
})();
