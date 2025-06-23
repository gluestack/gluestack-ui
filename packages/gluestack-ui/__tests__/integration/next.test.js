const os = require('os');
const fs = require('fs');
const path = require('path');
const request = require('supertest');
const { join } = require('path');
const { spawnSync } = require('child_process');
const { spawn } = require('child_process');
const { promisify } = require('util');

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

describe('Next.js Command: npx gluestack-ui-nightly@latest init', () => {
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

      // Runs "npx gluestack-ui-nightly@latest init"
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
