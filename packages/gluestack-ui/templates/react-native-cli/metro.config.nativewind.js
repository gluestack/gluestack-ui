const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  'react-dom': require.resolve('react-native'),
};

module.exports = withNativeWind(config, {
  input: './global.css',
  inlineRem: 16,
});
