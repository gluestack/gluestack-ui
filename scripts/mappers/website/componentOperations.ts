import path from 'path';
import {
  processComponentChange,
  copyUtils,
  copySpecialFile,
  MapperConfig,
} from '../utils/componentOperations';
import * as fileOps from '../utils/fileOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('src/components/ui'),
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
  const packagesDir = path.resolve('src/docs-components');
  const websiteDir = path.resolve('apps/website/components/docs-components');

  try {
    fileOps.copyDir(packagesDir, websiteDir);
    console.log(`✅ Copied docs components`);
  } catch (error) {
    console.error(`❌ Error copying docs components:`, error);
  }
};

export const processSidebarFile = (filePath: string) => {
  const sourcePath = path.resolve('src/sidebar.json');
  const destPath = path.resolve('apps/website/sidebar.json');
  
  // Read and parse the JSON file
  const sidebar = fileOps.readJsonFile(sourcePath);
  
  // Log the sidebar data to ensure it's being read correctly
  console.log("Sidebar Data:", JSON.stringify(sidebar, null, 2));
  
const components = getComponentsFromSidebar(sidebar);
console.log(components);
  // Proceed with copying the file
  copySpecialFile(sourcePath, destPath);
};

const getComponentsFromSidebar = (sidebarData: any) => {
  // Find the Components section
  const componentsSection = sidebarData.navigation.sections.find(
    (section: any) => section.title === "Components"
  );

  if (!componentsSection) return [];

  // Get all subsections that are of type "heading"
  const componentHeadings = componentsSection.subsections.filter(
    (subsection: any) => subsection.type === "heading"
  );

  // Extract all component items from each heading
  const components = componentHeadings.reduce((acc: string[], heading: any) => {
    const componentItems = heading.items || [];
    const componentNames = componentItems.map((item: any) => {
      // Extract component name from path, e.g., "/ui/docs/components/button" -> "button"
      const pathParts = item.path?.split("/") || [];
      return pathParts[pathParts.length - 1];
    });
    return [...acc, ...componentNames];
  }, []);

  // Filter out any empty or undefined values and components we don't want to show
  return components.filter(
    (component: string) =>
      component &&
      component !== "table" // Exclude specific components that might not have implementations
  );
};




