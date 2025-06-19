import { main } from '../src/index';
import * as utils from '../src/utils';

// Mock the utility functions
jest.mock('../src/utils', () => ({
  cloneProject: jest.fn(),
  installDependencies: jest.fn(),
  gitInit: jest.fn(),
}));

// Mock console methods
const consoleSpy = {
  log: jest.spyOn(console, 'log').mockImplementation(),
  error: jest.spyOn(console, 'error').mockImplementation(),
};

// Mock process.exit
const mockExit = jest.spyOn(process, 'exit').mockImplementation();

// Custom error to catch process.exit calls
class ProcessExitError extends Error {
  constructor(code: number | string | undefined) {
    super(`Process exit with code ${code}`);
    this.name = 'ProcessExitError';
  }
}

describe('create-gluestack', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    consoleSpy.log.mockClear();
    consoleSpy.error.mockClear();
    mockExit.mockClear();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('main function', () => {
    it('should create a Next.js app with provided arguments', async () => {
      // Mock the utility functions to resolve successfully
      (utils.cloneProject as jest.Mock).mockResolvedValue(undefined);
      (utils.installDependencies as jest.Mock).mockResolvedValue(undefined);
      (utils.gitInit as jest.Mock).mockResolvedValue(undefined);

      // Test arguments for creating a Next.js app
      const args = ['my-next-app', '--next-app-router', '--use-npm'];

      await main(args);

      // Verify that cloneProject was called with correct parameters
      expect(utils.cloneProject).toHaveBeenCalledWith('my-next-app', 'next-app-router');
      
      // Verify that installDependencies was called with correct parameters
      expect(utils.installDependencies).toHaveBeenCalledWith('my-next-app', 'npm');
      
      // Verify that gitInit was called with correct parameters
      expect(utils.gitInit).toHaveBeenCalledWith('my-next-app');

      // Verify success message was logged
      expect(consoleSpy.log).toHaveBeenCalledWith(
        expect.stringContaining('Project created successfully in my-next-app folder')
      );
    });

    it('should handle Next.js app creation with default package manager detection', async () => {
      // Mock environment variable for yarn
      const originalUserAgent = process.env.npm_config_user_agent;
      process.env.npm_config_user_agent = 'yarn/1.22.19';

      // Mock the utility functions to resolve successfully
      (utils.cloneProject as jest.Mock).mockResolvedValue(undefined);
      (utils.installDependencies as jest.Mock).mockResolvedValue(undefined);
      (utils.gitInit as jest.Mock).mockResolvedValue(undefined);

      const args = ['test-app', '--next-app-router'];

      await main(args);

      // Verify that installDependencies was called with yarn
      expect(utils.installDependencies).toHaveBeenCalledWith('test-app', 'yarn');

      // Restore original environment
      process.env.npm_config_user_agent = originalUserAgent;
    });

    it('should handle errors during project creation', async () => {
      // Mock cloneProject to throw an error
      const error = new Error('Failed to clone project');
      (utils.cloneProject as jest.Mock).mockRejectedValue(error);

      const args = ['error-app', '--next-app-router'];

      await main(args);

      // Verify error handling
      expect(consoleSpy.error).toHaveBeenCalledWith('Failed to create project');
      expect(consoleSpy.error).toHaveBeenCalledWith('Error details:', error);
      expect(mockExit).toHaveBeenCalledWith(1);
    });

    it('should skip universal template and exit with coming soon message', async () => {
      // Make process.exit actually exit by throwing an error
      mockExit.mockImplementation((code) => {
        throw new ProcessExitError(code || 0);
      });

      const args = ['universal-app', '--universal'];

      try {
        await main(args);
      } catch (error) {
        // Expect the process exit error
        expect(error).toBeInstanceOf(ProcessExitError);
      }

      // Verify that it logs "Coming Soon..." and exits
      expect(consoleSpy.log).toHaveBeenCalledWith(
        expect.stringContaining('Coming Soon...')
      );
      expect(mockExit).toHaveBeenCalledWith(0);

      // Verify that utility functions were not called for universal template
      expect(utils.cloneProject).not.toHaveBeenCalled();
      expect(utils.installDependencies).not.toHaveBeenCalled();
      expect(utils.gitInit).not.toHaveBeenCalled();
    });

    it('should create Expo app correctly', async () => {
      // Mock the utility functions to resolve successfully
      (utils.cloneProject as jest.Mock).mockResolvedValue(undefined);
      (utils.installDependencies as jest.Mock).mockResolvedValue(undefined);
      (utils.gitInit as jest.Mock).mockResolvedValue(undefined);

      const args = ['expo-app', '--expo-router', '--use-pnpm'];

      await main(args);

      // Verify that cloneProject was called with correct parameters for Expo
      expect(utils.cloneProject).toHaveBeenCalledWith('expo-app', 'expo-router');
      
      // Verify that installDependencies was called with pnpm
      expect(utils.installDependencies).toHaveBeenCalledWith('expo-app', 'pnpm');
      
      // Verify that gitInit was called
      expect(utils.gitInit).toHaveBeenCalledWith('expo-app');
    });

    it('should detect package manager from npm_config_user_agent correctly', async () => {
      const testCases = [
        { userAgent: 'npm/8.19.2', expected: 'npm' },
        { userAgent: 'yarn/1.22.19', expected: 'yarn' },
        { userAgent: 'pnpm/7.14.0', expected: 'pnpm' },
        { userAgent: 'bun/1.0.0', expected: 'bun' },
        { userAgent: undefined, expected: 'npm' },
      ];

      for (const { userAgent, expected } of testCases) {
        // Clear mocks for each iteration
        jest.clearAllMocks();
        
        const originalUserAgent = process.env.npm_config_user_agent;
        process.env.npm_config_user_agent = userAgent;

        // Mock the utility functions
        (utils.cloneProject as jest.Mock).mockResolvedValue(undefined);
        (utils.installDependencies as jest.Mock).mockResolvedValue(undefined);
        (utils.gitInit as jest.Mock).mockResolvedValue(undefined);

        const args = ['test-app', '--next-app-router'];
        await main(args);

        expect(utils.installDependencies).toHaveBeenCalledWith('test-app', expected);

        // Restore environment
        process.env.npm_config_user_agent = originalUserAgent;
      }
    });
  });
});
