import React, { createContext } from 'react';
import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';
import { config as defaultConfig } from '../gluestack-ui.config';
import { convertTheme } from '../../utils/extendTheme';
import { deepMerge, platformSpecificSpaceUnits } from '../../utils';

const GluestackUIStyledProvider = createProvider({ StyledProvider });

export const HooksContext = createContext({});

const GluestackUIProvider = ({ children, ...props }: any) => {
  return (
    <GluestackUIStyledProvider {...props}>
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIStyledProvider>
  );
};

const NativeBaseProvider = ({
  children,
  config = {},
  theme = {},
  colorMode = 'light',
  ...props
}: any) => {
  const _enableRem = config?.enableRem ?? true;
  // const [colorMode, setColorMode] = useState(useColorMode());

  const gluestackCompatibleTheme = convertTheme(theme);
  const mergedTheme = deepMerge(defaultConfig.theme, gluestackCompatibleTheme);
  const newTheme = React.useMemo(() => {
    if (_enableRem) {
      return platformSpecificSpaceUnits(mergedTheme);
    }
    return mergedTheme;
  }, [_enableRem, mergedTheme]);

  return (
    <HooksContext.Provider
      value={{
        colorMode,
        config: config?.dependencies ? config.dependencies : {},
        // newTheme,
      }}
    >
      <GluestackUIProvider
        colorMode={colorMode}
        config={
          theme ? deepMerge(newTheme, theme) : deepMerge(newTheme, mergedTheme)
        }
        {...props}
      >
        {children}
      </GluestackUIProvider>
    </HooksContext.Provider>
  );
};

export { GluestackUIProvider, GluestackUIStyledProvider, NativeBaseProvider };
