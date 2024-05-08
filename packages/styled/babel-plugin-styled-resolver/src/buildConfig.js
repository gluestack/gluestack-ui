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
  FontResolver: class {
    constructor(...args) {
      return args;
    }
  }
};
const expoHtmlElements = {
  A: () => {},
  H1: () => {},
  H2: () => {},
  H3: () => {},
  H4: () => {},
  H5: () => {},
  H6: () => {},
  Div: () => {},
  Img: () => {},
  Footer: () => {},
  Header: () => {},
  Aside: () => {},
  Main: () => {},
  Section: () => {},
  UL: () => {},
  LI: () => {},
  HR: () => {},
  Table: () => {},
  THead: () => {},
  TBody: () => {},
  TFoot: () => {},
  TH: () => {},
  TD: () => {},
  Caption: () => {},
  P: () => {},
  B: () => {},
  S: () => {},
  I: () => {},
  Q: () => {},
  Blockquote: () => {},
  BR: () => {},
  Mark: () => {},
  Code: () => {},
  Pre: () => {},
  Time: () => {},
  Strong: () => {},
  Del: () => {},
  EM: () => {},
  Span: () => {},
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
  inputDir,
  outputDir = OUTPUT_FILE,
  mockedLibraryPath = MOCK_LIBRARY
) => {
  const entryPoint = inputDir ?? getConfigPath();

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
      '@expo/html-elements': mockedLibraryPath,
    },
    target: 'node18',
    footer: {
      js: 'module.exports = config;',
    },
    resolveExtensions: ['.js', '.ts'],
    platform: 'node',
    external: [
      'react',
      'react-native',
      '@gluestack-style/react',
      '@gluestack-style/animation-resolver',
      '@gluestack-style/legend-motion-animation-driver',
      '@gluestack-style/moti-animation-driver',
      '@expo/html-elements',
      mockedLibraryPath,
    ],
  };
  return esbuildConfigOptions;
};

function cleanup() {
  const directoryPath = path.join(process.cwd(), '.gluestack');

  if (fs.existsSync(directoryPath)) {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      fs.rmSync(filePath, { force: true }, (err) => {
        if (err) {
          console.error(err);
        } else {
          // eslint-disable-next-line no-console
          console.log(`Removed ${filePath}`);
        }
      });
    });

    // eslint-disable-next-line no-console
    console.log('Preparing for build...');
  }
}

function buildConfig(inputDir, outputDir, mockLibraryPath) {
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

function buildMockLibrary(mockedLibraryPath) {
  const gluestackFolderPath = path.resolve(process.cwd(), './.gluestack');
  const mockLibraryFullPath = path.resolve(
    gluestackFolderPath,
    mockedLibraryPath
  );
  if (!fs.existsSync(mockLibraryFullPath)) {
    if (!fs.existsSync(gluestackFolderPath)) {
      fs.mkdirSync(gluestackFolderPath);
    }
    fs.writeFileSync(mockLibraryFullPath, mockLibrary, {
      encoding: 'utf-8',
    });
  }
}

function cleanupAndBuildConfig(inputDir, outputDir, mockedLibraryPath) {
  try {
    cleanup();
    buildMockLibrary(mockedLibraryPath);
    buildConfig(inputDir, outputDir, mockedLibraryPath);
  } catch (err) {
    console.error(err);
  }
}

const getConfig = (
  inputDir,
  outputDir = OUTPUT_FILE,
  mockLibraryPath = MOCK_LIBRARY
) => {
  try {
    if (inputDir && !fs.existsSync(path.join(process.cwd(), outputDir))) {
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

module.exports = {
  getConfig,
  buildMockLibrary,
  cleanup,
};
