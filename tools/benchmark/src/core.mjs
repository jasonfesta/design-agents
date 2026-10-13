import { createHash, randomUUID } from 'node:crypto';
import { build } from 'esbuild';

export const SYSTEM = `You are implementing a React layout from an approved Dial baseline. Follow the user's change request while preserving the stated taste and constraints. Return only a JSON object with two strings: "jsx" and "css". The jsx must declare a function App() and may declare helper components. React is available globally; use React.useState etc. Do not import or export anything. Use plain CSS, no Tailwind or packages. Do not fetch data or use remote assets; use inline SVG or supplied data images. Support both light and dark using prefers-color-scheme or html[data-theme]. Include keyboard-accessible interactions. Do not include the surrounding review toolbar, jig, or benchmark UI. Your App is rendered in an isolated iframe at the supplied viewport dimensions.`;

const string = (value, name, max, required = true) => {
  if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw new Error(`Invalid ${name}.`);
  return value.trim();
};
export function validateInput(input) {
  const title = string(input.title, 'layout name', 100);
  const prompt = string(input.prompt, 'prompt', 16000);
  const baseline = string(input.baseline, 'Dial baseline source or specification', 200000);
  const revision = string(input.revision ?? '', 'Dial revision', 200, false);
  const width = Number(input.width), height = Number(input.height);
  if (![width, height].every(n => Number.isInteger(n) && n >= 240 && n <= 3840)) throw new Error('Dimensions must be 240–3840 CSS pixels.');
  const maxTokens = Number(input.maxTokens ?? 4096);
  if (!Number.isInteger(maxTokens) || maxTokens < 256 || maxTokens > 16000) throw new Error('Token limit must be 256–16000.');
  const temperature = input.temperature === '' || input.temperature == null ? null : Number(input.temperature);
  if (temperature !== null && (!Number.isFinite(temperature) || temperature < 0 || temperature > 2)) throw new Error('Temperature must be empty or 0–2.');
  if (!Array.isArray(input.models) || input.models.length < 2 || input.models.length > 4) throw new Error('Choose 2–4 model routes.');
  const models = input.models.map(m => {
    const provider = string(m.provider, 'managed provider slug', 120);
    const model = string(m.model, 'model ID', 160);
    if (!/^@[a-zA-Z0-9_-]+$/.test(provider) || !/^[a-zA-Z0-9_.:/@-]+$/.test(model)) throw new Error('Use an @managed-provider slug and a valid model ID from Portkey.');
    return { provider, model };
  });
  if (new Set(models.map(m => `${m.provider}/${m.model}`)).size !== models.length) throw new Error('Choose distinct model routes.');
  const images = input.images ?? [];
  if (!Array.isArray(images) || images.length > 3 || images.some(s => typeof s !== 'string' || s.length > 2800000 || !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s))) throw new Error('Use up to three PNG, JPEG, or WebP images, at most 2 MB each.');
  return { title, prompt, baseline, revision, width, height, maxTokens, temperature, models, images };
}
export function requestSnapshot(input) {
  const text = `DIAL LAYOUT: ${input.title}\nREVISION: ${input.revision || 'not specified'}\nVIEWPORT: ${input.width} x ${input.height} CSS pixels\n\nCHANGE REQUEST:\n${input.prompt}\n\nDIAL BASELINE / TASTE / ATLAS CONTEXT:\n${input.baseline}`;
  const content = input.images.length ? [{ type: 'text', text }, ...input.images.map(url => ({ type: 'image_url', image_url: { url } }))] : text;
  return { messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content }], max_tokens: input.maxTokens, ...(input.temperature === null ? {} : { temperature: input.temperature }), stream: false };
}
export const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
export function newRun(input) {
  const request = requestSnapshot(input);
  return { schema: 1, id: randomUUID(), createdAt: new Date().toISOString(), status: 'running', input, request, promptHash: hash(request), protocol: { version: 1, runtime: 'React 19.2.0', requestsPerModel: 1, execution: 'sequential, input order', applicationRetries: 0, cache: 'force refresh', gatewayRouting: 'managed provider slug; account-side policies must be checked separately', timeoutMs: 120000, cost: 'not available; no pricing estimate applied' }, trials: input.models.map((m,i) => ({ id: `model-${i + 1}`, ...m, status: 'queued' })) };
}
export async function compileResponse(raw) {
  const cleaned = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  const value = JSON.parse(cleaned);
  const jsx = string(value.jsx, 'jsx', 300000);
  const css = string(value.css ?? '', 'css', 150000, false);
  const result = await build({
    stdin: { contents: `${jsx}\n;window.__layoutApp = App;`, loader: 'jsx' },
    bundle: true, write: false, format: 'iife', target: 'es2022', logLevel: 'silent',
    jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment',
    plugins: [{ name: 'no-imports', setup(b) { b.onResolve({ filter: /.*/ }, args => ({ errors: [{ text: `External imports are not supported: ${args.path}` }] })); } }],
  });
  return { jsx, css, compiled: result.outputFiles[0].text };
}
const contentText = data => {
  const content = data.choices?.[0]?.message?.content;
  return typeof content === 'string' ? content : Array.isArray(content) ? content.filter(p => p.type === 'text').map(p => p.text).join('\n') : '';
};
export async function runTrial(run, trial, { apiKey, fetchImpl = fetch, compile = compileResponse }) {
  const start = performance.now();
  const result = { ...trial, status: 'requesting', traceId: `${run.id}-${trial.id}`, returnedModel: null, durationMs: null, usage: null, cost: null, httpStatus: null };
  const redact = text => apiKey ? text.split(apiKey).join('[REDACTED]') : text;
  try {
    const response = await fetchImpl('https://api.portkey.ai/v1/chat/completions', {
      method: 'POST', signal: AbortSignal.timeout(run.protocol.timeoutMs),
      headers: { 'Content-Type': 'application/json', 'x-portkey-api-key': apiKey, 'x-portkey-provider': trial.provider, 'x-portkey-trace-id': result.traceId, 'x-portkey-cache-force-refresh': 'true', 'x-portkey-request-timeout': String(run.protocol.timeoutMs) },
      body: JSON.stringify({ ...run.request, model: trial.model }),
    });
    result.httpStatus = response.status;
    const raw = await response.text();
    result.durationMs = Math.round(performance.now() - start);
    if (raw.length > 2000000) throw new Error('Response exceeds the 2 MB limit.');
    result.rawResponse = redact(raw);
    if (!response.ok) throw new Error(`Portkey returned HTTP ${response.status}. See the saved response.`);
    const data = JSON.parse(result.rawResponse);
    result.returnedModel = data.model ?? null;
    result.usage = data.usage ?? null;
    result.finishReason = data.choices?.[0]?.finish_reason ?? null;
    result.rawText = contentText(data);
    if (!result.rawText) throw new Error('The model returned no usable text.');
    result.status = 'compiling';
    try {
      Object.assign(result, await compile(result.rawText));
      result.status = 'compiled';
    } catch (error) {
      result.status = 'compile-error';
      result.error = redact(error.message);
    }
  } catch (error) {
    result.status = 'request-error';
    result.error = redact(error.name === 'TimeoutError' ? 'Request timed out after 120 seconds.' : error.message);
  }
  result.durationMs ??= Math.round(performance.now() - start);
  return result;
}
