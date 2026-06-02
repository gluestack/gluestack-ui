'use server';
import fs from 'fs';
import path from 'path';

export async function saveResultJson(json: string): Promise<void> {
  const outputPath = path.join(process.cwd(), 'app', 'result.json');
  fs.writeFileSync(outputPath, json, 'utf-8');
}
