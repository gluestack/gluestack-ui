import path from 'path';
import fs from 'fs';
import { text, log, isCancel, cancel, select, confirm } from '@clack/prompts';

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

const updateSidebar = async (componentName: string, componentType: string, isRSC: boolean = false) => {
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
    const newComponent: any = {
      title: componentName.charAt(0).toUpperCase() + componentName.slice(1),
      path: `/ui/docs/components/${componentName.toLowerCase()}`,
      url: `https://i.imgur.com/iLgtAcF.png`,
      darkUrl: `https://i.imgur.com/or5K0UG.png`,
    };

    // Add RSC tag if component is RSC
    if (isRSC) {
      newComponent.tags = ['rsc'];
    }

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
      `✅ Component '${componentName}' added to sidebar in '${componentType}' category${isRSC ? ' with RSC tag' : ''}`
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

const create = async (componentName: string, componentType: string, isRSC: boolean = false, needsCreator: boolean = false) => {
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
    copyPastableTemplate(componentName, componentType, isRSC)
  );
  
  // Create creator directory and file if needed
  if (needsCreator) {

    const creatorPath = path.join(
    process.cwd(),
    'packages',
    'gluestack-core',
    'src',
    componentName
  );
    fs.mkdirSync(creatorPath, { recursive: true });
    fs.writeFileSync(
      path.join(creatorPath, 'index.tsx'),
      creatorTemplate(componentName)
    );
    log.success(`✅ Creator directory created at: ${creatorPath}`);
  }
  
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
  await updateSidebar(componentName, componentType, isRSC);
};

const copyPastableTemplate = (componentName: string, componentType: string, isRSC: boolean = false) => {
  const rscComment = isRSC ? '\n// This component is a React Server Component' : '';
  
  return `
import { View, Text } from 'react-native';${rscComment}

export function ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}() {
  return (
    <View>
      <Text>${componentName} - ${componentType}</Text>
    </View>
  );
};
`;
};

const creatorTemplate = (componentName: string) => {
  return `
// Creator functionality for ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} component
// Add your creator logic here

export const create${componentName.charAt(0).toUpperCase() + componentName.slice(1)} = () => {
  // Implementation here
};
`;
};

const metaTemplate = (componentName: string, componentType: string) => {
  return `
{
  "title": "Basic",
  "argTypes": {},
  "reactLive": {
    "${componentName.charAt(0).toUpperCase() + componentName.slice(1)}": "@/components/ui/${componentName}"
  }
}
`;
};

const handlebarsTemplate = (componentName: string, componentType: string) => {
  return `
  function Example() {
  return (
    <${componentName.charAt(0).toUpperCase() + componentName.slice(1)}/>
  )
}
  `;
};

const docsTemplate = (componentName: string, componentType: string) => {
  const componentNamePascal = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  
  return `
---
title: gluestack-ui ${componentNamePascal} Component
---
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

# ${componentNamePascal}

This is an illustration of **${componentNamePascal}** component.

/// {Example:basic} ///

## Installation

<Tabs>
<TabItem label="CLI">
### Run the following command:
<CodeBlock code={\`\${process.env.NEXT_PUBLIC_GLUESTACK_COMMAND || 'npx gluestack-ui'} add ${componentName}\`} language="bash" />

</TabItem>
<TabItem label="Manual">
### Step 1: Copy and paste the following code into your project.

\`\`\`tsx
%%-- File: src/components/ui/${componentName}/index.tsx --%%
\`\`\`

### Step 2: Update the import paths to match your project setup.

</TabItem>
</Tabs>

## API Reference

To use this component in your project, include the following import statement in your file.

\`\`\`ts
import { ${componentNamePascal} } from '@/components/ui/${componentName}';
\`\`\`

\`\`\`ts
export default () => <${componentNamePascal} />;
\`\`\`
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

const promptForRSC = async (): Promise<boolean> => {
  const isRSC = await confirm({
    message: 'Is this a React Server Component (RSC)?',
    initialValue: false,
  });

  if (isCancel(isRSC)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  return isRSC as boolean;
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
      log.error(
        `❌ Component '${trimmedName}' already exists in the sidebar`
      );
      log.info('Please enter a different component name:');
      continue;
    }

    return trimmedName;
  } while (true);
};

const promptForCreator = async (): Promise<boolean> => {
  const needsCreator = await confirm({
    message: 'Does this component need a creator function?',
    initialValue: false,
  });

  if (isCancel(needsCreator)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  return needsCreator as boolean;
};

const main = async () => {
  let componentName = process.argv[2];
  let componentType = process.argv[3];
  let isRSC = process.argv[4] === '--rsc';
  let needsCreator = false;

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

  if (!isRSC && process.argv[4] !== '--no-rsc') {
    log.info('RSC status not specified. Please confirm:');
    isRSC = await promptForRSC();
  }

  if (!componentName) {
    log.error('❌ Component name is required');
    process.exit(1);
  }

  if (process.argv[4] === '--creator' || process.argv[5] === '--creator') {
    needsCreator = true;
  } else if (!process.argv[4] || process.argv[4] === '--rsc' || process.argv[4] === '--no-rsc') {
    log.info('Creator functionality not specified. Please confirm:');
    needsCreator = await promptForCreator();
  }

  await create(componentName, componentType, isRSC, needsCreator);
};

main().catch((error) => {
  log.error(`❌ Error creating component: ${error}`);
  process.exit(1);
});
