import * as fs from 'fs';
import * as path from 'path';
import fg from 'fast-glob';
import { projectRootPath } from '..';
import { config } from '../../config';
import { RawConfig, PROJECT_SHARED_IGNORE } from './config-types';

const fileExtensions = ['.tsx', '.jsx', '.ts', '.js'];
const possibleIndexFiles = ['_app', 'index', 'App'];
const possibleDirectories = ['src', 'pages', 'app', 'components'];

const _currDir = process.cwd();

const pathResolver = (p: string) => {
  return path.resolve(_currDir, p).replace(/\\/g, '/');
};

function findDirectory(rootDir: string, relativePaths: string[]) {
  for (const relPath of relativePaths) {
    const dirPath = path.join(rootDir, relPath);
    if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
      return dirPath.replace(`${rootDir}/`, '');
    }
  }
  return '';
}

async function checkIfInitialized(cwd: string): Promise<boolean> {
  try {
    const initializeStatus = await getComponentsPath(cwd);
    if (initializeStatus.length) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

async function getComponentsPath(cwd: string): Promise<string> {
  const componentsPath = await fg.glob(
    `**/*${config.providerComponent}/index.tsx`,
    {
      cwd: cwd,
      deep: 8,
      ignore: PROJECT_SHARED_IGNORE,
    }
  );

  if (!componentsPath.length) {
    //handle this case when CLI couldn't locate the components path
    return '';
  }
  const resolvedComponentsPath = componentsPath[0].replace(
    `/${config.providerComponent}/index.tsx`,
    ''
  );
  return resolvedComponentsPath;
}

function getEntryPathAndComponentsPath(): {
  entryPath: string[];
} {
  let entryPath: string[] = [];
  let componentsPath: string[] = [];
  let FileExists: string[] = [];
  fileExtensions.forEach((ext) => {
    possibleIndexFiles.map((file) => {
      if (
        fs.existsSync(path.join(projectRootPath, `${file}${ext}`).normalize())
      ) {
        FileExists.push(file);
      }
    });
  });
  // Check if any of the possible index files exist
  if (FileExists) {
    FileExists.forEach((file) => {
      entryPath.push(path.join('.', `${file}.{tsx,jsx,ts,js}`));
    });
  }
  // Check if "src", "pages", "app" or "component" directories exist
  possibleDirectories.forEach((dir) => {
    if (fs.existsSync(path.join(projectRootPath, dir).normalize())) {
      entryPath.push(path.join('.', `${dir}/**/*.{tsx,jsx,ts,js}`));
    }
  });

  const resolvedPath = config.writableComponentsPath.split('/');
  if (
    !entryPath.includes(
      path.join('.', `${resolvedPath[0]}/**/*.{tsx,jsx,ts,js}`)
    )
  ) {
    componentsPath.push(
      path.join('.', `${resolvedPath[0]}/**/*.{tsx,jsx,ts,js}`)
    );
  }
  entryPath = [...entryPath, ...componentsPath];
  return { entryPath };
}

async function getFilePath(files: string[]) {
  const filePath = await fg.glob(files, {
    cwd: projectRootPath,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  });
  if (!filePath.length) {
    return '';
  }
  return filePath[0];
}

async function generateConfig(resultConfig: RawConfig) {
  const targetPath = path.resolve(projectRootPath, 'gluestack-ui.config.json');
  fs.writeFileSync(targetPath, JSON.stringify(resultConfig, null, 2), 'utf8');
}

async function generateMonoRepoConfig() {
  const componentPath = path.resolve(
    projectRootPath,
    config.writableComponentsPath
  );

  const gluestackConfig = {
    app: {
      components: componentPath.replace(`${projectRootPath}/`, ''),
    },
  };
  const targetPath = path.resolve(projectRootPath, 'gluestack-ui.config.json');
  fs.writeFileSync(
    targetPath,
    JSON.stringify(gluestackConfig, null, 2),
    'utf8'
  );
}

export {
  checkIfInitialized,
  getEntryPathAndComponentsPath,
  generateConfig,
  getFilePath,
  getComponentsPath,
  generateMonoRepoConfig,
  findDirectory,
  pathResolver,
  _currDir,
};
