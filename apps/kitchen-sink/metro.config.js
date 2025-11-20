const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
const path = require('path');
const os = require('os');
const fs = require('fs');
const yalcPath = path.resolve(os.homedir(), '.yalc');
if (fs.existsSync(yalcPath)) {
  config.watchFolders = [yalcPath];
}
module.exports = withNativeWind(config, {
  input: './global.css',
  inlineRem: 16,
});
