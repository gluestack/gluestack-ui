import path from 'path';
import * as fileOps from '../utils/fileOperations';
import * as templateGen from './templateGenerator';

export const copyComponentsDocs = (component: string, event: string) => {
  const sourcePath = path.resolve('src/components/ui');
  const kitchenSinkPath = path.resolve('apps/kitchen-sink/app/components');

  if (event === 'removed') {
    const destPath = path.join(kitchenSinkPath, component);
    if (!fileOps.pathExists(destPath)) {
      console.log(`No docs found for ${component}  ${destPath}`);
      return;
    }
    fileOps.deletePath(destPath);
    console.log(`Docs for ${component} removed`);
    return;
  }

  try {
    // Find docs files in the component folder
    const componentDocsPath = path.join(sourcePath, component, 'docs');
    if (!fileOps.pathExists(componentDocsPath)) {
      console.log(`No docs found for ${component}  ${componentDocsPath}`);
      return;
    }

    // Get list of docs files
    const docFiles = fileOps.getFilesInDirectory(componentDocsPath);
    if (docFiles.length === 0) {
      console.log(`No doc files found for ${component}`);
      return;
    }

    // Create destination folder (lowercase component name)
    const destPath = path.join(kitchenSinkPath, component);
    fileOps.ensureDirectoryExists(destPath);

    // Source MDX file path
    const sourceMdxPath = path.join(componentDocsPath, 'index.mdx');
    // Destination TSX file path
    const destTsxPath = path.join(destPath, 'index.tsx');

    // Copy only the processed annotations from MDX to TSX
    templateGen.copyProcessedAnnotations(sourceMdxPath, destTsxPath, component);
  } catch (error) {
    console.error(`Error processing docs for ${component}:`, error);
  }
};
