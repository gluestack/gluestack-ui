import { get, onChange, set } from '@dank-style/color-mode';
import * as React from 'react';
import { Platform } from 'react-native';
import type { COLORMODES } from './types';
import { platformSpecificSpaceUnits } from './utils';

type Config = any;

export const defaultConfig: { config: Config; colorMode: COLORMODES } = {
  config: {},
  colorMode: 'light',
};

// interface ConfigContextData {
//   config: Config;
//   setConfig: (config: Config) => void;
// }

const defaultContextData: Config = defaultConfig;

const StyledContext = React.createContext<Config>(defaultContextData);

// type IContext = {
//   config: Config;
//   colorMode?: COLORMODES;
// };
export const StyledProvider: React.FC<{
  config: Config;
  colorMode?: COLORMODES;
  children?: React.ReactNode;
}> = ({ config, colorMode, children }) => {
  const currentConfig = React.useMemo(() => {
    return platformSpecificSpaceUnits(config, Platform.OS);
  }, [config]);

  const currentColorMode = React.useMemo(() => {
    return colorMode;
  }, [colorMode]);

  React.useEffect(() => {
    set(currentColorMode === 'dark' ? 'dark' : 'light');

    onChange((currentColorMode: string) => {
      // only for web
      if (Platform.OS === 'web') {
        if (currentColorMode === 'dark') {
          document.body.classList.remove(`gs-light`);
        } else {
          document.body.classList.remove(`gs-dark`);
        }
        document.body.classList.add(`gs-${currentColorMode}`);
      }
    });
    if (Platform.OS === 'web') {
      document.body.classList.add(`gs-${get()}`);
    }
  }, [currentColorMode]);

  let contextValue;
  if (Platform.OS === 'web') {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    contextValue = React.useMemo(() => {
      return { config: currentConfig };
    }, [currentConfig]);
  } else {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    contextValue = React.useMemo(() => {
      return { config: currentConfig, colorMode: currentColorMode };
    }, [currentConfig, currentColorMode]);
  }

  return (
    <StyledContext.Provider value={contextValue}>
      {children}
    </StyledContext.Provider>
  );
};

export const useStyled = () => React.useContext(StyledContext);
