const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const OUTPUT_FILE = `./.gluestack/config-${process.ppid}.js`;
const MOCK_LIBRARY = `./mock-${process.ppid}.js`;

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

  throw new Error(
    'gluestack-style.config.js or gluestack-style.config.ts / gluestack-ui.config.js or gluestack-ui.config.ts not found in the root directory'
  );
}

const mockLibrary = `const react = {
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

module.exports = {
  ...react,
  ...reactNative,
  ...gluestackStyleReact,
  ...gluestackStyleAnimationResolver,
  ...gluestackStyleLegendMotionAnimationDriver,
  ...gluestackStyleMotiAnimationDriver,
}
`;

const getEsBuildConfigOptions = (
  inputDir: string,
  outputDir: string = OUTPUT_FILE,
  mockedLibraryPath: string = MOCK_LIBRARY
) => {
  const entryPoint = inputDir ?? getConfigPath();

  if (!entryPoint) {
    throw new Error(
      'gluestack-style.config.js or gluestack-style.config.ts not found in the root directory'
    );
  }

  const esbuildConfigOptions = {
    entryPoints: [entryPoint],
    bundle: true,
    outfile: outputDir,
    format: 'iife',
    globalName: 'config',
    // banner: {
    //   js: globals,
    // },
    alias: {
      'react-native': mockedLibraryPath,
      '@gluestack-style/react': mockedLibraryPath,
      '@gluestack-style/animation-resolver': mockedLibraryPath,
      '@gluestack-style/legend-motion-animation-driver': mockedLibraryPath,
      '@gluestack-style/moti-animation-driver': mockedLibraryPath,
    },
    target: 'node18',
    footer: {
      js: 'module.exports = config;',
    },
    resolveExtensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
    platform: 'node',
    external: [
      'react',
      'react-native',
      '@gluestack-style/react',
      '@gluestack-style/animation-resolver',
      '@gluestack-style/legend-motion-animation-driver',
      '@gluestack-style/moti-animation-driver',
      mockedLibraryPath,
    ],
  };
  return esbuildConfigOptions;
};

function cleanup() {
  if (fs.existsSync(`${process.cwd()}/.gluestack`)) {
    fs.rmSync(
      `${process.cwd()}/.gluestack`,
      { recursive: true, force: true },
      (err: any) => {
        if (err) {
          console.error(err);
        } else {
          // eslint-disable-next-line no-console
          console.log(`Removed ${process.cwd()}/.gluestack`);
          // eslint-disable-next-line no-console
          console.log('Preparing for build...');
        }
      }
    );
  }
}

function buildConfig(
  inputDir: string,
  outputDir: string,
  mockLibraryPath: string
) {
  try {
    const esbuildConfigOptions = getEsBuildConfigOptions(
      inputDir,
      outputDir,
      mockLibraryPath
    );
    esbuild.buildSync(esbuildConfigOptions);
  } catch (err) {
    console.error(err);
  }
}

function buildMockLibrary(mockedLibraryPath: string) {
  const gluestackFolderPath = path.join(process.cwd(), './.gluestack');
  const mockLibraryFullPath = path.resolve(
    gluestackFolderPath,
    mockedLibraryPath
  );
  if (!fs.existsSync(gluestackFolderPath)) {
    fs.mkdirSync(gluestackFolderPath);
  }

  fs.writeFileSync(mockLibraryFullPath, mockLibrary);
}

function cleanupAndBuildConfig(
  inputDir: string,
  outputDir: string,
  mockedLibraryPath: string
) {
  try {
    cleanup();
    buildMockLibrary(mockedLibraryPath);
    buildConfig(inputDir, outputDir, mockedLibraryPath);
  } catch (err) {
    console.error(err);
  }
}

export const getConfig = (
  inputDir: string,
  outputDir: string = OUTPUT_FILE,
  mockLibraryPath: string = MOCK_LIBRARY
) => {
  try {
    if (inputDir) {
      cleanupAndBuildConfig(inputDir, outputDir, mockLibraryPath);
      const configFile = require(`${process.cwd()}/${outputDir}`);
      return configFile;
    } else {
      return {};
    }
  } catch (err) {
    console.error(err);
  }
};
