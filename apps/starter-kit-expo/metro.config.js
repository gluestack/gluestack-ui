const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require('nativewind/metro');
const { withUniwindConfig } = require('uniwind/metro'); 

const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, { input: './global.css' });
module.exports = withUniwindConfig(config, {  
    // relative path to your global.css file (from previous step)
    cssEntryFile: './global.css',
    // (optional) path where we gonna auto-generate typings
    // defaults to project's root
    dtsFile: './uniwind-types.d.ts'
  });
