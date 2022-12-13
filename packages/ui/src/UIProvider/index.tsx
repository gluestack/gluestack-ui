import { OverlayProvider } from '@react-native-aria/overlays';
import React from 'react';

export const UIContext = React.createContext<any>({});

function UIProvider({ children, components }: any) {
  return (
    <UIContext.Provider value={components}>
      <OverlayProvider>{children}</OverlayProvider>
    </UIContext.Provider>
  );
}

export default UIProvider;
