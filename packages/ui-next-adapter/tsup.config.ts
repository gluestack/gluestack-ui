import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'], // Only CommonJS for Next.js compatibility
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: false, // Disable treeshaking to avoid issues with Node.js modules
  minify: false,
  target: 'node16',
  platform: 'node',
  // Keep all Node.js related modules external
  external: [
    'react',
    'react-dom',
    'next',
    'webpack',
    'fs-extra',
    'find-yarn-workspace-root',
    'fs',
    'path',
    'graceful-fs'
  ],
  banner: {
    js: `/**
 * @gluestack/ui-next-adapter
 * Next.js adapter for Gluestack UI
 */`,
  },
})