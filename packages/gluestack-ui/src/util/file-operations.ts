import fs, { stat } from 'fs-extra';
import { join, dirname, relative, basename } from 'path';
import { log } from '@clack/prompts';
import { getConfirmation } from './get-confirmation';
import { projectRootPath } from './package-json-path';

//regex check for --path input
export function isValidPath(path: string): boolean {
  const pathRegex = /^(?!\/{2})[a-zA-Z/.]{1,2}.*/;
  return pathRegex.test(path);
}

export const checkWritablePath = async (path: string): Promise<boolean> => {
  const confirmPath = await getConfirmation(
    `\x1b[33mContinue writing components in the above path? :\x1b[0m [If the path is incorrect, please provide the path from the root of the project]
     \n\x1b[34m${join(projectRootPath, path)}
    \x1b[0m`
  );
  if (!confirmPath) process.exit(1);
  return true;
};

export const checkIfFolderExists = async (path: string): Promise<boolean> => {
  try {
    const stats = await stat(path);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};

export function getRelativePath({
  sourcePath,
  targetPath,
}: {
  sourcePath: string;
  targetPath: string;
}) {
  const sourceDir = dirname(sourcePath);
  const targetDir = dirname(targetPath);

  let relativePath = relative(sourceDir, targetDir);
  return relativePath === '.' || relativePath === ''
    ? './' + basename(targetPath)
    : join(relativePath, basename(targetPath));
}

export async function ensureFilesPromise(
  filePaths: string[]
): Promise<boolean> {
  try {
    // Filter out empty strings, null, and undefined values
    const validPaths = filePaths.filter(
      (path) => path && typeof path === 'string' && path.trim() !== ''
    );
    // Use Promise.all to run all ensureFile operations concurrently
    await Promise.all(
      validPaths.map(async (filePath) => {
        // Normalize the path and ensure the file
        const normalizedPath = filePath.normalize();
        await fs.ensureFile(normalizedPath); // Ensure the file exists asynchronously
      })
    );
    return true; // All operations successful
  } catch (error) {
    console.error('Error ensuring files:', error);
    return false; // At least one operation failed
  }
}

export const addIndexFile = (componentsDirectory: string, level = 0) => {
  try {
    const files = fs.readdirSync(componentsDirectory);

    const exports = files
      .filter(
        (file) =>
          file !== 'index.js' && file !== 'index.tsx' && file !== 'index.ts'
      )
      .map((file) => {
        const stats = fs.statSync(`${componentsDirectory}/${file}`);
        if (stats.isDirectory()) {
          if (level === 0) {
            addIndexFile(`${componentsDirectory}/${file}`, level + 1);
          }
          return `export * from './${file.split('.')[0]}';`;
        } else {
          return '';
        }
      })
      .join('\n');
    fs.writeFileSync(join(componentsDirectory, 'index.ts'), exports);
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};
