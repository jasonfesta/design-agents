export function validateComment(c) {
  if(!c || typeof c.id!=='string' || !/^[a-f0-9-]{36}$/.test(c.id) || typeof c.text!=='string' || !c.text.trim() || c.text.length>10000) throw new Error('Invalid annotation.');
  const {width,height}=c.viewport || {};
  if(![width,height].every(n=>Number.isInteger(n) && n>=1 && n<=10000) || ![c.x,c.y].every(Number.isFinite) || c.x<0 || c.y<0 || c.x>width || c.y>height) throw new Error('Invalid annotation coordinates.');
  if(!['light','dark'].includes(c.theme)) throw new Error('Invalid annotation theme.');
  return {id:c.id,text:c.text.trim(),x:c.x,y:c.y,viewport:{width,height},theme:c.theme,model:String(c.model || 'Not recorded').slice(0,200),updatedAt:new Date().toISOString()};
}
export function upsertComment(comments,comment) {
  const old=comments.find(c=>c.id===comment.id);
  const history=old?.history || [];
  const next={...comment,createdAt:old?.createdAt || comment.updatedAt,
    history:old && old.text!==comment.text ? [...history,{text:old.text,updatedAt:old.updatedAt}] : history};
  return old ? comments.map(c=>c.id===next.id?next:c) : [...comments,next];
}
export function commentsMarkdown(title,comments) {
  const line=s=>String(s).replace(/[\r\n]/g,' ');
  return `# ${line(title)} — layout annotations\n\nComments are review evidence, not automatically approved edits. Coordinates are CSS pixels at the recorded viewport size.\n\n`+comments.map((c,i)=>`## ${i+1}. Annotation ${c.id}\n\n- Position: ${c.x}, ${c.y}\n- Viewport: ${c.viewport.width} × ${c.viewport.height}\n- Appearance: ${c.theme}\n- Model: ${line(c.model)}\n- Created: ${c.createdAt}\n- Updated: ${c.updatedAt}\n\n${c.text.split('\n').map(t=>'> '+t).join('\n')}\n${(c.history || []).map(h=>`\nPrevious comment (${h.updatedAt}):\n\n${h.text.split('\n').map(t=>'> '+t).join('\n')}\n`).join('')}`).join('\n');
}
