import path from 'path';
import * as fileOps from '../utils/fileOperations';
import * as templateGen from './templateGenerator';

export const copyComponentsDocs = (component: string, event: string) => {
  const sourcePath = path.resolve('src/components/ui');
  const kitchenSinkPath = path.resolve('apps/KitchenSink-App-feat-homeScreen/app/components');
  const routePagesPath = path.resolve('apps/KitchenSink-App-feat-homeScreen/app/(home)/components');

  if (event === 'removed') {
    const destPath = path.join(kitchenSinkPath, component);
    if (!fileOps.pathExists(destPath)) {
      console.log(`No docs found for ${component}  ${destPath}`);
      return;
    }
    fileOps.deletePath(destPath);
    
    // Also remove route page
    const routePagePath = path.join(routePagesPath, `${component}.tsx`);
    if (fileOps.pathExists(routePagePath)) {
      fileOps.deletePath(routePagePath);
    }
    
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

    // Generate route page that imports from component page
    generateRoutePage(component, routePagesPath, kitchenSinkPath);
  } catch (error) {
    console.error(`Error processing docs for ${component}:`, error);
  }
};

// Generate route page in app/(home)/components/[component].tsx
function generateRoutePage(component: string, routePagesPath: string, componentPagesPath: string) {
  try {
    // Ensure route pages directory exists
    fileOps.ensureDirectoryExists(routePagesPath);

    // Route page file path
    const routePagePath = path.join(routePagesPath, `${component}.tsx`);

    // Import path relative to route page
    // From: app/(home)/components/[component].tsx
    // To: app/components/[component]/index.tsx
    const relativeImportPath = `../../components/${component}`;

    // Generate route page content
    const routePageContent = `import ComponentExamples from "${relativeImportPath}";

export default function ${component.charAt(0).toUpperCase() + component.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Screen() {
  return <ComponentExamples />;
}
`;

    // Write route page
    fileOps.writeTextFile(routePagePath, routePageContent);
  } catch (error) {
    console.error(`Error generating route page for ${component}:`, error);
  }
}
