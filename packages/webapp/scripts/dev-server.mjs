import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');
const publicDir = path.join(packageRoot, 'public');
const distDir = path.join(packageRoot, 'dist');
const port = Number(process.env.PORT ?? 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', `http://${request.headers.host}`);
  const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
  const baseDir = pathname.startsWith('/dist/') ? distDir : publicDir;
  const relativePath = pathname.replace(/^\/dist\//, '');
  const filePath = path.join(baseDir, relativePath);

  try {
    const data = await readFile(filePath);
    response.writeHead(200, {
      'content-type': types[path.extname(filePath)] ?? 'application/octet-stream',
    });
    response.end(data);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Webapp scaffold available at http://localhost:${port}`);
});
