import { get, onChange, set } from './core/colorMode';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { propertyTokenMap } from './propertyTokenMap';
import type { COLORMODES } from './types';
import { convertToUnicodeString, platformSpecificSpaceUnits } from './utils';
import { createGlobalStylesWeb } from './createGlobalStylesWeb';
import { createGlobalStyles } from './createGlobalStyles';
import { injectGlobalCssStyle } from './injectInStyle';

type Config = any;
let colorModeSet = false;

export const defaultConfig: {
  config: Config;
  colorMode: COLORMODES;
  components: any;
} = {
  config: {},
  colorMode: 'light',
  components: {},
};

const defaultContextData: Config = defaultConfig;
const StyledContext = React.createContext<Config>(defaultContextData);

function convertTokensToCssVariables(currentConfig: any) {
  function objectToCssVariables(obj: any, prefix = '') {
    return Object.keys(obj).reduce((acc, key) => {
      const variableName = `--${prefix}${key}`;
      const variableValue = obj[key];

      if (typeof variableValue === 'object') {
        // Recursively process nested objects
        acc += objectToCssVariables(variableValue, `${prefix}${key}-`);
      } else {
        acc += `${convertToUnicodeString(variableName)}: ${variableValue};\n`;
      }

      return acc;
    }, '');
  }

  const tokens = currentConfig.tokens;
  const cssVariables = objectToCssVariables(tokens);
  let content = `:root {\n${cssVariables}}`;

  if (currentConfig.themes) {
    Object.keys(currentConfig.themes).forEach((key) => {
      const theme = currentConfig.themes[key];
      const cssVariables = objectToCssVariables(theme);
      content += `\n\n[data-theme-id=${key}] {\n${cssVariables}}`;
    });
  }

  return content;

  // const cssVariablesBlock = `
  // :root {
  //   --colors-red500: blue;
  // }
  //   `;

  // return cssVariablesBlock;
}

const setCurrentColorMode = (inputColorMode: string) => {
  if (inputColorMode) {
    // console.log(get(), '>>>>>>');
    const currentColorMode = get();
    if (currentColorMode !== inputColorMode) {
      set(inputColorMode);
    }
    colorModeSet = true;
  }

  // if (inputColorMode) {
  //   set(inputColorMode === 'dark' ? 'dark' : 'light');
  //   colorModeSet = true;
  // }
};
export const StyledProvider: React.FC<{
  config: Config;
  colorMode?: COLORMODES;
  children?: React.ReactNode;
  globalStyles?: any;
  _experimentalNestedProvider?: boolean;
}> = ({
  config,
  colorMode,
  children,
  globalStyles,
  _experimentalNestedProvider,
}) => {
  const inlineStyleMap: any = React.useRef({
    initialStyleInjected: false,
  });
  inlineStyleMap.current.initialStyleInjected = false;
  // const id = React.useId();
  const currentConfig: any = React.useMemo(() => {
    const configWithPlatformSpecificUnits: any = platformSpecificSpaceUnits(
      config,
      Platform.OS
    );

    if (config?.themes) {
      Object.keys(config.themes).forEach((key) => {
        configWithPlatformSpecificUnits.themes[key] =
          platformSpecificSpaceUnits(
            //@ts-ignore
            { tokens: config.themes[key] },
            Platform.OS
          ).tokens;
      });
    }

    return configWithPlatformSpecificUnits;
  }, [config]);

  if (Platform.OS === 'web' && globalStyles) {
    const globalStyleInjector = createGlobalStylesWeb(globalStyles);
    globalStyleInjector({ ...currentConfig, propertyTokenMap });
  }

  if (Platform.OS === 'web') {
    const cssVariables = convertTokensToCssVariables(currentConfig);
    injectGlobalCssStyle(cssVariables, 'variables');
  }

  const currentColorMode = React.useMemo(() => {
    return colorMode ?? get() ?? 'light';
  }, [colorMode]);

  const _experimentalNestedProviderRef = React.useRef(null);
  React.useEffect(() => {
    let documentElement: any = null;

    if (Platform.OS === 'web') {
      if (_experimentalNestedProvider) {
        // write own code for nested colorMode
        documentElement = _experimentalNestedProviderRef.current;
      } else {
        documentElement = document.documentElement;
      }
    }
    // Add gs class name
    if (Platform.OS === 'web') {
      documentElement.classList.add(`gs`);
      documentElement.setAttribute('data-theme-id', currentColorMode);
    }

    onChange((currentColor: string) => {
      // only for web
      if (Platform.OS === 'web' && !_experimentalNestedProvider) {
        const documentElement = document.documentElement;

        if (Platform.OS === 'web') {
          if (currentColor === 'dark') {
            documentElement.setAttribute('data-theme-id', 'dark');
          } else {
            documentElement.setAttribute('data-theme-id', 'light');
          }
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setCurrentColorMode(currentColorMode);
  }, [currentColorMode]);

  React.useLayoutEffect(() => {
    if (Platform.OS === 'web') {
      const toBeInjectedStyles: any = {};

      if (inlineStyleMap.current.initialStyleInjected) {
        return;
      }

      Object.keys(inlineStyleMap.current).forEach((key: any) => {
        if (key !== 'initialStyleInjected') {
          const styles = inlineStyleMap.current[key];

          if (!toBeInjectedStyles[key]) {
            toBeInjectedStyles[key] = document.createDocumentFragment();
          }

          styles.forEach((style: any) => {
            if (!document.getElementById(style.id)) {
              toBeInjectedStyles[key].appendChild(style);
            }
          });
        }
      });

      Object.keys(toBeInjectedStyles).forEach((key) => {
        let wrapperElement = document.querySelector('#' + key);
        if (wrapperElement) {
          wrapperElement.appendChild(toBeInjectedStyles[key]);
        }
        // delete inlineStyleMap.current[key];
      });

      inlineStyleMap.current.initialStyleInjected = true;
    }
  });
  // // Set colormode for the first time
  if (!colorModeSet) {
    setCurrentColorMode(currentColorMode);
  }

  const [animationDriverData, setAnimationDriverData] = React.useState();
  const globalStyleMap =
    config?.globalStyle && createGlobalStyles(config.globalStyle, Platform);

  const contextValue = React.useMemo(() => {
    const styledData = {
      config: currentConfig,
      globalStyle: globalStyleMap,
      animationDriverData,
      setAnimationDriverData,
      inlineStyleMap: inlineStyleMap.current,
    };

    if (_experimentalNestedProvider) {
      //@ts-ignore
      styledData._experimentalNestedProvider = _experimentalNestedProvider;
      //@ts-ignore
      styledData.colorMode = colorMode;
    }
    return styledData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentConfig, globalStyleMap, animationDriverData]);

  const providerComponent = (
    <StyledContext.Provider value={contextValue}>
      {children}
    </StyledContext.Provider>
  );

  if (_experimentalNestedProvider) {
    return (
      // @ts-ignore
      <View ref={_experimentalNestedProviderRef}>{providerComponent}</View>
    );
  } else {
    return <>{providerComponent}</>;
  }
};

export const useStyled = () => React.useContext(StyledContext);
