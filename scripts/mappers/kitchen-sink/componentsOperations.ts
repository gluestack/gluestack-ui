import path from 'path';
import * as fileOps from '../utils/fileOperations';

export const copyComponent = (component: string) => {
  const sourcePath = path.resolve('packages/components/ui');
  const destPath = path.resolve('apps/kitchen-sink/components/ui');
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
  const kitchenSinkDir = path.resolve(
    'apps/kitchen-sink/utils/gluestack-utils'
  );
  try {
    fileOps.copyDir(packagesDir, kitchenSinkDir);
  } catch (error) {
    console.error(`error in copying utils, ${filePath}`, error);
  }
};

export const processSidebarFile = (filePath: string) => {
  const sourcePath = path.resolve('packages/sidebar.json');
  const destPath = path.resolve('apps/kitchen-sink/components.json');
  try {
    fileOps.writeTextFile(destPath, fileOps.readTextFile(sourcePath));
  } catch (error) {
    console.error(`error in copying sidebar, ${filePath}`, error);
  }
};
