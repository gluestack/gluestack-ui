const fs = require('fs');
const path = require('path');

// Regression tests for https://github.com/gluestack/gluestack-ui/issues/3421:
// `npx gluestack-ui init` broke fresh React Native 0.86 projects by writing the
// deprecated metro-react-native-babel-preset, installing stale reanimated,
// and pulling web-only react-aria/react-dom into RN projects.
const pkgRoot = path.join(__dirname, '..', '..');

const read = (relPath) => fs.readFileSync(path.join(pkgRoot, relPath), 'utf8');

const templatesDir = path.join(pkgRoot, 'templates', 'react-native-cli');

describe('RN CLI init (issue #3421)', () => {
  describe('Babel preset', () => {
    test('templates contain no deprecated metro-react-native-babel-preset', () => {
      for (const file of fs.readdirSync(templatesDir)) {
        const content = read(path.join('templates', 'react-native-cli', file));
        expect(content).not.toContain('metro-react-native-babel-preset');
      }
    });

    test('babel template uses @react-native/babel-preset', () => {
      const content = read(
        path.join('templates', 'react-native-cli', 'babel.config.nativewind.js')
      );
      expect(content).toContain(
        "presets: ['module:@react-native/babel-preset'"
      );
    });

    test('inline v4 RN CLI babel config uses @react-native/babel-preset', () => {
      const initSrc = read(path.join('src', 'util', 'init', 'index.ts'));
      expect(initSrc).toContain('NATIVEWIND_V4_BABEL_CONFIG_RN_CLI');
      expect(initSrc).toMatch(
        /const NATIVEWIND_V4_BABEL_CONFIG_RN_CLI = `[\s\S]*?presets: \['module:@react-native\/babel-preset', 'nativewind\/babel'\]/
      );
      // The v4 inline config keeps the tailwind.config alias (unlike v5).
      expect(initSrc).toContain("'tailwind.config': './tailwind.config.js'");
    });
  });

  describe('Metro react-dom alias', () => {
    test('inline v4 RN CLI metro config maps react-dom to react-native', () => {
      const initSrc = read(path.join('src', 'util', 'init', 'index.ts'));
      expect(initSrc).toContain('NATIVEWIND_V4_METRO_CONFIG_RN_CLI');
      expect(initSrc).toContain("'react-dom': require.resolve('react-native')");
    });

    test('metro template also carries the alias', () => {
      const content = read(
        path.join('templates', 'react-native-cli', 'metro.config.nativewind.js')
      );
      expect(content).toContain('extraNodeModules');
      expect(content).toContain("'react-dom': require.resolve('react-native')");
    });
  });

  describe('Dependency cleanup', () => {
    // Extract one entry block (e.g. "'expo': { ... }") from dependencies.ts.
    const entryBlock = (key) => {
      const src = read(path.join('src', 'dependencies.ts'));
      const start = src.indexOf(`'${key}': {`);
      expect(start).toBeGreaterThan(-1);
      const nextEntry = src
        .slice(start + key.length + 4)
        .search(/\n  '[^']+': \{/);
      const end =
        nextEntry === -1 ? src.length : start + key.length + 4 + nextEntry;
      return src.slice(start, end);
    };

    test('react-native-cli and expo entries have no react-aria/react-stately', () => {
      for (const key of ['react-native-cli', 'expo']) {
        const block = entryBlock(key);
        expect(block).not.toContain('react-aria');
        expect(block).not.toContain('react-stately');
      }
    });

    test('nextjs entry keeps react-aria/react-stately (web-only)', () => {
      const block = entryBlock('nextjs');
      expect(block).toContain('react-aria');
      expect(block).toContain('react-stately');
    });

    test('installNativeDependencies no longer installs react-dom for RN CLI', () => {
      const src = read(path.join('src', 'util', 'index.ts'));
      const nativeDepsLines = [
        ...src.matchAll(/const nativeDeps = \[([^\]]*)\]/g),
      ].map((m) => m[1]);
      expect(nativeDepsLines.length).toBeGreaterThan(0);
      for (const deps of nativeDepsLines) {
        expect(deps).not.toContain('react-dom');
      }
    });
  });

  describe('Reanimated pins', () => {
    test('no component pins reanimated below 4.4', () => {
      const componentsDir = path.join(
        pkgRoot,
        '..',
        '..',
        'src',
        'components',
        'ui'
      );
      const depFiles = fs
        .readdirSync(componentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => path.join(componentsDir, d.name, 'dependencies.json'))
        .filter((f) => fs.existsSync(f));

      expect(depFiles.length).toBeGreaterThan(0);

      for (const file of depFiles) {
        let json;
        try {
          json = JSON.parse(fs.readFileSync(file, 'utf8'));
        } catch {
          // Skip empty/invalid dependencies.json (e.g. box/) — the CLI
          // tolerates these too (getComponentDependencies returns {}).
          continue;
        }
        const version = json.dependencies?.['react-native-reanimated'];
        if (version) {
          const [major, minor] = version
            .replace(/^[\^~]/, '')
            .split('.')
            .map(Number);
          expect(major).toBe(4);
          expect(minor).toBeGreaterThanOrEqual(4);
        }
      }
    });

    test('upgrade command pins reanimated ~4.4.1 and worklets ~0.9.3', () => {
      const src = read(path.join('src', 'commands', 'upgrade.ts'));
      expect(src).toContain('react-native-reanimated@~4.4.1');
      expect(src).toContain('react-native-worklets@~0.9.3');
      expect(src).not.toContain('react-native-reanimated@~4.2.1');
      expect(src).not.toContain('react-native-worklets@~0.7.1');
    });
  });
});
