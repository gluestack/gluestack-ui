import React from 'react';
import { ParentContext } from './context';

export const withStyleContext = <T,>(Component: React.ComponentType<T>) => {
  return ({ context, ...props }: any): any => {
    return (
      <ParentContext.Provider value={context}>
        <Component {...props} />
      </ParentContext.Provider>
    );
  };
};
