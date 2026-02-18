import os from 'os';
import { config } from '../../config';
import { promisify } from 'util';
import path, { join } from 'path';
import { log, confirm, spinner } from '@clack/prompts';
import fs, { existsSync, writeFile } from 'fs-extra';
import { checkIfInitialized, generateMonoRepoConfig } from '../config';
import {
  cloneRepositoryAtRoot,
  findLockFileType,
  installDependencies,
  promptVersionManager,
  checkComponentDependencies,
} from '..';
import { getProjectBasedDependencies } from '../../dependencies';
import { generateConfigNextApp } from '../config/next-config-helper';
import { generateConfigExpoApp } from '../config/expo-config-helper';
import { generateConfigRNApp } from '../config/react-native-config-helper';
import { checkNextVersion } from '../check-next-version';
import { readFile } from 'fs-extra';
import { modifyLayoutFilesAutomatically } from './modify-layout';

const _currDir = process.cwd();
const _homeDir = os.homedir();

// Get templates from GitHub repository
const getTemplatesPath = () => {
  return join(_homeDir, config.gluestackDir, config.templatesDir);
};

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

interface TSConfig {
  compilerOptions?: {
    paths?: Record<string, string[]>;
    jsxImportSource?: string;
  };
}

const InitializeGlueStack = async ({
  projectType = 'library',
  isTemplate = false,
}: {
  projectType: string;
  isTemplate?: boolean;
}) => {
  try {
    const initializeStatus = await checkIfInitialized(_currDir);
    if (initializeStatus) {
      log.info(
        `\x1b[33mgluestack-ui is already initialized in the project, use 'npx gluestack-ui help' command to continue\x1b[0m`
      );
      process.exit(1);
    }
    const isNextjs15 = await checkNextVersion();

    const confirmOverride = isTemplate
      ? true
      : await overrideWarning(filesToOverride(projectType));

    console.log(`\n\x1b[1mInitializing gluestack-ui v4 alpha...\x1b[0m\n`);
    await cloneRepositoryAtRoot(join(_homeDir, config.gluestackDir));
    const inputComponent = [config.providerComponent];

    // Check dependencies for the provider component
    const { components: providerDependencies } =
      await checkComponentDependencies(inputComponent);

    let additionalDependencies = await getProjectBasedDependencies(
      projectType,
      config.style
    );
    let versionManager: string | null = findLockFileType();
    if (!versionManager) {
      versionManager = await promptVersionManager();
    }
    await installDependencies(
      inputComponent,
      versionManager,
      additionalDependencies
    );
    const s = spinner();
    s.start(
      '⏳ Generating project configuration. This might take a couple of minutes...'
    );
    await generateProjectConfigAndInit(
      projectType,
      confirmOverride,
      isNextjs15
    );

    await addProvider(isNextjs15);

    // Add provider dependencies (like toast) as essential components
    await addEssentialComponents(providerDependencies);

    s.stop(`\x1b[32mProject configuration generated.\x1b[0m`);
    log.step(
      'Please refer the above link for more details --> \x1b[33mhttps://gluestack.io/ui/docs/home/overview/introduction \x1b[0m'
    );
    log.success(
      `\x1b[32mDone!\x1b[0m Initialized \x1b[1mgluestack-ui v4 alpha\x1b[0m in the project`
    );
  } catch (err) {
    log.error(`\x1b[31mError occured in init. (${err as Error})\x1b[0m`);
    process.exit(1);
  }
};

async function addProvider(isNextjs15: boolean | undefined) {
  try {
    const targetPath = join(
      _currDir,
      config.writableComponentsPath,
      config.providerComponent
    );
    const sourcePath = join(
      _homeDir,
      config.gluestackDir,
      config.componentsResourcePath,
      config.providerComponent
    );

    await fs.ensureDir(targetPath);

    // Copy only files from the root directory, excluding subdirectories and dependencies.json
    const files = await fs.readdir(sourcePath, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile() && file.name !== 'dependencies.json') {
        await fs.copy(
          join(sourcePath, file.name),
          join(targetPath, file.name),
          { overwrite: true }
        );
      }
    }
    if (isNextjs15) {
      const templatesPath = getTemplatesPath();
      const providerContent = await readFile(
        join(templatesPath, 'nextjs', 'next15', 'index.web.tsx'),
        'utf8'
      );
      await writeFile(
        join(targetPath, 'index.web.tsx'),
        providerContent,
        'utf8'
      );
    }
  } catch (err) {
    log.error(`\x1b[31mError occured while adding the provider.\x1b[0m`);
    throw new Error((err as Error).message);
  }
}

async function addEssentialComponents(components: string[]) {
  try {
    if (components.length === 0) {
      return;
    }

    for (const component of components) {
      const targetPath = join(
        _currDir,
        config.writableComponentsPath,
        component
      );
      const sourcePath = join(
        _homeDir,
        config.gluestackDir,
        config.componentsResourcePath,
        component
      );

      await fs.ensureDir(targetPath);

      // Copy only files from the root directory, excluding subdirectories and dependencies.json
      const files = await fs.readdir(sourcePath, { withFileTypes: true });

      for (const file of files) {
        if (file.isFile() && file.name !== 'dependencies.json') {
          await fs.copy(
            join(sourcePath, file.name),
            join(targetPath, file.name),
            { overwrite: true }
          );
        }
      }
    }
    log.step(`✅ Added provider dependencies: ${components.join(', ')}`);
  } catch (err) {
    log.error(
      `\x1b[31mError occurred while adding provider dependencies.\x1b[0m`
    );
    throw new Error((err as Error).message);
  }
}

//update tailwind.config.js
async function updateTailwindConfig(resolvedConfig: any, projectType: string) {
  try {
    const templatesPath = getTemplatesPath();
    const tailwindConfigRootPath = join(templatesPath, 'tailwind.config.js');
    const tailwindConfigPath = resolvedConfig.tailwind.config;
    await fs.copy(tailwindConfigRootPath, tailwindConfigPath);
  } catch (err) {
    log.error(`\x1b[31mError: ${err as Error}\x1b[0m`);
  }
}

//updateConfig helper, create default tsconfig.json
function createDefaultTSConfig() {
  return {
    compilerOptions: {
      paths: {
        '@/*': ['./*'],
      },
    },
    exclude: ['node_modules'],
  };
}
// updateConfig helper, read tsconfig.json
async function readTSConfig(configPath: string): Promise<TSConfig> {
  try {
    return JSON.parse(await readFileAsync(configPath, 'utf8'));
  } catch {
    return createDefaultTSConfig();
  }
}
// updateConfig helper, update paths in tsconfig.json
function updatePaths(
  paths: Record<string, string[]>,
  key: string,
  newValues: string[]
): void {
  paths[key] = Array.from(new Set([...(paths[key] || []), ...newValues]));
}
//update tsconfig.json
async function updateTSConfig(
  projectType: string,
  resolvedConfig: any
): Promise<void> {
  try {
    const configPath = resolvedConfig.config.tsConfig;
    let tsConfig: TSConfig = await readTSConfig(configPath);
    let tailwindConfig = resolvedConfig.tailwind.config;
    const tailwindConfigFileName = path.basename(tailwindConfig);

    tsConfig.compilerOptions = tsConfig.compilerOptions || {};
    tsConfig.compilerOptions.paths = tsConfig.compilerOptions.paths || {};

    // Next.js project specific configuration
    if (projectType === config.nextJsProject) {
      tsConfig.compilerOptions.jsxImportSource = 'nativewind';
    }
    updatePaths(tsConfig.compilerOptions.paths, '@/*', ['./*']);
    updatePaths(tsConfig.compilerOptions.paths, 'tailwind.config', [
      `./${tailwindConfigFileName}`,
    ]);

    await writeFileAsync(configPath, JSON.stringify(tsConfig, null, 2), 'utf8');
  } catch (err) {
    log.error(
      `\x1b[31mError occurred while updating tsconfig.json: ${
        (err as Error).message
      }\x1b[0m`
    );
  }
}

//update global.css
async function updateGlobalCss(resolvedConfig: any): Promise<void> {
  try {
    const globalCSSPath = resolvedConfig.tailwind.css;
    const templatesPath = getTemplatesPath();

    // Determine which template to use based on the target filename
    const cssFileName = path.basename(globalCSSPath);
    const templateCSSFile =
      cssFileName === 'globals.css' ? 'globals.css' : 'global.css';

    const templateContent = await fs.readFile(
      join(templatesPath, 'common', templateCSSFile),
      'utf8'
    );

    // Read existing content
    let existingContent = '';
    try {
      existingContent = await fs.readFile(globalCSSPath, 'utf8');
    } catch (error) {
      // File doesn't exist, create it with template content
      await fs.writeFile(globalCSSPath, templateContent, 'utf8');
      return;
    }

    // Clean and normalize the existing content
    let updatedContent = cleanAndNormalizeCss(existingContent, templateContent);

    // Only write if content has changed
    if (updatedContent !== existingContent) {
      await fs.writeFile(globalCSSPath, updatedContent, 'utf8');
      log.info(`✅ Updated ${cssFileName} with Tailwind directives`);
    } else {
      log.info(`${cssFileName} already contains proper Tailwind directives`);
    }
  } catch (err) {
    log.error(`\x1b[31mError updating global CSS: ${(err as Error).message}\x1b[0m`);
  }
}

function cleanAndNormalizeCss(existingContent: string, templateContent: string): string {
  // Split content into lines for easier processing
  let lines = existingContent.split('\n');
  
  // Remove old tailwindcss import if it exists
  lines = lines.filter(line => 
    !line.trim().match(/^@import\s+["']tailwindcss["'];?\s*$/i)
  );

  // Check if any of the required tailwind directives exist
  const requiredDirectives = [
    '@tailwind base;',
    '@tailwind components;', 
    '@tailwind utilities;'
  ];

  const existingDirectives = new Set<string>();
  
  // Find existing tailwind directives and their positions
  const directiveLines: number[] = [];
  
  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    requiredDirectives.forEach(directive => {
      const directiveWithoutSemicolon = directive.replace(';', '');
      if (
        trimmedLine === directive ||
        trimmedLine === directiveWithoutSemicolon ||
        trimmedLine === directive.replace(';', '') + ' '
      ) {
        existingDirectives.add(directive);
        directiveLines.push(index);
      }
    });
  });

  // If all directives already exist, return original content
  if (existingDirectives.size === requiredDirectives.length) {
    return lines.join('\n');
  }

  // Remove existing tailwind directive lines to avoid duplicates
  lines = lines.filter((_, index) => !directiveLines.includes(index));

  // Find the best position to insert tailwind directives
  let insertPosition = 0;
  
  // Look for existing imports to insert after them
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('@import') || line.startsWith('@charset')) {
      insertPosition = i + 1;
    } else if (line.length > 0 && !line.startsWith('/*') && !line.startsWith('*')) {
      // Found first non-comment, non-import line
      break;
    }
  }

  // Insert the template content (tailwind directives) at the appropriate position
  const templateLines = templateContent.split('\n').filter(line => line.trim());
  
  // Insert template lines
  lines.splice(insertPosition, 0, ...templateLines);

  // Clean up multiple consecutive empty lines
  const cleanedLines: string[] = [];
  let consecutiveEmptyLines = 0;
  
  for (const line of lines) {
    if (line.trim() === '') {
      consecutiveEmptyLines++;
      if (consecutiveEmptyLines <= 1) { // Allow max 1 consecutive empty line
        cleanedLines.push(line);
      }
    } else {
      consecutiveEmptyLines = 0;
      cleanedLines.push(line);
    }
  }

  // Ensure there's a newline at the end
  let result = cleanedLines.join('\n');
  if (!result.endsWith('\n') && result.length > 0) {
    result += '\n';
  }

  return result;
}

async function commonInitialization(
  projectType: string,
  resolvedConfig: any,
  permission: boolean | symbol
) {
  try {
    //get resolvedFileNames from the resolvedConfig
    const resolvedConfigValues = Object.values(resolvedConfig).flat(Infinity);
    const flattenedConfigValues = resolvedConfigValues.flatMap((value) =>
      typeof value === 'string' ? value : Object.values(value as object)
    );
    const resolvedConfigFileNames = flattenedConfigValues
      .map((filePath: any) =>
        typeof filePath === 'string' ? path.parse(filePath).base : null
      )
      .filter((fileName): fileName is string => fileName !== null);

    const templatesPath = getTemplatesPath();
    const resourcePath = join(templatesPath, projectType);

    //if any filepath
    if (existsSync(resourcePath)) {
      const filesAndFolders = fs.readdirSync(resourcePath);

      //if any fileName in resourcePath matches with the resolvedConfigFileNames, copy the file
      await Promise.all(
        filesAndFolders.map(async (file) => {
          const templateFileName = path.parse(file).name;
          const templateFileExt = path.parse(file).ext;

          // Check if any resolved config file matches this template file
          const matchingConfigFile = resolvedConfigFileNames.find(
            (configFileName: string) => {
              const configName = path.parse(configFileName).name;
              const configExt = path.parse(configFileName).ext;

              // For config files that can have multiple extensions, prioritize exact matches
              if (
                configName === templateFileName &&
                (templateFileName === 'next.config' ||
                  templateFileName === 'postcss.config' ||
                  templateFileName === 'tailwind.config')
              ) {
                // If extensions match exactly, this is the preferred match
                if (configExt === templateFileExt) {
                  return true;
                }

                // Only allow extension mismatch if no template with matching extension exists
                const hasMatchingExtensionTemplate = filesAndFolders.some(
                  (otherFile) => {
                    const otherTemplateName = path.parse(otherFile).name;
                    const otherTemplateExt = path.parse(otherFile).ext;
                    return (
                      otherTemplateName === templateFileName &&
                      otherTemplateExt === configExt
                    );
                  }
                );

                return !hasMatchingExtensionTemplate;
              }

              // For other files, require exact match
              return (
                configName === templateFileName && configExt === templateFileExt
              );
            }
          );

          if (matchingConfigFile) {
            const targetFileName = matchingConfigFile;
            const targetPath = join(_currDir, targetFileName);

            // Ensure the directory exists
            await fs.ensureDir(path.dirname(targetPath));

            // Copy the file with error handling
            try {
              await fs.copy(join(resourcePath, file), targetPath, {
                overwrite: true,
                errorOnExist: false,
              });
            } catch (err) {
              // If the file doesn't exist, create it
              if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
                await fs.writeFile(
                  targetPath,
                  await fs.readFile(join(resourcePath, file))
                );
              } else {
                throw err;
              }
            }
          }
        })
      );
    }

    //add nativewind-env.d.ts contents
    const nativewindEnvPath = join(
      templatesPath,
      'common',
      'nativewind-env.d.ts'
    );

    await fs.copy(nativewindEnvPath, join(_currDir, 'nativewind-env.d.ts'));

    permission && (await updateTSConfig(projectType, resolvedConfig));
    permission && (await updateGlobalCss(resolvedConfig));
    await updateTailwindConfig(resolvedConfig, projectType);

    // Automatically modify layout files to add GluestackUIProvider wrapper
    await modifyLayoutFilesAutomatically(
      projectType,
      resolvedConfig,
      permission === true
    );
  } catch (err) {
    throw new Error((err as Error).message);
  }
}

//generate project config and initialize
async function generateProjectConfigAndInit(
  projectType: string,
  confirmOverride: boolean | symbol,
  isNextjs15: boolean | undefined
) {
  let permission;
  if (confirmOverride === false || typeof confirmOverride === 'symbol') {
    permission = false;
  } else permission = true;
  let resolvedConfig; // Initialize with a default value
  if (projectType !== 'library') {
    switch (projectType) {
      case config.nextJsProject:
        await generateConfigNextApp(permission, isNextjs15);
        break;
      case config.expoProject:
        await generateConfigExpoApp(permission);
        break;
      case config.reactNativeCLIProject:
        await generateConfigRNApp(permission);
        break;
      default:
        break;
    }
  } else {
    //write function to generate config for monorepo or library
    await generateMonoRepoConfig();
  }
  return resolvedConfig;
}

//files to override in the project directory data
const filesToOverride = (projectType: string) => {
  switch (projectType) {
    case config.nextJsProject:
      return [
        'next.config.*',
        'tailwind.config.*',
        'postcss.config.*',
        'globals.css',
        'tsconfig.json',
      ];
    case config.expoProject:
      return [
        'babel.config.js',
        'metro.config.js',
        'tailwind.config.*',
        'global.css',
        'tsconfig.json',
      ];
    case config.reactNativeCLIProject:
      return [
        'babel.config.js',
        'metro.config.js',
        'global.css',
        'tsconfig.json',
      ];
    default:
      return [];
  }
};

// Helper function to calculate the length of the string without ANSI escape codes
function getStringLengthWithoutAnsi(string: string) {
  return string.replace(/\x1b\[[0-9;]*m/g, '').length;
}
//overriding warning message
async function overrideWarning(files: string[]) {
  if (files.length === 0) {
    return true;
  }
  if (config.yesToAll) {
    return true;
  }
  const boxLength = 90;
  console.log(`\x1b[33m
  ┌${'─'.repeat(boxLength)}┐
  │                                                                                          │
  │  NOTE: Files to get modified                                                             │
  │                                                                                          │
  │  The command you've run is attempting to modify certain files in your project,           │
  │  if already exist. Here's what's happening:                                              │
  │                                                                                          │
${files
  .map(
    (file) =>
      `  │  - ${file}${' '.repeat(
        boxLength - getStringLengthWithoutAnsi(`  │  - ${file}`) + 3
      )}│`
  )
  .join('\n')}
  │                                                                                          │
  └${'─'.repeat(boxLength)}┘
  \x1b[0m`);

  const confirmInput = await confirm({
    message: `\x1b[33mProceed with caution. Make sure to commit your changes before proceeding. Continue?
    \x1b[0m`,
  });
  if (confirmInput === false) {
    log.info(
      'Skipping making changes in files. Please refer docs for making the changes manually --> \x1b[33mhttps://gluestack.io/ui/docs/home/getting-started/installation\x1b[0m'
    );
  }
  return confirmInput;
}

export { InitializeGlueStack, commonInitialization };
