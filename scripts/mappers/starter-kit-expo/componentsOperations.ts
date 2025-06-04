import path from 'path';
import * as fileOps from '../utils/fileOperations';

export const copyComponent = (component: string) => {
  const sourcePath = path.resolve('packages/components/ui');
  const destPath = path.resolve('apps/starter-kit-expo/components/ui');
  const componentPath = path.join(sourcePath, component);
  const destComponentPath = path.join(destPath, component);
  try {
    fileOps.copyDir(componentPath, destComponentPath, ['docs', 'examples']);
  } catch (error) {
    console.error(`error in copying components:${component}`, error);
  }
};

export const processNonComponentFile = (filePath: string) => {
  const packagesDir = path.resolve('packages/utils/gluestack-utils');
  const starterKitDir = path.resolve(
    'apps/starter-kit-expo/utils/gluestack-utils'
  );
  try {
    fileOps.copyDir(packagesDir, starterKitDir);
  } catch (error) {
    console.error(`error in copying utils, ${filePath}`, error);
  }
};
