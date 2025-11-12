import * as path from 'path';
import fg from 'fast-glob';
import * as fs from 'fs';
import { config } from '../../config';
import { _currDir, getFilePath, pathResolver } from '.';
import {
  PROJECT_SHARED_IGNORE,
  ExpoResolvedConfig,
} from './config-types';
import { ensureFilesPromise } from '..';
import { commonInitialization } from '../init';

// expo project type initialization
async function getExpoProjectType(cwd: string): Promise<string | undefined> {
  const files = await fg.glob('**/*', {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  const isExpoProject = files.find(
    (file) =>
      file.startsWith('app.json') ||
      file.startsWith('app.config.ts') ||
      file.startsWith('app.config.js')
  );
  if (!isExpoProject) {
    return undefined;
  }

  const expoLayoutPath = fs.existsSync('app')
    ? 'app/_layout.*'
    : fs.existsSync('src/app')
    ? 'src/app/_layout.*'
    : '**/*_layout.*';

  const isUsingExpoRouter = await getFilePath([expoLayoutPath]);
  const isUsingDefaultExpo = await getFilePath(['App.*']);
  return isUsingExpoRouter
    ? 'expo-router'
    : isUsingDefaultExpo
    ? 'expo-default'
    : undefined;
}

async function isExpoSDK50(cwd: string): Promise<boolean> {
  //if expo project, check if expo version is greater than 50.0.0  by checking expo version in package.json file
  const packageJsonPath = path.join(_currDir, 'package.json');
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(packageJsonContent);
  const expoVersion = packageJson.dependencies.expo;

  // Check if expo dependency exists
  if (!expoVersion) {
    return false;
  }

  const version = expoVersion.replace('^', '').replace('~', '');
  const versionArray = version.split('.');
  const majorVersion = parseInt(versionArray[0]);

  if (majorVersion < 50) {
    return false;
  }
  return true;
}
async function resolvedExpoPaths(resultConfig: ExpoResolvedConfig) {
  const resolvedExpoPaths = {
    tailwind: {
      config: pathResolver(resultConfig.tailwind.config),
      css: pathResolver(resultConfig.tailwind.css),
    },
    config: {
      babelConfig: pathResolver(resultConfig.config.babelConfig || ''),
      metroConfig: pathResolver(resultConfig.config.metroConfig || ''),
      tsConfig: pathResolver(resultConfig.config.tsConfig || ''),
    },
    app: {
      entry: pathResolver(resultConfig.app.entry || ''),
      type: resultConfig?.app?.type,
      sdk50: resultConfig?.app?.sdk50,
    },
  };
  return resolvedExpoPaths;
}

//project specific initialization: expo
async function initNatiwindExpoApp(
  resolvedConfig: ExpoResolvedConfig,
  permission: boolean
) {
  try {
    await commonInitialization(config.expoProject, resolvedConfig, permission);
  } catch (err) {
    throw new Error((err as Error).message);
  }
}

async function generateConfigExpoApp(permission: boolean) {
  const projectType = await getExpoProjectType(_currDir);
  const entryPath = await getFilePath(['**/*_layout.*', '**/*App.*']);
  const globalCssPath = await getFilePath([
    '**/*globals.css',
    '**/*global.css',
  ]);
  const tailwindConfigPath = await getFilePath(['tailwind.config.*']);
  const BabelConfigPath = await getFilePath(['babel.config.*']);
  const MetroConfigPath = await getFilePath(['metro.config.*']);
  const tsConfigPath = await getFilePath(['tsconfig.*']);
  // const gluestackConfig: RawConfig = {
  //   tailwind: {
  //     config: tailwindConfigPath.length
  //       ? tailwindConfigPath
  //       : 'tailwind.config.js',
  //     css: globalCssPath.length ? globalCssPath : 'global.css',
  //   },
  //   app: {
  //     entry: entryPath,
  //     // write a function to get current components path
  //     components: config.writableComponentsPath,
  //   },
  // };
  const resolvedGluestackConfig = {
    tailwind: {
      config: tailwindConfigPath.length
        ? tailwindConfigPath
        : 'tailwind.config.js',
      css: globalCssPath.length ? globalCssPath : 'global.css',
    },
    config: {
      babelConfig: BabelConfigPath.length ? BabelConfigPath : 'babel.config.js',
      metroConfig: MetroConfigPath.length ? MetroConfigPath : 'metro.config.js',
      tsConfig: tsConfigPath.length ? tsConfigPath : 'tsconfig.json',
    },
    app: {
      entry: entryPath,
      type: projectType,
      sdk50: await isExpoSDK50(_currDir),
    },
  };
  // await generateConfig(gluestackConfig);

  const resolvedConfig = await resolvedExpoPaths(resolvedGluestackConfig);
  const filesTobeEnsured = [
    resolvedConfig.config.babelConfig,
    resolvedConfig.config.metroConfig,
    resolvedConfig.config.tsConfig,
    resolvedConfig.tailwind.css,
    pathResolver('nativewind-env.d.ts'),
  ];
  const filesEnsured = await ensureFilesPromise(filesTobeEnsured);
  if (permission && filesEnsured) {
    await initNatiwindExpoApp(resolvedConfig, permission);
  }
}

export { generateConfigExpoApp };
