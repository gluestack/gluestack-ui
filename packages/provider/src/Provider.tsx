import React from 'react';
import { Platform } from 'react-native';
import { keyboardDismissHandlerManager } from '@gluestack-ui/react-native-aria';

export const UIContext = React.createContext<any>({});

export const UIProvider = ({ children, components, ...props }: any) => {
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
    <UIContext.Provider value={components} {...props}>
      {children}
    </UIContext.Provider>
  );
};

export const Provider = ({ StyledProvider }: any) => {
  return ({ children, components, config, ...props }: any) => {
    return (
      <UIProvider components={components}>
        <StyledProvider config={config} {...props}>
          {children}
        </StyledProvider>
      </UIProvider>
    );
  };
};
