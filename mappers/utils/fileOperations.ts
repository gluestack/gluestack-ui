import fs from "fs";
import path from "path";

/**
 * Copies a directory recursively from source to destination
 * @param src Source directory path
 * @param dest Destination directory path
 */
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

/**
 * Checks if a file or directory exists at the given path
 * @param filePath Path to check
 * @returns boolean indicating if the path exists
 */
export const pathExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};

/**
 * Creates a directory if it doesn't exist
 * @param dirPath Directory path to create
 */
export const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

/**
 * Reads a file as UTF-8 text
 * @param filePath Path to the file
 * @returns File contents as string
 */
export const readTextFile = (filePath: string): string => {
  return fs.readFileSync(filePath, "utf-8");
};

/**
 * Writes text content to a file
 * @param filePath Path to the file
 * @param content Content to write
 */
export const writeTextFile = (filePath: string, content: string) => {
  fs.writeFileSync(filePath, content, "utf-8");
};

/**
 * Reads a JSON file and parses the content
 * @param filePath Path to the JSON file
 * @returns Parsed JSON object
 */
export const readJsonFile = (filePath: string): any => {
  const content = readTextFile(filePath);
  return JSON.parse(content);
};

/**
 * Deletes a file or directory recursively
 * @param path Path to delete
 */
export const deletePath = (path: string) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
  }
};

/**
 * Gets all files in a directory
 * @param dirPath Directory path
 * @returns Array of file names
 */
export const getFilesInDirectory = (dirPath: string): string[] => {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath);
}; 