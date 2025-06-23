const { exec, spawn } = require('child_process');
const { promisify } = require('util');
const axios = require('axios');

const execAsync = promisify(exec);

describe('Website Integration Tests', () => {
  let serverProcess = null;
  const PORT = 4000;
  const BASE_URL = `http://localhost:${PORT}`;

  afterEach(async () => {
    // Clean up: kill the server process if it's running
    if (serverProcess) {
      console.log('Cleaning up server process...');
      serverProcess.kill('SIGTERM');
      serverProcess = null;
      // Give it a moment to clean up
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  });

  afterAll(async () => {
    // Final cleanup
    if (serverProcess) {
      serverProcess.kill('SIGKILL');
      serverProcess = null;
    }
  });

  test('should sync website successfully', async () => {
    console.log('Starting sync test...');

    try {
      // Navigate to root directory and run sync:website
      console.log('Step 1: Running sync:website...');
      const originalDir = process.cwd();
      process.chdir('../../'); // Go to root directory
      
      await execAsync('yarn sync:website');
      console.log('✓ Sync completed successfully');
      
      // Navigate back to original directory
      process.chdir(originalDir);
      
    } catch (error) {
      console.error('Sync test failed:', error);
      throw error;
    }
  }, 300000); // 5 minutes timeout

  test('should build website successfully', async () => {
    console.log('Starting build test...');

    try {
      // Make sure we're in the right directory
      const originalDir = process.cwd();
      if (!originalDir.endsWith('apps/website')) {
        process.chdir('apps/website');
      }
      
      console.log('Step 2: Building website...');
      await execAsync('yarn build');
      console.log('✓ Build completed successfully');

    } catch (error) {
      console.error('Build test failed:', error);
      throw error;
    }
  }, 300000); // 5 minutes timeout

  test('should start server on port 4000 and return status 200', async () => {
    console.log('Starting server test...');

    try {
      // Make sure we're in the right directory
      const originalDir = process.cwd();
      if (!originalDir.endsWith('apps/website')) {
        process.chdir('apps/website');
      }

      // Step 3: Start the server on port 4000
      console.log('Step 3: Starting server on port 4000...');
      serverProcess = spawn('yarn', ['start'], {
        env: { ...process.env, PORT: PORT.toString() },
        stdio: 'pipe'
      });

      // Wait for server to start
      await waitForServer(BASE_URL, 60000); // Wait up to 60 seconds
      console.log('✓ Server started successfully');

      // Step 4: Check if localhost:4000 returns status 200
      console.log('Step 4: Checking server status...');
      const response = await axios.get(BASE_URL, {
        timeout: 15000,
        validateStatus: (status) => status === 200
      });

      expect(response.status).toBe(200);
      console.log('✓ Server returned status 200 - Test passed!');

    } catch (error) {
      console.error('Server test failed:', error);
      throw error;
    }
  }, 180000); // 3 minutes timeout
});

// Helper function to wait for server to be ready
async function waitForServer(url, timeout) {
  const startTime = Date.now();
  
  while (Date.now() - startTime < timeout) {
    try {
      await axios.get(url, { timeout: 5000 });
      return; // Server is ready
    } catch (error) {
      // Server not ready yet, wait and retry
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  throw new Error(`Server did not start within ${timeout}ms`);
} 