import { OverlayProvider } from '@react-native-aria/overlays';
import React from 'react';
import { Platform } from 'react-native';
import { keyboardDismissHandlerManager } from '../ReactNativeAria/useKeyboardDismisssable';

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
      <OverlayProvider>{children}</OverlayProvider>
    </UIContext.Provider>
  );
}

export default UIProvider;
