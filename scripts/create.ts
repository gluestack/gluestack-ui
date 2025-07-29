import path from 'path';
import fs from 'fs';
import { text, log, isCancel, cancel } from '@clack/prompts';

const create = (componentName: string) => {
  const componentPath = path.join(process.cwd(), 'src', 'components','ui', componentName);
  fs.mkdirSync(componentPath, { recursive: true });
  fs.writeFileSync(path.join(componentPath, 'index.tsx'), copyPastableTemplate(componentName));
  log.success(`✅ Component '${componentName}' created successfully at: ${componentPath}`);
};

const copyPastableTemplate = (componentName:string) => {
    return `
export default ${componentName} = () => {
  return (
    <View>
      <Text>${componentName}</Text>
    </View>
  );
};
`
const promptForComponentName = async (): Promise<string> => {
  const componentName = await text({
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

  return componentName.trim();
};

const main = async () => {
  let componentName = process.argv[2];

  if (!componentName) {
    log.info('No component name provided. Please enter one:');
    componentName = await promptForComponentName();
  }

  if (!componentName) {
    log.error('❌ Component name is required');
    process.exit(1);
  }

  create(componentName);
};

main().catch((error) => {
  log.error(`❌ Error creating component: ${error}`);
  process.exit(1);
});