import { getFilePath, pathResolver } from '.';
import { ReactNativeResolvedConfig } from './config-types';
import { ensureFilesPromise } from '..';
import { config } from '../../config';
import { execSync } from 'child_process';
import os from 'os';
import { commonInitialization } from '../init';

//react-native project type initialization
async function resolvedReactNativePaths(
  resultConfig: ReactNativeResolvedConfig
) {
  const resolvedReactNativePaths = {
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
    },
  };
  return resolvedReactNativePaths;
}

const podInstall = async () => {
  const platform = os.platform();

  if (platform === 'darwin') {
    // macOS
    execSync('npx pod-install', { stdio: 'inherit' });
  }
};

//project specific initialization: react-native
async function initNatiwindRNApp(
  resolvedConfig: ReactNativeResolvedConfig,
  permission: boolean
) {
  try {
    await commonInitialization(
      config.reactNativeCLIProject,
      resolvedConfig,
      permission
    );

    await podInstall();
  } catch (err) {
    throw new Error((err as Error).message);
  }
}

async function generateConfigRNApp(permission: boolean) {
  const entryPath = await getFilePath(['**/*App.*']);
  const globalCssPath = await getFilePath([
    '**/*globals.css',
    '**/*global.css',
  ]);
  const tailwindConfigPath = await getFilePath(['tailwind.config.*']);
  const BabelConfigPath = await getFilePath(['babel.config.*']);
  const MetroConfigPath = await getFilePath(['metro.config.*']);
  const tsConfigPath = await getFilePath(['tsconfig.*']);

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
      entry: pathResolver(entryPath),
    },
  };

  const resolvedConfig = await resolvedReactNativePaths(
    resolvedGluestackConfig
  );
  const filesTobeEnsured = [
    resolvedConfig.config.babelConfig,
    resolvedConfig.config.metroConfig,
    resolvedConfig.config.tsConfig,
    resolvedConfig.tailwind.css,
    pathResolver('nativewind-env.d.ts'),
  ];
  const filesEnsured = await ensureFilesPromise(filesTobeEnsured);
  if (permission && filesEnsured) {
    if (permission) {
      await initNatiwindRNApp(resolvedConfig, permission);
    }
  }
}

export { generateConfigRNApp };
