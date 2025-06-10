import * as path from 'path';
import fg from 'fast-glob';
import { pathExists, readFile, writeFile } from 'fs-extra';
import { config } from '../../config';
import {
  findDirectory,
  generateConfig,
  getFilePath,
  pathResolver,
  _currDir,
} from '.';
import {
  RawConfig,
  NextResolvedConfig,
  PROJECT_SHARED_IGNORE,
} from './config-types';
import { join, relative } from 'path';
import { execSync } from 'child_process';
import { ensureFilesPromise } from '..';
import { commonInitialization } from '../init';
import { addReactNativeWebPatch } from '../init/addReactNativeWebPatch';
//next project type initialization
async function getNextProjectType(cwd: string): Promise<string | undefined> {
  const files = await fg.glob('**/*', {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });

  const isNextProject = files.find((file) => file.startsWith('next.config.'));
  if (!isNextProject) {
    return undefined;
  }

  const isUsingSrcDir = await pathExists(path.resolve(cwd, 'src'));
  const isUsingAppDir = await pathExists(
    path.resolve(cwd, `${isUsingSrcDir ? 'src/' : ''}app`)
  );

  if (isUsingAppDir) {
    return isUsingSrcDir ? 'next-app-src' : 'next-app';
  }

  return isUsingSrcDir ? 'next-pages-src' : 'next-pages';
}

async function resolvedNextJsPaths(resultConfig: NextResolvedConfig) {
  const resolvedNextJsPaths = {
    tailwind: {
      config: pathResolver(resultConfig.tailwind.config),
      css: pathResolver(resultConfig.tailwind.css),
    },
    config: {
      postCssConfig: pathResolver(resultConfig.config.postCssConfig || ''),
      nextConfig: pathResolver(resultConfig.config.nextConfig || ''),
      tsConfig: pathResolver(resultConfig.config.tsConfig || ''),
    },
    app: {
      entry: pathResolver(resultConfig.app.entry || ''),
      type: resultConfig?.app?.type,
      registry: resultConfig?.app?.registry
        ? resultConfig.app.registry.replace(/\\/g, '/')
        : undefined,
      page: resultConfig?.app?.page
        ? path.resolve(_currDir, resultConfig.app.page)
        : '',
    },
  };
  return resolvedNextJsPaths;
}

//project specific initialization: nextjs
async function initNatiwindNextApp(
  resolvedConfig: NextResolvedConfig,
  permission: boolean,
  isNextjs15: boolean | undefined
) {
  try {
    if (isNextjs15) {
      await addReactNativeWebPatch();
    }

    if (
      resolvedConfig.app?.entry?.includes('layout') &&
      resolvedConfig.app.registry
    ) {
      // if app router add registry file to root
      const registryPath = isNextjs15 ? ['nextjs', 'next15'] : ['common'];
      const registryContent = await readFile(
        join(__dirname, config.templatesDir, ...registryPath, 'registry.tsx'),
        'utf8'
      );
      await writeFile(resolvedConfig.app.registry, registryContent, 'utf8');
    }

    await commonInitialization(
      config.nextJsProject,
      resolvedConfig,
      permission
    );
  } catch (err) {
    throw new Error((err as Error).message);
  }
}

async function generateConfigNextApp(
  permission: boolean,
  isNextjs15: boolean | undefined
) {
  const projectType = await getNextProjectType(_currDir);
  const entryPath = await getFilePath(['**/*layout.*', '**/*_app.*']);
  const globalCssPath = await getFilePath([
    '**/*globals.css',
    '**/*global.css',
  ]);
  const tailwindConfigPath = await getFilePath(['tailwind.config.*']);
  const postCssConfigPath = await getFilePath(['postcss.config.*']);
  const nextConfigPath = await getFilePath(['next.config.*']);
  const tsConfigPath = await getFilePath(['tsconfig.*']);
  let registryPath = '';
  if (projectType?.includes('app')) {
    const appDirectory = findDirectory(_currDir, ['src/app', 'app']);
    registryPath = path.resolve(_currDir, appDirectory, 'registry.tsx');
  }
  const pagePath = entryPath.includes('layout.')
    ? await getFilePath(['**/*page.*'])
    : undefined;

  const gluestackConfig: RawConfig = {
    tailwind: {
      config: tailwindConfigPath.length
        ? tailwindConfigPath
        : 'tailwind.config.js',
      css: globalCssPath.length ? globalCssPath : 'global.css',
    },
    app: {
      entry: entryPath,
      // write a function to get current components path
      components: config.writableComponentsPath,
    },
  };
  const resolvedGluestackConfig: NextResolvedConfig = {
    tailwind: {
      config: tailwindConfigPath.length
        ? tailwindConfigPath
        : 'tailwind.config.js',
      css: globalCssPath.length ? globalCssPath : 'global.css',
    },
    config: {
      postCssConfig: postCssConfigPath.length
        ? postCssConfigPath
        : 'postcss.config.js',
      nextConfig: nextConfigPath.length ? nextConfigPath : 'next.config.js',
      tsConfig: tsConfigPath.length ? tsConfigPath : 'tsconfig.json',
    },
    app: {
      type: projectType,
      entry: entryPath,
      registry: registryPath,
      page: pagePath,
    },
  };

  generateConfig(gluestackConfig);
  const resolvedConfig = await resolvedNextJsPaths(resolvedGluestackConfig);
  const filesTobeEnsured = [
    resolvedConfig.app.registry ?? '',
    resolvedConfig.config.tsConfig,
    resolvedConfig.tailwind.css,
    resolvedConfig.config.postCssConfig,
    pathResolver('nativewind-env.d.ts'),
  ];
  const filesEnsured = await ensureFilesPromise(filesTobeEnsured);
  if (permission && filesEnsured) {
    await await initNatiwindNextApp(resolvedConfig, permission, isNextjs15);
  }
}

export { generateConfigNextApp };
