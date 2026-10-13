import { build } from 'esbuild';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
await mkdir(path.join(root, 'dist'), { recursive: true });
await build({
  entryPoints: [path.join(root, 'src/app.jsx')], bundle: true,
  nodePaths: [path.join(root, 'node_modules')],
  outfile: path.join(root, 'dist/app.js'), minify: true,
  define: { 'process.env.NODE_ENV': '"production"' },
  target: 'es2022', legalComments: 'inline', loader: { '.woff2': 'dataurl', '.ttf': 'dataurl' },
});
const harness = await build({
  stdin: { contents: 'import React from "react"; import {createRoot} from "react-dom/client"; window.React=React;window.ReactDOM={createRoot};', resolveDir: root },
  bundle: true, write: false, minify: true, format: 'iife',
  define: { 'process.env.NODE_ENV': '"production"' }, target: 'es2022', legalComments: 'inline',
});
await writeFile(path.join(root, 'dist/react-runtime.js'), harness.outputFiles[0].text);
console.log('Built Benchmark and its shared React preview runtime.');
