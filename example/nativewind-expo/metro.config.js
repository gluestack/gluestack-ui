const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

config.watchFolders.push(path.join(__dirname, '../..'));
const nodeModulesPath = [];
nodeModulesPath.push(path.join(__dirname, '../../node_modules'));
nodeModulesPath.push(path.join(__dirname, './node_modules'));
nodeModulesPath.push(
  path.join(__dirname, '../../packages/styled/nativewind/node_modules')
);
config.resolver.nodeModulesPaths = nodeModulesPath;
config.resolver.disableHierarchicalLookup = true;
console.log('🚀 ~ nodeModulesPath:', nodeModulesPath);
module.exports = withNativeWind(config, { input: './global.css' });
