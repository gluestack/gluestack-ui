import path from 'path';
import fs from 'fs';
import {
  processComponentChange,
  copySpecialFile,
  MapperConfig,
} from '../utils/componentOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('src/components/ui'),
  destPath: path.resolve('apps/kitchen-sink/components/ui'),
  ignoreFiles: ['docs', 'examples', 'dependencies.json'],
};

export const copyComponent = (component: string, event: string = 'added') => {
  // Skip excluded components
  if (EXCLUDED_DIRS.includes(component)) {
    console.log(`Skipping excluded component: ${component}`);
    return;
  }
  processComponentChange(component, event, mapperConfig);
};

// Directories to exclude (not actual components)
const EXCLUDED_DIRS = [
  'all-components',
  'gluestack-ui-provider',
  'utils',
  'my-component',
];

// Count variants by checking examples directory
function countVariants(componentPath: string): number {
  const examplesPath = path.join(componentPath, 'examples');
  if (!fs.existsSync(examplesPath)) {
    return 0;
  }

  try {
    const examples = fs.readdirSync(examplesPath, { withFileTypes: true });
    return examples.filter((item) => item.isDirectory()).length;
  } catch {
    return 0;
  }
}

// Extract component paths from sidebar.json
function extractComponentsFromSidebar(
  sidebarPath: string
): Map<string, string> {
  const componentMap = new Map<string, string>(); // path -> title

  try {
    const sidebarContent = fs.readFileSync(sidebarPath, 'utf-8');
    const sidebar = JSON.parse(sidebarContent);

    // Find the Components section
    const componentsSection = sidebar.navigation?.sections?.find(
      (section: any) => section.title === 'Components'
    );

    if (!componentsSection) {
      return componentMap;
    }

    // Recursively extract components from subsections
    function extractFromSubsections(subsections: any[]) {
      subsections.forEach((subsection: any) => {
        if (subsection.items && Array.isArray(subsection.items)) {
          subsection.items.forEach((item: any) => {
            if (item.path && item.path.startsWith('/ui/docs/components/')) {
              // Extract component name from path
              // e.g., "/ui/docs/components/alert-dialog" -> "alert-dialog"
              const componentPath = item.path.replace(
                '/ui/docs/components/',
                ''
              );
              if (componentPath && componentPath !== 'all-components') {
                componentMap.set(componentPath, item.title);
              }
            }
          });
        }
      });
    }

    extractFromSubsections(componentsSection.subsections || []);
  } catch (error) {
    console.error('Error reading sidebar.json:', error);
  }

  return componentMap;
}

// Helper function to convert component path to title case
function pathToTitle(componentPath: string): string {
  return componentPath
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Update the _layout.tsx file with Stack.Screen entries
function updateLayoutFile(sidebarComponentMap: Map<string, string>) {
  const layoutPath = path.resolve(
    'apps/kitchen-sink/app/(home)/components/_layout.tsx'
  );

  if (!fs.existsSync(layoutPath)) {
    console.warn('Layout file not found:', layoutPath);
    return;
  }

  try {
    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

    // Extract existing Stack.Screen entries
    const existingScreens = new Set<string>();
    const screenRegex = /<Stack\.Screen\s+name="([^"]+)"/g;
    let match;
    while ((match = screenRegex.exec(layoutContent)) !== null) {
      existingScreens.add(match[1]);
    }

    // Find components that need to be added
    const componentsToAdd: Array<{ path: string; title: string }> = [];
    sidebarComponentMap.forEach((title, componentPath) => {
      if (EXCLUDED_DIRS.includes(componentPath)) {
        return;
      }
      if (!existingScreens.has(componentPath)) {
        componentsToAdd.push({ path: componentPath, title });
      }
    });

    if (componentsToAdd.length === 0) {
      console.log('All components already have Stack.Screen entries');
      return;
    }

    // Sort components alphabetically
    componentsToAdd.sort((a, b) => a.title.localeCompare(b.title));

    // Generate new Stack.Screen entries
    const newStackScreens = componentsToAdd
      .map(({ path, title }) => {
        return `      <Stack.Screen
        name="${path}"
        options={{
          header: () => <CustomHeader title="${title}" />,
        }}
      />`;
      })
      .join('\n');

    // Find the closing </Stack> tag and insert before it
    const closingStackIndex = layoutContent.lastIndexOf('</Stack>');
    if (closingStackIndex === -1) {
      console.error('Could not find closing </Stack> tag in layout file');
      return;
    }

    // Insert new Stack.Screen entries before the closing tag
    const beforeClosing = layoutContent.substring(0, closingStackIndex);
    const afterClosing = layoutContent.substring(closingStackIndex);

    const updatedContent = `${beforeClosing}${newStackScreens}\n    ${afterClosing}`;

    // Write back to file
    fs.writeFileSync(layoutPath, updatedContent, 'utf-8');
    console.log(
      `✓ Added ${componentsToAdd.length} Stack.Screen entries to _layout.tsx:`,
      componentsToAdd.map((c) => c.path).join(', ')
    );
  } catch (error) {
    console.error('Error updating layout file:', error);
  }
}

export const processSidebarFile = (filePath: string) => {
  // Copy sidebar.json as before
  const destPath = path.resolve('apps/kitchen-sink/constants/sidebar.json');
  copySpecialFile(filePath, destPath);

  // Extract components from sidebar.json
  const sidebarComponentMap = extractComponentsFromSidebar(filePath);

  if (sidebarComponentMap.size === 0) {
    console.warn('No components found in sidebar.json');
    return;
  }

  // Update the _layout.tsx file with Stack.Screen entries
  updateLayoutFile(sidebarComponentMap);

  // Generate component list array only from sidebar.json components
  const sourcePath = path.resolve('src/components/ui');
  const componentsListPath = path.resolve(
    'apps/kitchen-sink/constants/components-list.ts'
  );

  if (!fs.existsSync(sourcePath)) {
    return;
  }

  try {
    const components: Array<{ title: string; path: string; count: number }> =
      [];

    // Iterate through components in sidebar.json
    sidebarComponentMap.forEach((title, componentPath) => {
      // Skip excluded components
      if (EXCLUDED_DIRS.includes(componentPath)) {
        return;
      }

      const componentDir = path.join(sourcePath, componentPath);

      // Check if component directory exists
      if (!fs.existsSync(componentDir)) {
        return;
      }

      // Check if it has an index file (indicating it's a component)
      const indexPath = path.join(componentDir, 'index.tsx');
      if (!fs.existsSync(indexPath)) {
        return;
      }

      // Count variants
      const variantCount = countVariants(componentDir);

      components.push({
        title: title,
        path: componentPath,
        count: variantCount || 4, // Default to 4 if no examples found
      });
    });

    // Sort alphabetically by title
    components.sort((a, b) => a.title.localeCompare(b.title));

    // Map component paths to icon names (only for components that have icons)
    const iconMap: Record<string, string> = {
      'accordion': 'AccordionIcon',
      'actionsheet': 'ActionsheetIcon',
      'alert': 'AlertIcon',
      'alert-dialog': 'AlertDialogIcon',
      'avatar': 'AvatarIcon',
      'badge': 'BadgeIcon',
      'box': 'BoxIcon',
      'button': 'ButtonIcon',
      'card': 'CardIcon',
      'center': 'CenterIcon',
      'checkbox': 'CheckboxIcon',
      'divider': 'DividerIcon',
      'drawer': 'DrawerIcon',
      'fab': 'FabIcon',
      'form-control': 'FormControlIcon',
      'grid': 'GridIcon',
      'heading': 'HeadingIcon',
      'hstack': 'HStackIcon',
      'icon': 'IconIcon',
      'image': 'ImageIcon',
      'input': 'InputIcon',
      'link': 'LinkIcon',
      'menu': 'MenuIcon',
      'modal': 'ModalIcon',
      'popover': 'PopoverIcon',
      'portal': 'PortalIcon',
      'pressable': 'PressableIcon',
      'progress': 'ProgressIcon',
      'radio': 'RadioIcon',
      'select': 'SelectIcon',
      'skeleton': 'SkeletonIcon',
      'slider': 'SliderIcon',
      'spinner': 'SpinnerIcon',
      'switch': 'SwitchIcon',
      'table': 'TableIcon',
      'text': 'TextIcon',
      'textarea': 'TextareaIcon',
      'toast': 'ToastIcon',
      'tooltip': 'TooltipIcon',
      'vstack': 'VStackIcon',
    };

    // Generate TypeScript file content
    const imports = `import {
  AccordionIcon,
  ActionsheetIcon,
  AlertDialogIcon,
  AlertIcon,
  AvatarIcon,
  BadgeIcon,
  BoxIcon,
  ButtonIcon,
  CardIcon,
  CenterIcon,
  CheckboxIcon,
  DividerIcon,
  DrawerIcon,
  FabIcon,
  FormControlIcon,
  GridIcon,
  HeadingIcon,
  HStackIcon,
  IconIcon,
  ImageIcon,
  InputIcon,
  LinkIcon,
  MenuIcon,
  ModalIcon,
  PopoverIcon,
  PortalIcon,
  PressableIcon,
  ProgressIcon,
  RadioIcon,
  SelectIcon,
  SkeletonIcon,
  SliderIcon,
  SpinnerIcon,
  SwitchIcon,
  TableIcon,
  TextareaIcon,
  TextIcon,
  ToastIcon,
  TooltipIcon,
  VStackIcon,
} from "@/components/custom/custom-icons";
import type { ComponentItem } from "@/components/custom/bottom-control-bar";

`;

    const componentsArray = components
      .map((comp) => {
        const iconName = iconMap[comp.path];
        const iconProp = iconName ? `icon: ${iconName}` : '';
        return `  { title: "${comp.title}", path: "${comp.path}", count: ${comp.count}${iconProp ? `, ${iconProp}` : ''} }`;
      })
      .join(',\n');

    const getComponentByPathFunction = `
export const getComponentByPath = (path: string): ComponentItem | undefined => {
  return COMPONENTS_LIST.find((c) => c.path === path);
};
`;

    const fileContent = `${imports}export const COMPONENTS_LIST: ComponentItem[] = [
${componentsArray}
];
${getComponentByPathFunction}
`;

    // Ensure destination directory exists
    const destDir = path.dirname(componentsListPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Write the TypeScript file
    fs.writeFileSync(componentsListPath, fileContent, 'utf-8');
  } catch (error) {
    console.error('Error generating components list:', error);
  }
};
