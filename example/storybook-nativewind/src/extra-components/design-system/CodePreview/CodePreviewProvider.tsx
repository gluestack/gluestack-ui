import React, { createContext } from 'react';

export const CodePreviewContext = createContext<any>({});

export const CodePreviewProvider = ({ children, ...props }: any) => {
  return (
    <CodePreviewContext.Provider value={{ ...props }}>
      {children}
    </CodePreviewContext.Provider>
  );
};
