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
  const sourceSidebarPath = path.resolve('src/sidebar.json');
  const destSidebarPath = path.resolve('apps/website/sidebar.json');
  const allComponentsPath = path.resolve('apps/website/components/page-components/all-components/index.tsx');
  // Read and parse the JSON file
  const sidebar = fileOps.readJsonFile(sourceSidebarPath);
  
  // Log the sidebar data to ensure it's being read correctly
  console.log("Sidebar Data:", JSON.stringify(sidebar, null, 2));
  
let components = getComponentsFromSidebar(sidebar).sort();
components = components.map((component: string) => component.replace('-', '') + 'Component');
console.log(components);
const componentsNameList = getComponentsFromSidebar(sidebar).sort();
console.log(componentsNameList);
const componentMap = createComponentMap(components,componentsNameList);
console.log(componentMap);
const template = createTemplate(components, componentMap,componentsNameList);
console.log(template);
  // Proceed with copying the file
  copySpecialFile(sourceSidebarPath, destSidebarPath);
  fileOps.writeTextFile(allComponentsPath, template);
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
      component !== "table" &&
      component !== "bottomsheet"
  );
};

const createComponentMap = (components: string[],componentsNameList: string[]) => {
  return `
  
    ${components.map((component,index) => `
    import ${component} from './${componentsNameList[index]}'`).join('\n')}
  
  `;
};

const createTemplate = (components: string[], componentMap: string,componentsNameList: string[]) => {
  return `import React from 'react';
import sidebarData from '@/sidebar.json';
import { GridItem } from '@/components/ui/grid';
import { Box, Grid } from '@/components/ui';
import { Text } from '@/components/ui/text';

${componentMap}

const componentsList = [${components}];
const componentsNameList = ${JSON.stringify(componentsNameList)};
export default function AllComponents() {
  return (
    <Grid
      className="gap-5"
      _extra={{
        className: 'sm:grid-cols-2 md:grid-cols-3 grid-cols-1 2xl:grid-cols-4',
      }}
    >
      {componentsNameList.map((componentName,index) => {
        const Component = componentsList[index];

        return (
          <GridItem
            _extra={{
              className: 'col-span-1',
            }}
            key={componentName}
          >
            <Box className="flex h-[250px] border border-outline-100  items-center overflow-hidden justify-center rounded-lg dark:bg-black bg-white">
              <Box className="flex-1 w-full flex items-center justify-center origin-center scale-75">
                <Component />
              </Box>
              <Box
                className="w-full py-2 px-4 bg-background-100 cursor-pointer"
                onClick={() => {
                  window.location.href = \`/ui/docs/components/\${componentName}\`;
                }}
              >
                <Text className="text-left text-typography-700 text-lg font-medium capitalize">
                  {componentName}
                </Text>
              </Box>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}

  `;
};