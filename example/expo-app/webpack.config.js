const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { resolver } = require('./metro.config');
const findWorkspaceRoot = require('find-yarn-workspace-root');

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
// const workspaceRoot = path.resolve(__dirname, "../../..");

const workspaceRoot = findWorkspaceRoot(__dirname);

const styledRoot = path.resolve(workspaceRoot, 'packages/react');
const localCSSInjector = path.resolve(workspaceRoot, 'packages/css-injector');
const colorModeRoot = path.resolve(
  workspaceRoot,
  'node_modules/@gluestack-style/color-mode'
);
const cssInjectorPath = path.resolve(
  workspaceRoot,
  'node_modules/@gluestack-style/css-injector'
);
const cssifyPath = path.resolve(
  workspaceRoot,
  'node_modules/@gluestack-style/cssify'
);

const node_modules = path.join(workspaceRoot, 'node_modules');

// const designSystem = path.resolve(__dirname, "../glustack-design-system");
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    include: [
      path.resolve(styledRoot),
      path.resolve(colorModeRoot),
      path.resolve(cssifyPath),
      path.resolve(cssInjectorPath),
      path.resolve(localCSSInjector),
      // path.resolve(designSystem, "src"),
    ],
    use: 'babel-loader',
  });

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in example's node_modules
  Object.assign(config.resolve.alias, {
    ...resolver.extraNodeModules,
    'react-native-web': path.join(node_modules, 'react-native-web'),
  });

  // Maybe you want to turn off compression in dev mode.
  if (config.mode === 'development') {
    config.devServer.compress = false;
  }
  // Or prevent minimizing the bundle when you build.
  if (config.mode === 'production') {
    config.optimization.minimize = false;
  }

  return config;
};
