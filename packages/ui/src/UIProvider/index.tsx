import React from 'react';

export const UIContext = React.createContext<any>({});

function UIProvider({ children, components }: any) {
  return <UIContext.Provider value={components}>{children}</UIContext.Provider>;
}

export default UIProvider;
