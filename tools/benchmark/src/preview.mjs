export const scriptSafe = text => text.replace(/<\/script/gi, '<\\/script');
export const jsonSafe = value => JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
export function previewHtml(trial, runtime, theme = 'light') {
  const mode = theme === 'dark' ? 'dark' : 'light';
  // No allow-same-origin on the iframe. Generated code never runs in Node.
  return `<!doctype html><html data-theme="${mode}" class="${mode}"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; connect-src 'none'; frame-src 'none'; worker-src 'none'; form-action 'none'; base-uri 'none'"><style>html{color-scheme:${mode}}body{margin:0}*{box-sizing:border-box}</style></head><body><div id="root"></div><script>${scriptSafe(runtime)}</script><script>
const send = (status, error) => parent.postMessage({benchmarkPreview:true,id:${jsonSafe(trial.id)},status,error}, '*');
addEventListener('error',e=>send('error',e.message));
addEventListener('unhandledrejection',e=>send('error',String(e.reason)));
const style=document.createElement('style');style.textContent=${jsonSafe(trial.css)};document.head.append(style);
try { ${scriptSafe(trial.compiled)}
ReactDOM.createRoot(document.getElementById('root'),{onUncaughtError:e=>send('error',e.message)}).render(React.createElement(window.__layoutApp));
requestAnimationFrame(()=>requestAnimationFrame(()=>send('rendered')));
} catch(e) {send('error',e.message)}
</script></body></html>`;
}
export function reactDownload(trial) {
  return `import React from 'react';\n\n${trial.jsx}\n\n// Layout only. The review jig is not part of this export.\nexport default function DialLayout() {\n  return <><style>{${JSON.stringify(trial.css)}}</style><App /></>;\n}\n`;
}
