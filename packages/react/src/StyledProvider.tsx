import { get, onChange, set } from './core/colorMode';
import * as React from 'react';
import { Platform } from 'react-native';
import { propertyTokenMap } from './propertyTokenMap';
import type { COLORMODES } from './types';
import { platformSpecificSpaceUnits } from './utils';
import { createGlobalStylesWeb } from './createGlobalStylesWeb';
import { createGlobalStyles } from './createGlobalStyles';
import { resolveComponentThemes } from './createConfig';
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
}> = ({ config, colorMode, children, globalStyles }) => {
  const currentConfig: any = React.useMemo(() => {
    //TODO: Add this later
    return platformSpecificSpaceUnits(config, Platform.OS);
  }, [config]);

  if (Platform.OS === 'web' && globalStyles) {
    const globalStyleInjector = createGlobalStylesWeb(globalStyles);
    globalStyleInjector({ ...currentConfig, propertyTokenMap });
  }

  const currentColorMode = React.useMemo(() => {
    return colorMode ?? get() ?? 'light';
  }, [colorMode]);

  React.useEffect(() => {
    // Add gs class name
    if (Platform.OS === 'web') {
      document.documentElement.classList.add(`gs`);
      document.documentElement.classList.add(`gs-${currentColorMode}`);
    }

    // GluestackStyleSheet.resolve({ ...config, propertyTokenMap });
    // GluestackStyleSheet.injectInStyle();

    onChange((currentColor: string) => {
      // only for web
      if (Platform.OS === 'web') {
        if (currentColor === 'dark') {
          document.documentElement.classList.remove(`gs-light`);
        } else {
          document.documentElement.classList.remove(`gs-dark`);
        }
        document.documentElement.classList.add(`gs-${currentColor}`);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setCurrentColorMode(currentColorMode);
  }, [currentColorMode]);

  // // Set colormode for the first time
  if (!colorModeSet) {
    setCurrentColorMode(currentColorMode);
  }

  const [animationDriverData, setAnimationDriverData] = React.useState();
  const globalStyleMap =
    config?.globalStyle && createGlobalStyles(config.globalStyle);

  const contextValue = React.useMemo(() => {
    const resolvedComponents = resolveComponentThemes(
      {},
      currentConfig.components
    );
    currentConfig.components = resolvedComponents;
    return {
      config: currentConfig,
      globalStyle: globalStyleMap,
      animationDriverData,
      setAnimationDriverData,
    };
  }, [currentConfig, globalStyleMap, animationDriverData]);

  return (
    <StyledContext.Provider value={contextValue}>
      {children}
    </StyledContext.Provider>
  );
};

export const useStyled = () => React.useContext(StyledContext);
