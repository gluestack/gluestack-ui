import { get, onChange, set } from './core/colorMode';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { propertyTokenMap } from './propertyTokenMap';
import type { COLORMODES } from './types';
import {
  convertTokensToCssVariables,
  generateMergedThemeTokens,
  platformSpecificSpaceUnits,
} from './utils';
import { createGlobalStylesWeb } from './createGlobalStylesWeb';
import { createGlobalStyles } from './createGlobalStyles';
import { injectGlobalCssStyle } from './injectInStyle';
import { ThemeContext, useTheme } from './Theme';
import { useSafeLayoutEffect } from './hooks/useSafeLayoutEffect';
import { resolveThemes } from './createConfig';

type Config = any;
let colorModeSet = false;
let rootId = '';

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

const setCurrentColorMode = (inputColorMode: string | undefined) => {
  if (inputColorMode) {
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
  _experimentalSupportDynamicTheme?: boolean;
}> = ({
  config,
  colorMode,
  children,
  globalStyles,
  _experimentalNestedProvider,
  _experimentalSupportDynamicTheme,
}) => {
  const inlineStyleMap: any = React.useRef({
    initialStyleInjected: false,
  });

  const { themes } = useTheme();
  const id = React.useId();

  if (rootId === '') {
    rootId = id;
  }

  const isRootProvider = rootId === id;

  const themeContextValue = React.useMemo(() => {
    if (colorMode) {
      return {
        themes: [...themes, colorMode],
      };
    }
    return { themes };
  }, [colorMode, themes]);

  inlineStyleMap.current.initialStyleInjected = false;
  // const id = React.useId();
  const currentConfig: any = React.useMemo(() => {
    let configWithPlatformSpecificUnits: any = platformSpecificSpaceUnits(
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

      configWithPlatformSpecificUnits = resolveThemes(
        configWithPlatformSpecificUnits
      );
    }

    configWithPlatformSpecificUnits = generateMergedThemeTokens(
      configWithPlatformSpecificUnits
    );

    return configWithPlatformSpecificUnits;
  }, [config]);

  if (Platform.OS === 'web' && globalStyles) {
    const globalStyleInjector = createGlobalStylesWeb(globalStyles);
    globalStyleInjector({ ...currentConfig, propertyTokenMap });
  }

  if (Platform.OS === 'web') {
    const cssVariables = convertTokensToCssVariables(currentConfig);
    injectGlobalCssStyle(
      cssVariables,
      'variables',
      _experimentalSupportDynamicTheme
    );
  }

  const currentColorMode = React.useMemo(() => {
    return colorMode;
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
      if (isRootProvider) {
        if (currentColorMode) {
          documentElement
            .querySelector('body')
            ?.setAttribute('data-theme-id', currentColorMode);
          documentElement.classList.add(`gs-${currentColorMode}`);
        } else {
          documentElement.classList.add(`gs-light`);
        }
      }
    }
    onChange((currentColor: string) => {
      // only for web
      if (Platform.OS === 'web' && !_experimentalNestedProvider) {
        const documentElement = document.documentElement;
        if (isRootProvider) {
          if (currentColor) {
            if (currentColor === 'dark') {
              documentElement
                .querySelector('body')
                ?.setAttribute('data-theme-id', 'dark');
              documentElement.classList.remove(`gs-light`);
            } else {
              documentElement
                .querySelector('body')
                ?.setAttribute('data-theme-id', 'light');
              documentElement.classList.remove(`gs-dark`);
            }
            documentElement.classList.add(`gs-${currentColor}`);
          }
        }
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isRootProvider) {
      setCurrentColorMode(currentColorMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentColorMode]);

  useSafeLayoutEffect(() => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
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
  if (!colorModeSet && isRootProvider) {
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
      isConfigSet: true,
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
    <ThemeContext.Provider value={themeContextValue}>
      <StyledContext.Provider value={contextValue}>
        {children}
      </StyledContext.Provider>
    </ThemeContext.Provider>
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
