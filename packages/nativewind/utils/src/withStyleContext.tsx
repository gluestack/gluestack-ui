import React from 'react';
import { ParentContext } from './context';

type WithStyleContextProps = {
  context: any;
};
export const withStyleContext = <T,>(
  Component: React.ComponentType<T & WithStyleContextProps>
) => {
  return ({ context, ...props }: T & WithStyleContextProps) => {
    return (
      <ParentContext.Provider value={context}>
        <Component {...(props as any)} />
      </ParentContext.Provider>
    );
  };
};
