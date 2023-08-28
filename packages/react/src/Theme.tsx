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
  const contextValue = {
    theme: name,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
