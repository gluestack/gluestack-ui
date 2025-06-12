import path, { join } from 'path';
import fs from 'fs';
import { getDataFiles } from './data';
import { isCancel, cancel, confirm, log } from '@clack/prompts';
import { isFollowingAppDir, isFollowingSrcDir } from '../utils';

const currentDirectory = process.cwd();

const getDocumentExtension = (): string => {
  const tsConfigPath = path.resolve(currentDirectory, 'tsconfig.json');
  return fs.existsSync(tsConfigPath) ? 'tsx' : 'jsx';
};

const updateDocument = async (
  document: string,
  filePath: string
): Promise<void> => {
  try {
    const fullPath = path.resolve(currentDirectory, filePath);
    fs.writeFileSync(fullPath, document, 'utf8');
    log.step(`- \x1b[32m${filePath}\x1b[0m file is updated successfully!`);
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

const updateNextConfig = async (nextConfig: string): Promise<void> => {
  const documentPath = path.resolve(currentDirectory, 'next.config.js');
  try {
    fs.writeFileSync(documentPath, nextConfig, 'utf8');
    log.step(
      '- ' + '\x1b[32mnext.config.js\x1b[0m' + ' file is updated successfully!'
    );
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

function convertToValidString(input: string): string {
  // Replace all occurrences of backslashes with forward slashes
  const output = input.replace(/\\/g, '/');
  return output;
}

const replaceFiles = async (
  folderName: string,
  packageName: string
): Promise<void> => {
  const isAppDir = isFollowingAppDir();
  const appPath = getAppPath();
  const isFollowingSrcDirFlag = isFollowingSrcDir();
  const appDirectory = isFollowingSrcDirFlag
    ? path.join('src', 'pages')
    : 'pages';
  const gluestackConfigImportPath = convertToValidString(
    path.relative(appDirectory, currentDirectory)
  );
  const documentExt = getDocumentExtension();
  const {
    document,
    nextConfig,
    app,
    providerContent,
    layoutContent,
  } = getDataFiles(folderName, gluestackConfigImportPath, packageName);
  if (isAppDir) {
    await createProvidersFile(appPath, providerContent);
    await updateDocument(layoutContent, path.join(appPath, 'layout.tsx'));
  } else {
    await updateDocument(
      document,
      path.join(appDirectory, `_document.${documentExt}`)
    );
    await updateDocument(app, path.join(appDirectory, `_app.${documentExt}`));
  }
  await updateNextConfig(nextConfig);
};

const createProvidersFile = async (
  providersPath: string,
  providerContent: string
): Promise<void> => {
  try {
    fs.writeFileSync(
      path.join(providersPath, 'providers.tsx'),
      providerContent,
      'utf8'
    );
    log.step(`- \x1b[32m${providersPath}\x1b[0m file is created successfully!`);
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
  }
};

const getAppPath = (): string => {
  const appPath = join(process.cwd(), 'app');
  const files = fs.readdirSync(process.cwd());
  if (files.includes('app') && fs.statSync(appPath).isDirectory()) {
    return appPath;
  } else {
    if (
      files.includes('src') &&
      fs.statSync(join(process.cwd(), 'src/app')).isDirectory()
    ) {
      return join(process.cwd(), 'src/app');
    }
  }
  return appPath;
};

const autoSetup = async (
  folderName: string,
  packageName: string
): Promise<any> => {
  const isAppDir = isFollowingAppDir();

  try {
    log.info(
      "Hey there! It looks like we've stumbled upon a \x1b[34mNext.js project\x1b[0m! Would you like to take the express lane and proceed with the automatic setup?"
    );
    if (isAppDir) {
      log.warning(
        `👉 Keep in mind that we'll be shaking things up a bit and overwriting a few files, namely

        -  next.config.ts
        -  app/layout.tsx
         So, it's advisable to save your current changes by committing them before proceeding.`
      );
    } else
      log.warning(
        `👉 Keep in mind that we'll be shaking things up a bit and overwriting a few files, namely

-  next.config.ts
-  _app.tsx
-  _document.tsx

So, it's advisable to save your current changes by committing them before proceeding.`
      );

    const shouldContinue = await confirm({
      message: `Would you like to proceed with the automatic setup?`,
    });

    if (isCancel(shouldContinue)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    if (shouldContinue) {
      log.warning('\x1b[33mOverwriting files...\x1b[0m');
      await replaceFiles(folderName, packageName);

      if (isAppDir) {
        log.step(
          `Just add 'use client' derivative at the top of your pages and you're good to go!`
        );

        log.step(
          `You can now directly use gluestack-ui components in your app! 🎉`
        );
      }
    } else {
      log.warning(`\x1b[33mExiting without overwriting the files...\x1b[0m`);
      log.step(
        `Please visit https://ui.gluestack.io/docs/getting-started/install-nextjs for more information on manual setup.`
      );
    }

    return shouldContinue;
  } catch (err) {
    log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
    return '';
  }
};

export { autoSetup };
