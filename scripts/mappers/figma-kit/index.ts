/**
 * scripts/mappers/figma-kit/index.ts
 * ────────────────────────────────────
 * Mapper for the figma-ui-kit-generator app.
 *
 * Called by scripts/dev.ts watcher via:
 *   mapper.component(componentName, event)   — when src/components/ui/<comp>/** changes
 *   mapper.nonComponent(filePath)             — when src/sidebar.json changes
 *
 * Syncs:
 *   src/components/ui/<comp>/** → apps/figma-ui-kit-generator/components/ui/<comp>/
 *   (without docs/ and examples/ — generator reads raw MDX directly at runtime)
 */

import path from 'path';
import { processComponentChange, copySpecialFile, MapperConfig } from '../utils/componentOperations';

const mapperConfig: MapperConfig = {
  sourcePath: path.resolve('src/components/ui'),
  destPath: path.resolve('apps/figma-ui-kit-generator/components/ui'),
  // Skip docs and examples — the figma kit reads MDX directly at runtime
  ignoreFiles: ['docs', 'examples', 'dependencies.json'],
};

export default {
  /**
   * Called when a file inside src/components/ui/<component>/** changes.
   * Syncs the component folder to apps/figma-ui-kit-generator/components/ui.
   */
  component: function (component: string, event: string = 'added') {
    processComponentChange(component, event, mapperConfig);
  },

  /**
   * Called when a non-component src file changes (e.g. sidebar.json).
   * Syncs sidebar.json so the generator always has the latest component list.
   */
  nonComponent: function (filePath: string) {
    if (
      filePath === 'src/sidebar.json' ||
      filePath.endsWith('/sidebar.json') ||
      filePath.endsWith('\\sidebar.json')
    ) {
      const destPath = path.resolve('apps/figma-ui-kit-generator/sidebar.json');
      copySpecialFile(filePath, destPath);
      console.log('✅ [figma-kit] sidebar.json synced');
    }
  },
};
