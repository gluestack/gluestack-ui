import * as fs from 'fs-extra';
import * as path from 'path';

const backupDir = path.join(__dirname, 'backups');

export async function createBackup(filePath: string) {
  await fs.ensureDir(backupDir);
  const backupPath = path.join(backupDir, path.basename(filePath));
  await fs.copy(filePath, backupPath);
}

export async function restoreBackup(filePath: string) {
  if (fs.existsSync(backupDir)) {
    const backupPath = path.join(backupDir, path.basename(filePath));
    await fs.copy(backupPath, filePath);
  }
}

export async function clearBackups() {
  if (fs.existsSync(backupDir)) await fs.emptyDir(backupDir);
}
