import { execSync } from 'child_process';

export function gitAdd(files: string[]): void {
  if (files.length === 0) return;
  const args = files.map((f) => `"${f}"`).join(' ');
  execSync(`git add ${args}`, { stdio: 'inherit' });
}

export function gitCommit(message: string): string {
  execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, {
    stdio: 'inherit',
  });
  return execSync('git rev-parse --short HEAD').toString().trim();
}

export function gitIsClean(): boolean {
  const status = execSync('git status --porcelain').toString().trim();
  return status === '';
}