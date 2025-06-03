import path from 'path';
import * as fileOps from '../utils/fileOperations';

export const copyComponent = (component: string) => {
  const sourcePath = path.resolve('packages/components/ui');
  const destPath = path.resolve('apps/website/components/ui');
  const componentPath = path.join(sourcePath, component);
  const destComponentPath = path.join(destPath, component);
  fileOps.copyDir(componentPath, destComponentPath, ['docs', 'examples']);
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
  const packagesDir = path.resolve('packages/utils/gluestack-utils');
  const websiteDir = path.resolve('apps/website/utils/gluestack-utils');

  try {
    fileOps.copyDir(packagesDir, websiteDir);
  } catch (error) {
    console.error(`error in copying docs components:${srcPath}`, error);
  }
};

export const copyDocsComponents = (filePath: string) => {
  const packagesDir = path.resolve('packages/docs-components');
  const websiteDir = path.resolve('apps/website/components/docs-components');

  try {
    fileOps.copyDir(packagesDir, websiteDir);
  } catch (error) {
    console.error(`error in copying docs components:${filePath}`, error);
  }
};

export const processSidebarFile = (filePath: string) => {
  const sidebarDir = path.resolve('packages/sidebar.json');
  const websiteUiPath = path.resolve('apps/website/sidebar.json');
  fileOps.writeTextFile(websiteUiPath, fileOps.readTextFile(sidebarDir));
};
