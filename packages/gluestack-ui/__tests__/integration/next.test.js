const os = require('os');
const fs = require('fs');
const path = require('path');
const request = require('supertest');
const { join } = require('path');
const { spawnSync } = require('child_process');
const { spawn } = require('child_process');
const { promisify } = require('util');
const { getDataFiles } = require('../../dist/installer/next/data');

const checkGluestackConfig = () => {
  const filePath = path.join(nextAppPath, 'gluestack-ui.config.ts');
  return fs.existsSync(filePath);
};

const getConfigComponentPath = () => {
  const configFile = fs.readFileSync(
    `${nextAppPath}/gluestack-ui.config.ts`,
    'utf-8'
  );
  const match = configFile.match(/componentPath:\s+(['"])(.*?)\1/);

  const componentPath = (match && match[2]) ?? '';

  return componentPath;
};

const initGluestack = () => {
  return new Promise((resolve, reject) => {
    const child = spawn('node ../../../dist/index.js init', {
      shell: true,
      cwd: nextAppPath,
    });

    child.stdout.on('data', function (data) {
      child.stdin.write('\n');
      console.log(data.toString());
    });

    child.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      resolve();
    });

    child.on('exit', (code) => {
      console.log(`child process exited with code ${code}`);
      resolve();
    });

    child.on('error', function (error) {
      console.log(error);
      reject();
    });
  });
};

const requiredDependencies = [
  '@gluestack-style/react',
  '@gluestack-ui/provider',
  '@gluestack-style/animation-plugin',
  '@gluestack/ui-next-adapter',
];
const devDependencies = [
  'react-native-web',
  'react-native',
  '@types/react-native',
];

const nextAppRootDirectory = join(__dirname, '../apps');
const nextAppPath = join(__dirname, '../apps/my-next-app');
const homeDir = os.homedir();
const repoPath = path.join(homeDir, '.gluestack/cache/gluestack-ui');

const NEXT_PORT = '3039';
const nextAppUrl = `http://localhost:${NEXT_PORT}`;

describe('Next.js Command: npx gluestack-ui@latest init', () => {
  let appProcess;
  let nextServerStarted;

  beforeAll(async () => {
    try {
      // Kill any processes listening on the NEXT_PORT
      console.log(`Killing processes listening on port ${NEXT_PORT}...`);
      spawnSync(`kill -9 $(lsof -t -i:${NEXT_PORT})`, {
        cwd: nextAppRootDirectory,
        stdio: 'inherit',
        shell: true,
      });

      // Remove any existing my-next-app directory
      console.log('Removing any existing my-next-app directory...');
      spawnSync('rm -rf', ['my-next-app'], {
        cwd: nextAppRootDirectory,
        stdio: 'inherit',
        shell: true,
      });

      // Clone the my-next-app Git repository
      console.log('Cloning my-next-app repository...');
      spawnSync(
        'git',
        ['clone', 'https://github.com/mayank-96/my-next-app.git'],
        {
          cwd: nextAppRootDirectory,
        }
      );

      // Install dependencies using npm or yarn
      console.log('Installing dependencies using npm...');
      spawnSync('npm', ['install'], {
        cwd: `${nextAppRootDirectory}/my-next-app`,
        stdio: 'inherit',
        shell: true,
      });
      console.log('my-next-app setup completed successfully');

      // Runs "npx gluestack-ui@latest init"
      await initGluestack();
      console.log('gluestack-ui init setup completed successfully');
    } catch (error) {
      console.error('Error occurred during my-next-app setup:');
      console.error(error);
    }
  }, 200000);

  it('creates a gluestack-ui repo in the home directory', () => {
    const isRepoExists = fs.existsSync(repoPath);
    expect(isRepoExists).toBe(true);
    console.log('✅️  Gluestack UI repo is present in home dir');
  });

  it('adds a gluestack-ui.config file', () => {
    const gluestackUiConfigPresent = checkGluestackConfig();
    expect(gluestackUiConfigPresent).toBeTruthy();
    console.log('✅️  Gluestack UI config file is added');
  });

  it('adds required dependencies to package.json', () => {
    const packageJsonPath = path.join(nextAppPath, 'package.json');
    const packageJsonData = JSON.parse(
      fs.readFileSync(packageJsonPath, 'utf-8')
    );
    requiredDependencies.forEach((dependency) => {
      expect(packageJsonData.dependencies).toHaveProperty(dependency);
    });
    console.log('✅️  Required dependencies are added to package.json');
  });

  it('adds required devDependencies to package.json', () => {
    const packageJsonPath = path.join(nextAppPath, 'package.json');
    const packageJsonData = JSON.parse(
      fs.readFileSync(packageJsonPath, 'utf-8')
    );
    devDependencies.forEach((dependency) => {
      expect(packageJsonData.devDependencies).toHaveProperty(dependency);
    });
    console.log('✅️  Required devDependencies are added to package.json');
  });

  it('updates next.config.js', () => {
    const { nextConfig } = getDataFiles('components');
    const nextConfigPath = path.join(nextAppPath, 'next.config.js');
    const nextConfigCode = fs.readFileSync(nextConfigPath, 'utf-8');
    expect(nextConfigCode).toEqual(nextConfig);
    console.log('✅️  next.config.js is updated');
  });

  it('updates _document.tsx', () => {
    const { document } = getDataFiles('components');
    const documentPath = path.join(nextAppPath, 'pages/_document.tsx');
    const documentCode = fs.readFileSync(documentPath, 'utf-8');
    expect(document).toEqual(documentCode);
    console.log('✅️  _document.tsx is updated');
  });

  it('updates _app.tsx', () => {
    const { app } = getDataFiles('components');
    const appPath = path.join(nextAppPath, 'pages/_app.tsx');
    const appCode = fs.readFileSync(appPath, 'utf-8');
    expect(app).toEqual(appCode);
    console.log('✅️  _app.tsx is updated');
  });

  it('check if components folder is created', () => {
    const componentPath = getConfigComponentPath();
    const componentsFolderPath = path.join(nextAppPath, componentPath);
    expect(fs.existsSync(componentsFolderPath)).toBe(true);
    console.log('✅️  components folder is created');
  });

  it('check if core folder is created inside components folder', () => {
    const componentPath = getConfigComponentPath();
    const coreFolderPath = path.join(nextAppPath, componentPath, 'core');
    expect(fs.existsSync(coreFolderPath)).toBe(true);
    console.log('✅️  core folder is created inside components folder');
  });

  it('check if styled folder is created inside core folder', () => {
    const componentPath = getConfigComponentPath();
    const styledFolderPath = path.join(
      nextAppPath,
      componentPath,
      'core',
      'styled'
    );
    expect(fs.existsSync(styledFolderPath)).toBe(true);
    console.log('✅️  styled folder is created inside core folder');
  });

  it('check if GluestackUIProvider component is created inside core folder', () => {
    const componentPath = getConfigComponentPath();
    const gluestackProviderFolderPath = path.join(
      nextAppPath,
      componentPath,
      'core',
      'GluestackUIProvider'
    );
    expect(fs.existsSync(gluestackProviderFolderPath)).toBe(true);
    console.log(
      '✅️  GluestackUIProvider component is created inside core folder'
    );
  });

  it('check if required dependencies are installed correctly', () => {
    const packageJsonLockPath = path.join(nextAppPath, 'package-lock.json');
    const installedDependencies = JSON.parse(
      fs.readFileSync(packageJsonLockPath, 'utf-8')
    ).dependencies;
    requiredDependencies.forEach((dependency) => {
      expect(installedDependencies.hasOwnProperty(dependency)).toBe(true);
    });
    console.log('✅️  dependencies are installed correctly');
  });

  it('check if dev dependencies are installed correctly', () => {
    const packageJsonLockPath = path.join(nextAppPath, 'package-lock.json');
    const installedDevDependencies = JSON.parse(
      fs.readFileSync(packageJsonLockPath, 'utf-8')
    ).packages[''].devDependencies;
    devDependencies.forEach((dependency) => {
      expect(installedDevDependencies.hasOwnProperty(dependency)).toBe(true);
    });
    console.log('✅️  dev dependencies are installed correctly');
  });

  it('start and check if next js project is running', async () => {
    appProcess = spawn(`yarn dev --port=${NEXT_PORT}`, {
      cwd: nextAppPath,
      shell: true,
    });
    await promisify(setTimeout)(1000);
    appProcess.stdout.on('data', function (data) {
      const match = data.toString().match(/started server/);
      if (match) {
        nextServerStarted = true;
      }
    });
    while (!nextServerStarted) {
      await promisify(setTimeout)(1000);
      console.log('Waiting for server to start');
    }
    const response = await request(nextAppUrl).get('/');
    const responseBody = response.text;
    expect(responseBody.includes('Get started by editing')).toBe(true);
  }, 50000);

  afterAll(() => {
    if (appProcess) {
      appProcess.kill();
    }
    spawnSync('rm -rf', ['my-next-app'], {
      cwd: nextAppRootDirectory,
      stdio: 'inherit',
      shell: true,
    });
  });
});
