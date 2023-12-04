import React from 'react';
import { Platform } from 'react-native';
import { keyboardDismissHandlerManager } from '@react-native-aria/interactions';

export const Provider = ({ StyledProvider }: any) => {
  const ProviderImpl: React.FC<any> = ({ children, ...props }) => {
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
    return <StyledProvider {...props}>{children}</StyledProvider>;
  };
  return ProviderImpl;
};
