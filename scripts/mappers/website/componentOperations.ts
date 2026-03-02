import path from 'path';
import fs from 'fs';
import {
  processComponentChange,
  copySpecialFile,
  MapperConfig,
} from '../utils/componentOperations';
import * as fileOps from '../utils/fileOperations';
import { createAllComponentsTemplate } from './templates';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('src/components/ui'),
  destPath: path.resolve('apps/website/components/ui'),
  ignoreFiles: ['docs', 'examples', 'dependencies.json'],
};

export const copyComponent = (component: string, event: string = 'added', filePath?: string) => {
  processComponentChange(component, event, mapperConfig, filePath);
};

export const deleteComponentDocs = (component: string, filePath?: string) => {
  if (filePath) {
    // A specific file was removed — delete only the corresponding file in the component dest
    const componentSourcePath = path.join(path.resolve('src/components/ui'), component);
    const relPath = path.relative(componentSourcePath, filePath);
    const destFilePath = path.join(path.resolve('apps/website/components/ui'), component, relPath);

    try {
      if (fileOps.pathExists(destFilePath)) {
        const stats = fs.statSync(destFilePath);
        if (stats.isDirectory()) {
          fileOps.deletePath(destFilePath);
          console.log(`🗑️ Removed subdirectory: ${relPath} from ${component} (website)`);
        } else {
          fs.unlinkSync(destFilePath);
          console.log(`🗑️ Removed file: ${relPath} from ${component} (website)`);
        }
      }
    } catch (error) {
      console.error(`❌ Error deleting file ${relPath} from ${component}:`, error);
    }
    return;
  }

  const paths = [
    {
      path: path.join(path.resolve('apps/website/app/ui/docs/components'), component),
      label: 'component docs'
    },
    {
      path: path.join(path.resolve('apps/website/components/page-components/all-components'), component),
      label: 'component example'
    },
    {
      path: path.join(path.resolve('apps/website/components/ui'), component),
      label: 'component'
    }
  ];

  paths.forEach(({ path: componentPath, label }) => {
    try {
      if (fileOps.pathExists(componentPath)) {
        fileOps.deletePath(componentPath);
        console.log(`🗑️ Deleted ${label}: ${component}`);
      }
    } catch (error) {
      console.error(`❌ Error deleting ${label} ${component}:`, error);
    }
  });
};

export const processSidebarFile = (filePath: string) => {
  const destPath = path.resolve('apps/website/sidebar.json');
  const allComponentsPath = path.resolve(
    'apps/website/components/page-components/all-components/index.tsx'
  );

  // Copy the sidebar file
  copySpecialFile(filePath, destPath);

  // Read and parse the JSON file to generate all components template
  try {
    const sidebar = fileOps.readJsonFile(filePath);
    let components = getComponentsFromSidebar(sidebar).sort();
    components = components.map(
      (component: string) => component.replace(/-/g, '') + 'Component'
    );
    const componentsNameList = getComponentsFromSidebar(sidebar).sort();
    const componentMap = createComponentMap(components, componentsNameList);
    const template = createAllComponentsTemplate(
      components,
      componentMap,
      componentsNameList
    );

    fileOps.writeTextFile(allComponentsPath, template);
  } catch (error) {
    console.error('❌ Error processing sidebar file:', error);
  }
};

const getComponentsFromSidebar = (sidebarData: any) => {
  // Find the Components section
  const componentsSection = sidebarData.navigation.sections.find(
    (section: any) => section.title === 'Components'
  );

  if (!componentsSection) return [];

  // Get all subsections that are of type "heading"
  const componentHeadings = componentsSection.subsections.filter(
    (subsection: any) => subsection.type === 'heading'
  );

  // Extract all component items from each heading
  const components = componentHeadings.reduce((acc: string[], heading: any) => {
    const componentItems = heading.items || [];
    const componentNames = componentItems.map((item: any) => {
      // Extract component name from path, e.g., "/ui/docs/components/button" -> "button"
      const pathParts = item.path?.split('/') || [];
      return pathParts[pathParts.length - 1];
    });
    return [...acc, ...componentNames];
  }, []);

  // Filter out any empty or undefined values and components we don't want to show
  return components.filter(
    (component: string) => component && component !== ''
  );
};

const createComponentMap = (
  components: string[],
  componentsNameList: string[]
) => {
  return `
  
    ${components
      .map(
        (component, index) => `
    import ${component} from './${componentsNameList[index]}'`
      )
      .join('\n')}
  
  `;
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
