import fs from "fs";
import path from "path";

// Copy a directory to a destination directory
export const copyDir = (src: string, dest: string) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Check if a file exists
export const pathExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};

// Ensure a directory exists
export const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Read a text file
export const readTextFile = (filePath: string): string => {
  return fs.readFileSync(filePath, "utf-8");
};

// Write a text file
export const writeTextFile = (filePath: string, content: string) => {
  fs.writeFileSync(filePath, content, "utf-8");
};

// Read a JSON file
export const readJsonFile = (filePath: string): any => {
  const content = readTextFile(filePath);
  return JSON.parse(content);
};

// Delete a file or directory
export const deletePath = (path: string) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
};

// Get all files in a directory
export const getFilesInDirectory = (dirPath: string): string[] => {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath);
};
