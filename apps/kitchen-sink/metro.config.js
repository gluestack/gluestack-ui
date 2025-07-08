const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
const path = require('path');
const os = require('os');
config.watchFolders = [
    path.resolve(os.homedir(), '.yalc'),
  ];
module.exports = withNativeWind(config, { input: './global.css' });