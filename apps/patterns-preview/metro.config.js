const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativewind } = require('nativewind/metro');

const appDir = __dirname;
const srcDir = path.resolve(appDir, '../../src');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(appDir);

config.watchFolders = [...(config.watchFolders || []), srcDir];

// Files under src/ must resolve their packages from THIS app's node_modules.
// The repo root has its own react / react-native / nativewind, and picking
// those up would load two copies of React.
const upstream = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  const isBare = !moduleName.startsWith('.') && !path.isAbsolute(moduleName);
  const fromSrc = context.originModulePath.startsWith(srcDir + path.sep);
  const ctx =
    isBare && fromSrc
      ? { ...context, originModulePath: path.join(appDir, 'index.js') }
      : context;
  return upstream
    ? upstream(ctx, moduleName, platform)
    : ctx.resolveRequest(ctx, moduleName, platform);
};

module.exports = withNativewind(config, { inlineRem: 16 });
