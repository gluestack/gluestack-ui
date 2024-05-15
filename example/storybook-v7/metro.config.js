const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { generate } = require('@storybook/react-native/scripts/generate');
const { withNativeWind } = require('nativewind/metro');

generate({
  configPath: path.resolve(__dirname, './.ondevice'),
  useJs: true,
});

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.unstable_allowRequireContext = true;

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');
defaultConfig.watchFolders = [
  path.join(workspaceRoot, 'packages', 'unstyled'),
  path.join(workspaceRoot, 'packages', 'nativewind'),
  path.join(workspaceRoot, 'packages', 'styled'),
  path.join(projectRoot, '..', 'storybook-nativewind'),
];
// defaultConfig.resolver.disableHierarchicalLookup = true;
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  // path.resolve(workspaceRoot, 'node_modules'),
];

defaultConfig.projectRoot = path.resolve(__dirname, '../storybook-nativewind'); // path to the external module
// defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
//   const defaultResolveResult = context.resolveRequest(
//     context,
//     moduleName,
//     platform
//   );

//   if (
//     process.env.STORYBOOK_ENABLED !== "true" &&
//     defaultResolveResult?.filePath?.includes?.(".ondevice/")
//   ) {
//     return {
//       type: "empty",
//     };
//   }

//   return defaultResolveResult;
// };

// module.exports = defaultConfig;

module.exports = withNativeWind(defaultConfig, {
  input: './global.css',
  inlineRem: 16,
});
