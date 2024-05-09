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

module.exports = defaultConfig;

module.exports = withNativeWind(defaultConfig, {
  input: './global.css',
});
