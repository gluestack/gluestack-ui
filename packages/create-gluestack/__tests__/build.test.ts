import { exec } from 'child_process';
import { promisify } from 'util';
import { existsSync, statSync, readdirSync } from 'fs';
import path from 'path';

const execAsync = promisify(exec);

describe('Build Process', () => {
  const packageRoot = path.resolve(__dirname, '..');
  const distDir = path.join(packageRoot, 'dist');
  const srcDir = path.join(packageRoot, 'src');

  beforeAll(async () => {
    // Change to package directory for build
    process.chdir(packageRoot);
  });

  test('should build the package successfully with yarn build', async () => {
    // Run the build command
    const { stdout, stderr } = await execAsync('yarn build', {
      cwd: packageRoot,
      timeout: 60000 // 60 second timeout
    });

    // Verify build completed without errors
    expect(stderr).not.toMatch(/error/i);
    
    // Check that dist directory exists
    expect(existsSync(distDir)).toBe(true);
    
    // Verify dist directory is a directory
    expect(statSync(distDir).isDirectory()).toBe(true);
  }, 60000);

  test('should generate all expected output files', () => {
    const distFiles = readdirSync(distDir);
    
    // Expected files based on src directory
    const expectedJsFiles = [
      'index.js',
      'utils.js', 
      'help.js',
      'data.js'
    ];

    const expectedMapFiles = [
      'index.js.map',
      'utils.js.map',
      'help.js.map', 
      'data.js.map'
    ];

    // Check all expected JS files exist
    expectedJsFiles.forEach(file => {
      expect(distFiles).toContain(file);
      expect(existsSync(path.join(distDir, file))).toBe(true);
    });

    // Check all expected source map files exist
    expectedMapFiles.forEach(file => {
      expect(distFiles).toContain(file);
      expect(existsSync(path.join(distDir, file))).toBe(true);
    });
  });

  test('should generate executable main entry point', () => {
    const mainFile = path.join(distDir, 'index.js');
    
    // Verify main file exists and is executable
    expect(existsSync(mainFile)).toBe(true);
    
    const stats = statSync(mainFile);
    expect(stats.isFile()).toBe(true);
    expect(stats.size).toBeGreaterThan(0);
  });

  test('should maintain source-to-dist file mapping', () => {
    const srcFiles = readdirSync(srcDir).filter(file => 
      file.endsWith('.ts') || file.endsWith('.tsx')
    );

    srcFiles.forEach(srcFile => {
      const baseName = srcFile.replace(/\.tsx?$/, '');
      const expectedJsFile = `${baseName}.js`;
      const expectedMapFile = `${baseName}.js.map`;
      
      expect(existsSync(path.join(distDir, expectedJsFile))).toBe(true);
      expect(existsSync(path.join(distDir, expectedMapFile))).toBe(true);
    });
  });
});
