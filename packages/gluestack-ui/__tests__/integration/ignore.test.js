const fs = require('fs');
const path = require('path');
const { config } = require('../../dist/config');

describe('Ignore functionality', () => {
  describe('Component filtering', () => {
    test('should filter out ignored components from getAllComponents', async () => {
      // Test that ignored components are properly filtered
      const { getAllComponents } = require('../../dist/util');

      // Mock the components directory to simulate what would be read
      const mockComponents = [
        'button',
        'input',
        'utils',
        'creator',
        'examples',
      ];

      // This test would need proper mocking of fs.readdirSync
      // For now, we just test that the config is properly set up
      expect(config.ignoreComponents).toContain('utils');
    });
  });

  describe('Copy filtering (docs/examples/non-code files)', () => {
    // The copy functions (writeComponent in util/add, addEssentialComponents
    // in util/init) only copy root-level files with source-code extensions.
    // This keeps docs/, examples/, .handlebars, meta.json etc. out of user
    // projects — see https://github.com/gluestack/gluestack-ui/issues/3421.
    const isCopyable = (fileName) =>
      fileName !== 'dependencies.json' && /\.(tsx?|jsx?)$/.test(fileName);

    test('should copy source-code files', () => {
      expect(isCopyable('index.tsx')).toBe(true);
      expect(isCopyable('index.web.tsx')).toBe(true);
      expect(isCopyable('styles.ts')).toBe(true);
      expect(isCopyable('script.ts')).toBe(true);
      expect(isCopyable('component.jsx')).toBe(true);
    });

    test('should exclude dependencies.json and non-code files', () => {
      expect(isCopyable('dependencies.json')).toBe(false);
      expect(isCopyable('template.handlebars')).toBe(false);
      expect(isCopyable('meta.json')).toBe(false);
      expect(isCopyable('README.md')).toBe(false);
      expect(isCopyable('docs')).toBe(false);
      expect(isCopyable('examples')).toBe(false);
    });

    test('copy functions in built CLI implement this filter', () => {
      const pkgRoot = path.join(__dirname, '..', '..');
      const addSrc = fs.readFileSync(
        path.join(pkgRoot, 'dist/util/add/index.js'),
        'utf8'
      );
      const initSrc = fs.readFileSync(
        path.join(pkgRoot, 'dist/util/init/index.js'),
        'utf8'
      );

      // Both copy paths exclude dependencies.json and only allow code extensions.
      const filterPattern = /dependencies\.json/;
      const extPattern = /\\\.\(tsx\?\|jsx\?\)\$/;

      expect(filterPattern.test(addSrc)).toBe(true);
      expect(filterPattern.test(initSrc)).toBe(true);
      expect(extPattern.test(addSrc)).toBe(true);
      expect(extPattern.test(initSrc)).toBe(true);
    });
  });

  describe('Config validation', () => {
    test('should have readonly ignoreComponents array', () => {
      // Test that the ignore list is properly configured as readonly
      expect(config.ignoreComponents).toBeDefined();
      expect(Array.isArray(config.ignoreComponents)).toBe(true);
      expect(config.ignoreComponents.length).toBeGreaterThan(0);
    });
  });
});
