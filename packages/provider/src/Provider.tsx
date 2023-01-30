/* eslint-disable react-hooks/rules-of-hooks */
import { OverlayProvider } from '@universa11y/overlay';
import React from 'react';
import { Platform } from 'react-native';
import { ToastProvider } from '@universa11y/toast';
import { keyboardDismissHandlerManager } from '@universa11y/react-native-aria';

export const UIContext = React.createContext<any>({});

export const Provider = ({ StyledProvider }: any) => {
  return ({ children, components, config }: any) => {
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
      <StyledProvider config={config}>
        <UIContext.Provider value={components}>
          <OverlayProvider>
            <ToastProvider>{children}</ToastProvider>
          </OverlayProvider>
        </UIContext.Provider>
      </StyledProvider>
    );
  };
};
