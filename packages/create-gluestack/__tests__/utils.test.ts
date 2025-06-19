// Mock templatesMap data BEFORE importing utils
jest.doMock('../src/data', () => ({
  default: {
    gitRepo: 'https://github.com/test/repo.git',
    branch: 'main',
    parentPath: 'apps',
    options: {
      framework: {
        default: {
          question: 'What would you like to build?',
          options: []
        }
      }
    }
  },
}));

import { cloneProject, installDependencies, gitInit } from '../src/utils';
import * as fs from 'fs';
import { execSync } from 'child_process';

// Mock all file system operations
jest.mock('fs', () => ({
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
  rmSync: jest.fn(),
  appendFileSync: jest.fn(),
  renameSync: jest.fn(),
  readdirSync: jest.fn(),
}));

// Mock child_process
jest.mock('child_process', () => ({
  execSync: jest.fn(),
}));

// Mock console methods
const consoleSpy = {
  log: jest.spyOn(console, 'log').mockImplementation(),
  error: jest.spyOn(console, 'error').mockImplementation(),
};

// Mock process.exit
const mockExit = jest.spyOn(process, 'exit').mockImplementation();

describe('utils', () => {
  const mockExecSync = execSync as jest.MockedFunction<typeof execSync>;
  const mockExistsSync = fs.existsSync as jest.MockedFunction<typeof fs.existsSync>;
  const mockMkdirSync = fs.mkdirSync as jest.MockedFunction<typeof fs.mkdirSync>;
  const mockRmSync = fs.rmSync as jest.MockedFunction<typeof fs.rmSync>;
  const mockAppendFileSync = fs.appendFileSync as jest.MockedFunction<typeof fs.appendFileSync>;
  const mockReaddirSync = fs.readdirSync as jest.MockedFunction<typeof fs.readdirSync>;
  const mockRenameSync = fs.renameSync as jest.MockedFunction<typeof fs.renameSync>;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleSpy.log.mockClear();
    consoleSpy.error.mockClear();
    mockExit.mockClear();
    
    // Set up default mocks
    mockExistsSync.mockReturnValue(false);
    mockReaddirSync.mockReturnValue(['file1.js', 'file2.js', 'package.json'] as any);
    mockExecSync.mockReturnValue('' as any);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('cloneProject', () => {
    const projectName = 'test-project';
    const templateName = 'next-app-router';

    it('should create new project directory when it does not exist', async () => {
      mockExistsSync.mockReturnValue(false);

      await cloneProject(projectName, templateName);

      expect(mockMkdirSync).toHaveBeenCalledWith(projectName);
      expect(mockRmSync).not.toHaveBeenCalledWith(projectName, expect.any(Object));
    });

    it('should override existing project directory', async () => {
      mockExistsSync.mockReturnValue(true);

      await cloneProject(projectName, templateName);

      expect(consoleSpy.log).toHaveBeenCalledWith(`Folder already exists with name: ${projectName}`);
      expect(consoleSpy.log).toHaveBeenCalledWith('Overwriding the existing folder...\n');
      expect(mockRmSync).toHaveBeenCalledWith(projectName, { recursive: true, force: true });
      expect(mockMkdirSync).toHaveBeenCalledWith(projectName);
    });

    it('should execute git commands in correct order', async () => {
      await cloneProject(projectName, templateName);

      expect(mockExecSync).toHaveBeenCalledWith('git init', { cwd: expect.stringContaining(projectName) });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('git remote add origin'), { cwd: expect.stringContaining(projectName) });
      expect(mockExecSync).toHaveBeenCalledWith('git config core.sparseCheckout true', { cwd: expect.stringContaining(projectName) });
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('git pull origin'), { cwd: expect.stringContaining(projectName) });
    });

    it('should create sparse-checkout file with correct template path', async () => {
      await cloneProject(projectName, templateName);

      expect(mockAppendFileSync).toHaveBeenCalledWith(
        expect.stringContaining('sparse-checkout'),
        'apps/next-app-router\n'
      );
    });

    it('should move files from template directory to project root', async () => {
      const mockFiles = ['package.json', 'src', 'public'] as any;
      mockReaddirSync.mockReturnValue(mockFiles);

      await cloneProject(projectName, templateName);

      expect(mockReaddirSync).toHaveBeenCalledWith(expect.stringContaining(`apps/${templateName}`));
      
      mockFiles.forEach((file: string) => {
        expect(mockRenameSync).toHaveBeenCalledWith(
          expect.stringContaining(`apps/${templateName}/${file}`),
          expect.stringContaining(file)
        );
      });
    });

    it('should clean up apps and .git directories', async () => {
      await cloneProject(projectName, templateName);

      expect(mockRmSync).toHaveBeenCalledWith(expect.stringContaining('apps'), { recursive: true, force: true });
      expect(mockRmSync).toHaveBeenCalledWith(expect.stringContaining('.git'), { recursive: true, force: true });
    });

    it('should handle git not installed error', async () => {
      // Make process.exit actually stop execution by throwing an error
      mockExit.mockImplementation(() => {
        throw new Error('Process exit called');
      });
      
      mockExecSync.mockImplementation(() => {
        throw new Error('git command not found');
      });

      try {
        await cloneProject(projectName, templateName);
      } catch (error) {
        // Expect the process exit error
        expect(error).toEqual(expect.any(Error));
      }

      expect(consoleSpy.log).toHaveBeenCalledWith('Git not installed. Please install git and try again...');
      expect(mockExit).toHaveBeenCalledWith(1);
    });
  });

  describe('installDependencies', () => {
    const projectName = 'test-project';

    it('should install dependencies with npm', async () => {
      const selectedPackageManager = 'npm';

      await installDependencies(projectName, selectedPackageManager);

      expect(consoleSpy.log).toHaveBeenCalledWith('Installing Dependencies...');
      expect(mockExecSync).toHaveBeenCalledWith('npm install', {
        cwd: expect.stringContaining(projectName),
      });
      expect(consoleSpy.log).toHaveBeenCalledWith('Dependancies Installed!');
    });

    it('should install dependencies with yarn', async () => {
      const selectedPackageManager = 'yarn';

      await installDependencies(projectName, selectedPackageManager);

      expect(mockExecSync).toHaveBeenCalledWith('yarn install', {
        cwd: expect.stringContaining(projectName),
      });
    });

    it('should install dependencies with pnpm', async () => {
      const selectedPackageManager = 'pnpm';

      await installDependencies(projectName, selectedPackageManager);

      expect(mockExecSync).toHaveBeenCalledWith('pnpm install', {
        cwd: expect.stringContaining(projectName),
      });
    });

    it('should install dependencies with bun', async () => {
      const selectedPackageManager = 'bun';

      await installDependencies(projectName, selectedPackageManager);

      expect(mockExecSync).toHaveBeenCalledWith('bun install', {
        cwd: expect.stringContaining(projectName),
      });
    });

    it('should handle installation errors', async () => {
      mockExecSync.mockImplementation(() => {
        throw new Error('Installation failed');
      });

      await expect(installDependencies(projectName, 'npm')).rejects.toThrow('Installation failed');
    });
  });

  describe('gitInit', () => {
    const projectName = 'test-project';

    it('should initialize git repository with correct commands', async () => {
      await gitInit(projectName);

      expect(mockExecSync).toHaveBeenCalledWith('git init', { cwd: expect.stringContaining(projectName) });
      expect(mockExecSync).toHaveBeenCalledWith('git branch -M main', { cwd: expect.stringContaining(projectName) });
      expect(mockExecSync).toHaveBeenCalledWith('git add --all', { cwd: expect.stringContaining(projectName) });
      expect(mockExecSync).toHaveBeenCalledWith('git commit -m "Init"', { cwd: expect.stringContaining(projectName) });
    });

    it('should execute git commands in correct order', async () => {
      const calls: string[] = [];
      mockExecSync.mockImplementation((command: string) => {
        calls.push(command as string);
        return '' as any;
      });

      await gitInit(projectName);

      expect(calls).toEqual([
        'git init',
        'git branch -M main',
        'git add --all',
        'git commit -m "Init"'
      ]);
    });

    it('should handle git command failures', async () => {
      mockExecSync.mockImplementation(() => {
        throw new Error('Git command failed');
      });

      await expect(gitInit(projectName)).rejects.toThrow('Git command failed');
    });
  });

  describe('integration scenarios', () => {
    it('should handle complete project creation flow', async () => {
      const projectName = 'full-test-project';
      const templateName = 'next-app-router';
      const packageManager = 'npm';

      // Test the complete flow
      await cloneProject(projectName, templateName);
      await installDependencies(projectName, packageManager);
      await gitInit(projectName);

      // Verify all operations were called
      expect(mockMkdirSync).toHaveBeenCalled();
      expect(mockExecSync).toHaveBeenCalledWith(expect.stringContaining('git'), expect.any(Object));
      expect(mockExecSync).toHaveBeenCalledWith('npm install', expect.any(Object));
      expect(consoleSpy.log).toHaveBeenCalledWith('Installing Dependencies...');
      expect(consoleSpy.log).toHaveBeenCalledWith('Dependancies Installed!');
    });

    it('should handle project name with special characters', async () => {
      const projectName = 'my-project_with-special.chars';
      const templateName = 'expo-router';

      await cloneProject(projectName, templateName);

      expect(mockMkdirSync).toHaveBeenCalledWith(projectName);
      expect(mockExecSync).toHaveBeenCalledWith('git init', { 
        cwd: expect.stringContaining(projectName)
      });
    });
  });
}); 