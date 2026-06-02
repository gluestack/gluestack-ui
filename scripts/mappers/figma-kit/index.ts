/**
 * scripts/mappers/figma-kit/index.ts
 * ────────────────────────────────────
 * Mapper for the figma-kit app.
 *
 * Called by scripts/dev.ts watcher via:
 *   mapper.component(componentName, event)   — when src/components/ui/<comp>/** changes
 *   mapper.nonComponent(filePath)             — when src/sidebar.json changes
 *
 * Syncs:
 *   src/components/ui/<comp>/** → apps/figma-kit/components/ui/<comp>/
 *   (docs/ and examples/ directories are excluded — raw MDX is read at runtime)
 *
 * Also regenerates component-docs.ts from MDX on every component change so
 * the Figma-kit UI always reflects the latest prop tables.
 */

import path from 'path';
import { execSync } from 'child_process';
import { processComponentChange, copySpecialFile, MapperConfig } from '../utils/componentOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('src/components/ui'),
  destPath: path.resolve('apps/figma-kit/components/ui'),
  // Skip docs and examples — the figma kit reads MDX directly at runtime
  ignoreFiles: ['docs', 'examples', 'dependencies.json'],
};

/** Regenerate component-docs.ts + component-docs.json + update ui.html */
function regenerateDocs(): void {
  try {
    execSync('node scripts/generate-component-docs.js', { stdio: 'inherit' });
    console.log('✅ [figma-kit] component-docs regenerated');
  } catch (err) {
    console.error('❌ [figma-kit] Failed to regenerate component-docs:', err);
  }
}

export default {
  /**
   * Called when a file inside src/components/ui/<component>/** changes.
   * Syncs the component folder to apps/figma-kit/components/ui, then
   * regenerates the docs if the change was to a docs/index.mdx file.
   */
  component: function (component: string, event: string = 'added') {
    processComponentChange(component, event, mapperConfig);
    // Always regenerate docs so prop tables stay fresh
    regenerateDocs();
  },

  /**
   * Called when a non-component src file changes (e.g. sidebar.json).
   * Syncs sidebar.json and regenerates the docs catalogue.
   */
  nonComponent: function (filePath: string) {
    if (
      filePath === 'src/sidebar.json' ||
      filePath.endsWith('/sidebar.json') ||
      filePath.endsWith('\\sidebar.json')
    ) {
      const destPath = path.resolve('apps/figma-kit/sidebar.json');
      copySpecialFile(filePath, destPath);
      console.log('✅ [figma-kit] sidebar.json synced');
      // Sidebar drives the category assignments in the docs
      regenerateDocs();
    }
  },
};
