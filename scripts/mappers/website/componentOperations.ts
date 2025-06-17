import path from 'path';
import {
  processComponentChange,
  copyUtils,
  copySpecialFile,
  MapperConfig,
} from '../utils/componentOperations';
import * as fileOps from '../utils/fileOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('packages/components/ui'),
  destPath: path.resolve('apps/website/components/ui'),
  utilsSourcePath: path.resolve('src/utils/gluestack-utils'),
  utilsDestPath: path.resolve('apps/website/utils/gluestack-utils'),
  ignoreFiles: ['docs', 'examples'],
};

export const copyComponent = (component: string, event: string = 'added') => {
  processComponentChange(component, event, mapperConfig);
};

export const deleteComponentDocs = (component: string) => {
  const websiteComponentPath = path.resolve(
    'apps/website/components',
    component
  );
  const websiteUiPath = path.resolve('apps/website/app/ui/docs', component);

  try {
    // Delete from docs/components
    if (fileOps.pathExists(websiteComponentPath)) {
      fileOps.deletePath(websiteComponentPath);
      console.log(`✓ Deleted component docs from: ${websiteComponentPath}`);
    }

    // Delete from docs/app/ui/docs
    if (fileOps.pathExists(websiteUiPath)) {
      fileOps.deletePath(websiteUiPath);
      console.log(`✓ Deleted component UI docs from: ${websiteUiPath}`);
    }

    console.log(`✅ Docs for ${component} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting docs for ${component}:`, error);
  }
};

export const processNonComponentFile = (srcPath: string) => {
  copyUtils(mapperConfig);
};

export const copyDocsComponents = (filePath: string) => {
  const packagesDir = path.resolve('packages/docs-components');
  const websiteDir = path.resolve('apps/website/components/docs-components');

  try {
    fileOps.copyDir(packagesDir, websiteDir);
    console.log(`✅ Copied docs components`);
  } catch (error) {
    console.error(`❌ Error copying docs components:`, error);
  }
};

export const processSidebarFile = (filePath: string) => {
  const sourcePath = path.resolve('packages/sidebar.json');
  const destPath = path.resolve('apps/website/sidebar.json');
  copySpecialFile(sourcePath, destPath);
};
