const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { generate } = require('@storybook/react-native/scripts/generate');
const { withNativeWind } = require('nativewind/metro');

generate({
  configPath: path.resolve(__dirname, './.ondevice'),
  useJs: true,
});

const defaultConfig = getDefaultConfig(__dirname, { isCSSEnabled: true });

defaultConfig.transformer.unstable_allowRequireContext = true;

module.exports = defaultConfig;

module.exports = withNativeWind(defaultConfig, {
  input: './global.css',
});
