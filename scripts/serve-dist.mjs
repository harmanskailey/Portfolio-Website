import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../dist", import.meta.url));
const port = Number.parseInt(process.env.PORT ?? "4321", 10);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

const resolveRequest = async (pathname) => {
  const decodedPath = decodeURIComponent(pathname);
  const relativePath = decodedPath.replace(/^\/+/, "");
  const candidate = path.resolve(root, relativePath);

  const relative = path.relative(root, candidate);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;

  try {
    const details = await stat(candidate);
    if (details.isFile()) return candidate;
    if (details.isDirectory()) return path.join(candidate, "index.html");
  } catch {
    if (!path.extname(candidate)) return path.join(candidate, "index.html");
  }

  return candidate;
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  const requestedFile = await resolveRequest(url.pathname);

  try {
    if (!requestedFile) throw new Error("Invalid path");
    const body = await readFile(requestedFile);
    response.writeHead(200, {
      "Content-Type":
        contentTypes[path.extname(requestedFile)] ?? "application/octet-stream",
    });
    response.end(body);
  } catch {
    const body = await readFile(path.join(root, "404.html"));
    response.writeHead(404, { "Content-Type": contentTypes[".html"] });
    response.end(body);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Portfolio test server: http://localhost:${port}`);
});
