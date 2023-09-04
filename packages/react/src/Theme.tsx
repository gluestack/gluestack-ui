import { View } from 'react-native';
import * as React from 'react';
type Config = any;

export const defaultConfig: { theme?: string } = {
  theme: undefined,
};

const defaultContextData: Config = defaultConfig;
const ThemeContext = React.createContext<Config>(defaultContextData);

export const Theme: React.FC<{
  children?: React.ReactNode;
  name?: any;
}> = ({ name, children }) => {
  const contextValue = React.useMemo(() => {
    return {
      theme: name,
    };
  }, [name]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* @ts-ignore */}
      <View dataSet={{ 'theme-id': name }}>{children}</View>
    </ThemeContext.Provider>
  );
};
// Theme.displayName = 'Theme';

export const useTheme = () => React.useContext(ThemeContext);
