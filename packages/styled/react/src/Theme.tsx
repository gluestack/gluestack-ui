import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import * as React from 'react';
type Config = any;

export const defaultConfig: { theme?: string } = {
  theme: undefined,
};

const defaultContextData: Config = defaultConfig;
const ThemeContext = React.createContext<Config>(defaultContextData);
// Can be discussed should we provide flex 1 by default or not.
export const useTheme = () => React.useContext(ThemeContext);

export const Theme = ({
  children,
  name,
  ...props
}: ViewProps & {
  name: string;
}) => {
  const parentTheme = useTheme();
  const contextValue = React.useMemo(() => {
    return {
      activeTheme: parentTheme.activeTheme
        ? parentTheme.activeTheme + '.' + name
        : name,
      theme: name,
    };
  }, [name, parentTheme.activeTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* @ts-ignore */}
      <View dataSet={{ 'theme-id': name }} {...props}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
// Theme.displayName = 'Theme';
