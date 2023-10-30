import { View } from 'react-native';
import * as React from 'react';
import { styled } from './styled';
type Config = any;

export const defaultConfig: { theme?: string } = {
  theme: undefined,
};

const defaultContextData: Config = defaultConfig;
const ThemeContext = React.createContext<Config>(defaultContextData);
// Can be discussed should we provide flex 1 by default or not.
const StyledView = styled(
  View,
  {
    // flex: 1
  },
  { componentName: 'GluestackThemeView' }
);

// @ts-ignore
export const Theme: typeof StyledView = ({ children, name, ...props }) => {
  const contextValue = React.useMemo(() => {
    return {
      theme: name,
    };
  }, [name]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* @ts-ignore */}
      <StyledView dataSet={{ 'theme-id': name }} {...props}>
        {children}
      </StyledView>
    </ThemeContext.Provider>
  );
};
// Theme.displayName = 'Theme';

export const useTheme = () => React.useContext(ThemeContext);
