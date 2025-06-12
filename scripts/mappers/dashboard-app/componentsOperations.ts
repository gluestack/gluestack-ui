import path from 'path';
import fs from 'fs';
import * as fileOps from '../utils/fileOperations';

export const copyComponent = (component: string) => {
  const sourcePath = path.resolve('packages/components/ui');
  const destPath = path.resolve('apps/dashboard-app/components/ui');
  const componentPath = path.join(sourcePath, component);
  const destComponentPath = path.join(destPath, component);

  try {
    // Check if the component is actually a file or directory
    if (fs.existsSync(componentPath)) {
      const stats = fs.statSync(componentPath);

      if (stats.isFile()) {
        // Handle files (like index.ts) - copy the file directly
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        fs.copyFileSync(componentPath, destComponentPath);
      } else if (stats.isDirectory()) {
        // Handle directories - use the existing copyDir function
        fileOps.copyDir(componentPath, destComponentPath, ['docs', 'examples']);
      }
    }
  } catch (error) {
    console.error(`error in copying components:${component}`, error);
  }
};

export const processNonComponentFile = (filePath: string) => {
  const packagesDir = path.resolve('packages/utils/gluestack-utils');
  const dashboardAppDir = path.resolve(
    'apps/dashboard-app/utils/gluestack-utils'
  );
  try {
    fileOps.copyDir(packagesDir, dashboardAppDir);
  } catch (error) {
    console.error(`error in copying utils, ${filePath}`, error);
  }
};
