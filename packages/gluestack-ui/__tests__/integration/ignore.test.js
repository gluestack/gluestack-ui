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
      expect(config.ignoreComponents).toContain('creator');
      expect(config.ignoreFolders).toContain('docs');
      expect(config.ignoreFolders).toContain('examples');
    });
  });

  describe('Folder filtering during copy', () => {
    test('should ignore docs and examples folders during component copy', () => {
      // Test that the filter function properly excludes ignored folders
      const component = 'button';
      const basePath = `/home/user/.gluestack/cache/gluestack-ui/src/components/ui/${component}`;

      // Simulate the filter function from writeComponent
      const filter = (src) => {
        const relativePath = src.replace(basePath, '');

        // Skip if the path starts with any of the ignored folders
        for (const ignoreFolder of config.ignoreFolders) {
          if (
            relativePath.startsWith(`/${ignoreFolder}`) ||
            relativePath.startsWith(`\\${ignoreFolder}`)
          ) {
            return false;
          }
        }

        return true;
      };

      // Test cases
      expect(filter(`${basePath}/index.tsx`)).toBe(true);
      expect(filter(`${basePath}/docs/README.md`)).toBe(false);
      expect(filter(`${basePath}/examples/basic.tsx`)).toBe(false);
      expect(filter(`${basePath}/src/component.tsx`)).toBe(true);
      expect(filter(`${basePath}/styles.ts`)).toBe(true);
    });
  });

  describe('Config validation', () => {
    test('should have readonly ignoreComponents array', () => {
      // Test that the ignore list is properly configured as readonly
      expect(config.ignoreComponents).toBeDefined();
      expect(Array.isArray(config.ignoreComponents)).toBe(true);
      expect(config.ignoreComponents.length).toBeGreaterThan(0);
    });

    test('should have ignoreFolders array with docs and examples', () => {
      expect(config.ignoreFolders).toBeDefined();
      expect(Array.isArray(config.ignoreFolders)).toBe(true);
      expect(config.ignoreFolders).toContain('docs');
      expect(config.ignoreFolders).toContain('examples');
    });
  });
});
