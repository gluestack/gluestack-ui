import React, { useContext } from 'react';
const ParentContext = React.createContext({});

export const useStyleContext = () => {
  return useContext(ParentContext) as any;
};

export const withStyleContext = <T,>(Component: React.ComponentType<T>) => {
  return ({ context, ...props }: any): any => {
    return (
      <ParentContext.Provider value={context}>
        <Component {...props} />
      </ParentContext.Provider>
    );
  };
};
