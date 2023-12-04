/* eslint-disable no-console */
const rollupTypescriptPlugin = require('@rollup/plugin-typescript');
const rollup = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const fs = require('fs');
const path = require('path');

async function buildAndRun(rollupConfig) {
  try {
    await cleanup();
    const bundle = await rollup.rollup(rollupConfig);

    await bundle.write(rollupConfig.output);
  } catch (err) {
    console.log(err);
  }
}

function cleanup() {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(`${process.cwd()}/.gluestack`)) {
      fs.rm(
        `${process.cwd()}/.gluestack`,
        { recursive: true, force: true },
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(`Removed ${process.cwd()}/.gluestack`);
          }
        }
      );
    } else {
      resolve('Preparing for build...');
    }
  });
}

function getConfigPath() {
  const isConfigJSExist = fs.existsSync(
    path.join(process.cwd(), './gluestack-style.config.js')
  );
  const isGlueStackUIConfigJSExist = fs.existsSync(
    path.join(process.cwd(), './gluestack-ui.config.js')
  );
  const isConfigTSExist = fs.existsSync(
    path.join(process.cwd(), './gluestack-style.config.ts')
  );
  const isGlueStackUIConfigTSExist = fs.existsSync(
    path.join(process.cwd(), './gluestack-ui.config.ts')
  );

  if (isConfigJSExist) return './gluestack-style.config.js';
  if (isConfigTSExist) return './gluestack-style.config.ts';
  if (isGlueStackUIConfigJSExist) return './gluestack-ui.config.js';
  if (isGlueStackUIConfigTSExist) return './gluestack-ui.config.ts';
}

const globals = `const react = {
  forwardRef: () => {},
  createElement: () => {},
};
const reactNative = {
  Platform: {
    select: () => {},
  },
  StyleSheet: {
    create: () => {},
  },
  PixelRatio: {
    getFontScale: () => {},
  },
};
const gluestackStyleReact = {
  createConfig: (config) => {
    return config;
  },
  createStyle: (config) => {
    return config;
  },
  createComponents: (config) => {
    return config;
  },
};
const gluestackStyleAnimationResolver = {
  AnimationResolver: class {
    constructor() {}
  },
};
const gluestackStyleLegendMotionAnimationDriver = {
};
const gluestackStyleMotiAnimationDriver = {
};
`;

const generateRollupConfig = (config = {}) => {
  const rollupConfig = {
    input: getConfigPath(),
    output: {
      file: `./.gluestack/config-${process.ppid}.js`, // The bundled JavaScript file
      format: 'iife', // iife format for Node.js
      globals: {
        'react': 'react',
        'react-native': 'reactNative',
        '@gluestack-style/react': 'gluestackStyleReact',
        '@gluestack-style/animation-resolver':
          'gluestackStyleAnimationResolver',
        '@gluestack-style/legend-motion-animation-driver':
          'gluestackStyleLegendMotionAnimationDriver',
        '@gluestack-style/moti-animation-driver':
          'gluestackStyleMotiAnimationDriver',
      },
      name: 'config',
      banner: globals,
      footer: 'module.exports = config;',
    },
    plugins: [
      resolve({
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'], // Add your custom file extensions here
      }),
      rollupTypescriptPlugin({
        compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' },
        tsconfig: false,
        // typescript: require('some-fork-of-typescript'),
      }),
    ],
    external: [
      'react',
      'react-native',
      '@gluestack-style/react',
      '@gluestack-style/animation-resolver',
      '@gluestack-style/legend-motion-animation-driver',
      '@gluestack-style/moti-animation-driver',
    ],
    ...config,
  };
  return rollupConfig;
};

const getConfig = async (configPath) => {
  const rollupConfig = generateRollupConfig();
  try {
    await buildAndRun(rollupConfig);
    console.log('Config built successfully!');
    const { config } = require(`${process.cwd()}/.gluestack/config-${
      process.ppid
    }.js`);
    return config;
  } catch (err) {
    console.log('Error: ', rollupConfig, err);
  }
};

module.exports = {
  getConfig,
};
