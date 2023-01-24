import { OverlayProvider } from '@react-native-aria/overlays';
import React from 'react';
import { Platform } from 'react-native';
// @ts-ignore
import { ToastProvider } from '@universa11y/toast';
import { keyboardDismissHandlerManager } from '@universa11y/react-native-aria';

export const UIContext = React.createContext<any>({});

function UIProvider({ children, components }: any) {
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
    <UIContext.Provider value={components}>
      <OverlayProvider>
        <ToastProvider>{children} </ToastProvider>
      </OverlayProvider>
    </UIContext.Provider>
  );
}

export default UIProvider;
