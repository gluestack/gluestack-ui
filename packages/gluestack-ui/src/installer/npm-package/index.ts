import { addDependencies } from '../utils';
import { cancel, isCancel, log, select } from '@clack/prompts';
import fs from 'fs-extra';
import { getDataFiles } from './data';
import { join } from 'path';

const npmPackageInstaller = async (folderPath: string) => {
  try {
    await createIndexFile(folderPath);
    await addTsConfig();
    addDependencies();
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

const addTsConfig = async () => {
  try {
    if (fs.existsSync(join(process.cwd() + '/tsconfig.json'))) {
      const setupType = await isAutoSetup();
      if (setupType === 'No') {
        return;
      }
    }
    fs.writeFileSync(
      'tsconfig.json',
      JSON.stringify({
        compilerOptions: {
          skipLibCheck: true,
          target: 'es6',
          lib: ['es6', 'es2015', 'dom'],
          declaration: true,
          outDir: 'build',
          strict: true,
          types: ['node'],
          esModuleInterop: true,
          module: 'CommonJS',
          moduleResolution: 'node',
          allowJs: true,
          jsx: 'react',
        },
        exclude: ['node_modules'],
        include: ['src'],
      })
    );
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

const createIndexFile = async (folderPath: string) => {
  try {
    const { indexData } = getDataFiles();
    fs.writeFileSync(`${folderPath}/index.ts`, indexData, 'utf8');
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

const isAutoSetup = async (): Promise<string | symbol> => {
  const setupType: string | symbol = await select({
    message:
      'You already have a tsconfig.json file in your project. Do you want us to override the existing file ?',
    options: [
      { value: 'Yes', label: 'Yes' },
      { value: 'No', label: 'No' },
    ],
  });
  if (isCancel(setupType)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }
  return setupType;
};

export { npmPackageInstaller };
