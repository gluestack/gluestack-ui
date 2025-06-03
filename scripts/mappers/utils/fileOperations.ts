import fs from 'fs';
import path from 'path';

export const copyDir = (
  src: string,
  dest: string,
  ignoreFiles: string[] = []
) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Skip if the file/directory should be ignored
    if (ignoreFiles.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, ignoreFiles); // Pass ignoreFiles to recursive calls
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

export const pathExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};

export const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

export const readTextFile = (filePath: string): string => {
  return fs.readFileSync(filePath, 'utf-8');
};

export const writeTextFile = (filePath: string, content: string) => {
  fs.writeFileSync(filePath, content, 'utf-8');
};

export const readJsonFile = (filePath: string): any => {
  const content = readTextFile(filePath);
  return JSON.parse(content);
};

export const deletePath = (path: string) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
};

export const getFilesInDirectory = (dirPath: string): string[] => {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath);
};
