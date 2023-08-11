import React from 'react';
import { Platform } from 'react-native';
import { keyboardDismissHandlerManager } from '@react-native-aria/interactions';

export const GluestackUIContext = React.createContext<any>({});

export const GluestackUIContextProvider = ({ children, ...props }: any) => {
  React.useEffect(() => {
    let escapeKeyListener: any = null;

    if (Platform.OS === 'web') {
      escapeKeyListener = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          if (keyboardDismissHandlerManager.length() > 0) {
            const lastHandler: any = keyboardDismissHandlerManager.pop();
            lastHandler();
          }
        }
      };
      document.addEventListener('keydown', escapeKeyListener);
    }

    return () => {
      if (Platform.OS === 'web') {
        document.removeEventListener('keydown', escapeKeyListener);
      }
    };
  }, []);
  return (
    <GluestackUIContext.Provider {...props}>
      {children}
    </GluestackUIContext.Provider>
  );
};

export const Provider = ({ StyledProvider }: any) => {
  return ({ children, components, config, ...props }: any) => {
    return (
      <GluestackUIContextProvider components={components}>
        <StyledProvider config={config} {...props}>
          {children}
        </StyledProvider>
      </GluestackUIContextProvider>
    );
  };
};
