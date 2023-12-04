<<<<<<< HEAD
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

var config = getDefaultConfig(__dirname);

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
=======
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
// const findWorkspaceRoot = require('find-yarn-workspace-root');

const workspaceRoot = path.resolve(__dirname, '../..');
const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages, and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
// config.resolver.disableHierarchicalLookup = true;

config.resolver.resolverMainFields = [
  'sbmodern',
  ...config.resolver.resolverMainFields,
];

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

config.watchFolders = [...config.watchFolders];
>>>>>>> source-gluestack-style

module.exports = config;
