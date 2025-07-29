import path from 'path';
import fs from 'fs';
import { text, log, isCancel, cancel, select } from '@clack/prompts';

const readSidebar = async () => {
  try {
    const sidebar = fs.readFileSync(
      path.join(process.cwd(), 'src', 'sidebar.json'),
      'utf8'
    );
    return JSON.parse(sidebar);
  } catch (error) {
    log.error(`Error reading sidebar.json: ${error}`);
    return null;
  }
};

const updateSidebar = async (componentName: string, componentType: string) => {
  try {
    const sidebarJson = await readSidebar();
    if (!sidebarJson) return false;

    // Find the Components section
    const componentsSection = sidebarJson.navigation.sections.find(
      (section: any) => section.title === 'Components'
    );

    if (!componentsSection || !componentsSection.subsections) {
      return false;
    }

    // Find the specific category subsection
    const categoryKey = componentType.toLowerCase().replace(/\s+/g, '-');
    const targetSubsection = componentsSection.subsections.find(
      (subsection: any) =>
        subsection.type === 'heading' &&
        subsection.title.toLowerCase().replace(/\s+/g, '-') === categoryKey
    );

    if (!targetSubsection) {
      log.warn(`Category '${componentType}' not found in sidebar`);
      return false;
    }

    // Add the new component to the category
    const newComponent = {
      title: componentName.charAt(0).toUpperCase() + componentName.slice(1),
      path: `/ui/docs/components/${componentName.toLowerCase()}`,
      url: `https://i.imgur.com/iLgtAcF.png`,
      darkUrl: `https://i.imgur.com/or5K0UG.png`,
    };

    // Initialize items array if it doesn't exist
    if (!targetSubsection.items) {
      targetSubsection.items = [];
    }

    // Add the component to the end of the category
    targetSubsection.items.push(newComponent);

    // Write the updated sidebar back to file
    const sidebarPath = path.join(process.cwd(), 'src', 'sidebar.json');
    fs.writeFileSync(sidebarPath, JSON.stringify(sidebarJson, null, 2));

    log.success(
      `✅ Component '${componentName}' added to sidebar in '${componentType}' category`
    );
    return true;
  } catch (error) {
    log.error(`Error updating sidebar.json: ${error}`);
    return false;
  }
};

const validComponentName = async (componentName: string): Promise<boolean> => {
  const sidebarJson = await readSidebar();
  if (!sidebarJson) return false;

  const componentsSection = sidebarJson.navigation.sections.find(
    (section: any) => section.title === 'Components'
  );

  if (!componentsSection || !componentsSection.subsections) {
    return false;
  }

  // Check all component names across all categories
  for (const subsection of componentsSection.subsections) {
    if (subsection.type === 'heading' && subsection.items) {
      for (const item of subsection.items) {
        if (item.title.toLowerCase() === componentName.toLowerCase()) {
          return false; // Component already exists
        }
      }
    }
  }

  return true;
};

const create = async (componentName: string, componentType: string) => {
  const componentPath = path.join(
    process.cwd(),
    'src',
    'components',
    'ui',
    componentName
  );

  // Create component directory
  fs.mkdirSync(componentPath, { recursive: true });

  // Create component file
  fs.writeFileSync(
    path.join(componentPath, 'index.tsx'),
    copyPastableTemplate(componentName, componentType)
  );
  // Create docs directory and file
  const docsPath = path.join(componentPath, 'docs');
  fs.mkdirSync(docsPath, { recursive: true });
  fs.writeFileSync(
    path.join(docsPath, 'index.mdx'),
    docsTemplate(componentName, componentType)
  );
  // Create component example file
  const examplesPath = path.join(componentPath, 'examples');
  fs.mkdirSync(examplesPath, { recursive: true });
  const basicExamplePath = path.join(examplesPath, 'basic');
  fs.mkdirSync(basicExamplePath, { recursive: true });
  fs.writeFileSync(
    path.join(basicExamplePath, 'meta.json'),
    metaTemplate(componentName, componentType)
  );
  fs.writeFileSync(
    path.join(basicExamplePath, 'template.handlebars'),
    handlebarsTemplate(componentName, componentType)
  );

  // Create component example file

  log.success(
    `✅ Component '${componentName}' created successfully at: ${componentPath}`
  );

  // Update sidebar.json
  await updateSidebar(componentName, componentType);
};

const copyPastableTemplate = (componentName: string, componentType: string) => {
  return `
import { View, Text } from 'react-native';

export default function ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}() {
  return (
    <View>
      <Text>${componentName} - ${componentType}</Text>
    </View>
  );
};
`;
};

const metaTemplate = (componentName: string, componentType: string) => {
  return `
{
  "title": "Basic",
  "argTypes": {},
  "reactLive": {
    "${componentName.toUpperCase()}": "@/components/ui/${componentName}"
  }
}
`;
};
const handlebarsTemplate = (componentName: string, componentType: string) => {
  return `
  function Example() {
  return (
    <${componentName.toUpperCase()}/>
  )
}
  `;
};

const docsTemplate = (componentName: string, componentType: string) => {
  return `
import {
  Table,
  TableHeader,
  TableCell,
  TableHeaderCell,
  TableBody,
  TableRow,
} from '@/docs-components/table';
import { InlineCode } from '@/docs-components/inline-code';
import { AnatomyImage } from '@/docs-components/anatomy-image';
import { Tabs, TabItem } from '@/docs-components/tabs';

# ${componentName.toUpperCase()}


This is an illustration of **${componentName.toUpperCase()}** component.

/// {Example:basic} ///
`;
};

const readComponentTypes = async () => {
  const sidebarJson = await readSidebar();
  if (!sidebarJson) return [];

  // Find the Components section
  const componentsSection = sidebarJson.navigation.sections.find(
    (section: any) => section.title === 'Components'
  );

  if (!componentsSection || !componentsSection.subsections) {
    return [];
  }

  // Extract component categories (headings) from subsections
  const componentTypes = componentsSection.subsections
    .filter((subsection: any) => subsection.type === 'heading')
    .map((subsection: any) => ({
      value: subsection.title.toLowerCase().replace(/\s+/g, '-'),
      label: subsection.title,
      hint: `${subsection.items?.length || 0} components`,
    }));

  return componentTypes;
};

const promptForComponentType = async (): Promise<string> => {
  const componentTypes = await readComponentTypes();

  if (componentTypes.length === 0) {
    log.warn('No component types found in sidebar.json');
    return 'custom';
  }

  const selectedType = await select({
    message: 'What type of component do you want to create?',
    options: componentTypes,
  });

  if (isCancel(selectedType)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  return selectedType as string;
};

const promptForComponentName = async (): Promise<string> => {
  let componentName: string | symbol;

  do {
    componentName = await text({
      message: 'Enter component name:',
      placeholder: 'myComponent',
      validate: (value: string) => {
        if (!value || value.trim() === '') {
          return 'Component name is required';
        }
        if (!/^[a-z][a-zA-Z0-9]*$/.test(value)) {
          return 'Component name must start with lowercase letter and contain only letters and numbers';
        }
      },
    });

    if (isCancel(componentName)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    const trimmedName = componentName.trim();

    // Check if component already exists
    const isValid = await validComponentName(trimmedName);
    if (!isValid) {
      log.error(`❌ Component '${trimmedName}' already exists in the sidebar`);
      log.info('Please enter a different component name:');
      continue;
    }

    return trimmedName;
  } while (true);
};

const main = async () => {
  let componentName = process.argv[2];
  let componentType = process.argv[3];

  if (!componentName) {
    log.info('No component name provided. Please enter one:');
    componentName = await promptForComponentName();
  } else {
    // Validate component name if provided as argument
    const isValid = await validComponentName(componentName);
    if (!isValid) {
      log.error(
        `❌ Component '${componentName}' already exists in the sidebar`
      );
      process.exit(1);
    }
  }

  if (!componentType) {
    log.info('No component type provided. Please select one:');
    componentType = await promptForComponentType();
  }

  if (!componentName) {
    log.error('❌ Component name is required');
    process.exit(1);
  }

  await create(componentName, componentType);
};

main().catch((error) => {
  log.error(`❌ Error creating component: ${error}`);
  process.exit(1);
});
