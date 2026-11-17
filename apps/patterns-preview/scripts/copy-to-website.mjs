// Copies the exported preview into the website so it is served at gluestack.io/preview.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const from = path.resolve(process.env.PREVIEW_DIST || path.resolve(here, '../dist'));
const to = path.resolve(here, '../../website/public/preview');
fs.rmSync(to, { recursive: true, force: true });
fs.cpSync(from, to, { recursive: true });
console.log(`copied preview to ${path.relative(process.cwd(), to)}`);
