import fs from 'fs';
import path from 'path';

export const copyDir = (
  src: string,
  dest: string,
  ignoreFiles: string[] = []
) => {
  // Check if source exists
  if (!fs.existsSync(src)) {
    return;
  }

  // Get stats to determine if it's a file or directory
  const srcStats = fs.statSync(src);

  // If source is a file, copy it directly
  if (srcStats.isFile()) {
    // Extract filename from source path
    const fileName = path.basename(src);

    // Skip if the file should be ignored
    if (ignoreFiles.includes(fileName)) {
      return;
    }

    // Ensure destination directory exists
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Copy the file
    fs.copyFileSync(src, dest);
    return;
  }

  // If source is not a directory, return
  if (!srcStats.isDirectory()) {
    return;
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  let hasFilesToCopy = false;

  // First pass: collect files and directories that need to be copied
  const filesToCopy: Array<{
    srcPath: string;
    destPath: string;
    isDirectory: boolean;
  }> = [];

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Skip if the file/directory should be ignored
    if (ignoreFiles.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      // For directories, we need to check if they contain any files recursively
      if (hasFilesInDirectory(srcPath, ignoreFiles)) {
        filesToCopy.push({ srcPath, destPath, isDirectory: true });
        hasFilesToCopy = true;
      }
    } else {
      filesToCopy.push({ srcPath, destPath, isDirectory: false });
      hasFilesToCopy = true;
    }
  }

  // Only create the destination directory if we have files to copy
  if (hasFilesToCopy) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    // Second pass: actually copy the files and directories
    for (const item of filesToCopy) {
      if (item.isDirectory) {
        copyDir(item.srcPath, item.destPath, ignoreFiles);
      } else {
        fs.copyFileSync(item.srcPath, item.destPath);
      }
    }
  }
};

// Helper function to check if a directory contains any files (recursively)
const hasFilesInDirectory = (
  dirPath: string,
  ignoreFiles: string[] = []
): boolean => {
  if (!fs.existsSync(dirPath)) {
    return false;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    // Skip if the file/directory should be ignored
    if (ignoreFiles.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      const subDirPath = path.join(dirPath, entry.name);
      if (hasFilesInDirectory(subDirPath, ignoreFiles)) {
        return true;
      }
    } else {
      // Found a file
      return true;
    }
  }

  return false;
};

export const copyFile = (src: string, dest: string) => {
  if (!fs.existsSync(src)) {
    return;
  }

  // Ensure destination directory exists
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(src, dest);
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
    fs.rmdirSync(path, { recursive: true });
  }
};

export const getFilesInDirectory = (dirPath: string): string[] => {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath);
};
