import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

app.use(express.static(__dirname));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/installation', (_req, res) => {
  res.sendFile(path.join(__dirname, 'installation.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`MF3D static server listening on http://${HOST}:${PORT}`);
});
