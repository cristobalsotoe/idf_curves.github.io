import { mkdir, writeFile } from 'node:fs/promises';

const worker = `export default {
  async fetch(request, env) {
    const direct = await env.ASSETS.fetch(request);
    if (direct.status !== 404) return direct;

    const url = new URL(request.url);
    if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
      url.pathname = url.pathname + '/';
      return env.ASSETS.fetch(new Request(url, request));
    }
    return direct;
  },
};
`;

await mkdir(new URL('../dist/server/', import.meta.url), { recursive: true });
await writeFile(new URL('../dist/server/index.js', import.meta.url), worker);
