const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const projectRoot = __dirname;
// Resolve to the monorepo root (apps/expo -> apps -> monorepo root)
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch all files in the monorepo (needed to pick up packages/* changes)
config.watchFolders = [workspaceRoot];

// Resolve modules from both the project root and the monorepo root
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Ensure Metro can resolve workspace packages by their source
config.resolver.disableHierarchicalLookup = false;

module.exports = withNativeWind(config, { input: './global.css', inlineRem: 16 });
