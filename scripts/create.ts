import path from 'path';
import fs from 'fs';
import readline from 'readline';

const create = (componentName: string) => {
  const componentPath = path.join(process.cwd(), 'src', 'components', componentName);
  fs.mkdirSync(componentPath, { recursive: true });
  fs.writeFileSync(path.join(componentPath, 'index.tsx'), `export * from './${componentName}';`);
  console.log(`✅ Component '${componentName}' created successfully at: ${componentPath}`);
};

const promptForComponentName = (): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Enter component name: ', (componentName) => {
      rl.close();
      resolve(componentName.trim());
    });
  });
};

const main = async () => {
  let componentName = process.argv[2];

  if (!componentName) {
    console.log('No component name provided. Please enter one:');
    componentName = await promptForComponentName();
  }

  if (!componentName) {
    console.error('❌ Component name is required');
    process.exit(1);
  }

  create(componentName);
};

main().catch((error) => {
  console.error('❌ Error creating component:', error);
  process.exit(1);
});