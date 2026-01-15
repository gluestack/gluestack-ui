import path from 'path';
import fs from 'fs';
import * as fileOps from '../utils/fileOperations';
import * as templateGen from './templateGenerator';

export const copyComponentsDocs = (component: string, event: string) => {
  const sourcePath = path.resolve('src/components/ui');
  const routePagesPath = path.resolve(
    'apps/kitchen-sink/app/(home)/components'
  );

  // Skip all-components and bottomsheet pages - they should not be copied to new kitchen-sink
  if (component === 'all-components' || component === 'bottomsheet') {
    return;
  }

  if (event === 'removed') {
    // Remove route page only (use unlinkSync for files)
    const routePagePath = path.join(routePagesPath, `${component}.tsx`);
    if (fs.existsSync(routePagePath)) {
      fs.unlinkSync(routePagePath);
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

    // Source MDX file path
    const sourceMdxPath = path.join(componentDocsPath, 'index.mdx');

    // Generate route page directly with processed annotations
    generateRoutePage(component, routePagesPath, sourceMdxPath);
  } catch (error) {
    console.error(`Error processing docs for ${component}:`, error);
  }
};

// Generate route page in app/(home)/components/[component].tsx
// This function generates the route page directly with processed annotations
function generateRoutePage(
  component: string,
  routePagesPath: string,
  sourceMdxPath: string
) {
  try {
    // Ensure route pages directory exists
    fileOps.ensureDirectoryExists(routePagesPath);

    // Route page file path
    const routePagePath = path.join(routePagesPath, `${component}.tsx`);

    // Generate the component content using templateGenerator
    // We'll use a temporary path to generate the content, then read it
    const tempPath = path.join(routePagesPath, `.temp-${component}.tsx`);

    // Generate content using copyProcessedAnnotations (it writes to a file)
    const success = templateGen.copyProcessedAnnotations(
      sourceMdxPath,
      tempPath,
      component
    );

    if (!success) {
      console.warn(`Failed to process annotations for ${component}`);
      return;
    }

    // Read the generated content
    let componentContent = fileOps.readTextFile(tempPath);

    // Convert component name to PascalCase for function name
    // e.g., "alert-dialog" -> "AlertDialog"
    const componentName = component
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    // Replace the default export function name from ComponentExamples to ${componentName}Screen
    // Match: export default function ComponentExamples() {
    // Replace with: export default function ${componentName}Screen() {
    componentContent = componentContent.replace(
      /export default function ComponentExamples\(\)/g,
      `export default function ${componentName}Screen()`
    );

    // Write route page with the generated content
    fileOps.writeTextFile(routePagePath, componentContent);

    // Clean up temporary file (use unlinkSync for files, not deletePath which is for directories)
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  } catch (error) {
    console.error(`Error generating route page for ${component}:`, error);
  }
}
