import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import * as React from 'react';
type Config = any;

export const defaultConfig: { themes: Array<string> } = {
  themes: [],
};

const defaultContextData: Config = defaultConfig;
export const ThemeContext = React.createContext<Config>(defaultContextData);
// Can be discussed should we provide flex 1 by default or not.

export const Theme = ({
  children,
  name,
  ...props
}: ViewProps & {
  name: string;
}) => {
  const { themes } = useTheme();

  const contextValue = React.useMemo(() => {
    return {
      themes: [...themes, name],
    };
  }, [name, themes]);

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

export const useTheme = () => React.useContext(ThemeContext) ?? { themes: [] };
