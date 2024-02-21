// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
// var config = getDefaultConfig(__dirname);
const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');
config.watchFolders = [workspaceRoot];
config.resolver.disableHierarchicalLookup = true;
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

const { withNativeWind } = require('nativewind/metro');

config.resolver.resolverMainFields.unshift('sbmodern');

config.server = {
  rewriteRequestUrl: (url) => {
    if (!url.endsWith('.bundle')) {
      return url;
    }
    // https://github.com/facebook/react-native/issues/36794
    // JavaScriptCore strips query strings, so try to re-add them with a best guess.
    return (
      url +
      '?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true'
    );
  },
};
module.exports = withNativeWind(config, { input: './global.css' });
