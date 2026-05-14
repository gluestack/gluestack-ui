import fs from 'fs';
import path from 'path';

export function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

export function safeWrite(filePath: string, content: string): void {
  ensureDir(path.dirname(filePath));

  // Write to temp file first, then rename (avoids partial writes)
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, content, 'utf-8');
  fs.renameSync(tmpPath, filePath);
}

export function safeWriteBuffer(filePath: string, buffer: Buffer): void {
  ensureDir(path.dirname(filePath));

  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, buffer);
  fs.renameSync(tmpPath, filePath);
}

export function readText(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

export function readJSON<T>(filePath: string): T | null {
  const text = readText(filePath);
  if (!text) return null;
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export function writeJSON(filePath: string, data: unknown): void {
  safeWrite(filePath, JSON.stringify(data, null, 2) + '\n');
}