import React from 'react';
const ParentContext = React.createContext({});

export const withContext = <T,>(Component: React.ComponentType<T>) => {
  return {
    Component: ({ context, ...props }: any) => {
      return (
        <ParentContext.Provider value={context}>
          <Component {...props} />
        </ParentContext.Provider>
      );
    },
    Context: ParentContext,
  } as {
    Component: React.FC<{ context: any } & T>;
    Context: React.Context<any>;
  };
};
