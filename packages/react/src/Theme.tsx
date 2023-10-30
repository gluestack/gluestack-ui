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

export const Theme = ({
  children,
  name,
  ...props
}: ViewProps & {
  name: string;
}) => {
  const contextValue = React.useMemo(() => {
    return {
      theme: name,
    };
  }, [name]);

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

export const useTheme = () => React.useContext(ThemeContext);
