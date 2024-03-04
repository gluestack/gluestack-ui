import React from 'react';
import { ParentContext } from './context';

type WithStyleContextProps = {
  context: any;
};
export const withStyleContext = <T,>(
  Component: React.ComponentType<T & WithStyleContextProps>
) => {
  return React.forwardRef(
    ({ context, ...props }: T & WithStyleContextProps, ref?: any) => {
      return (
        <ParentContext.Provider value={context}>
          <Component {...(props as any)} ref={ref} />
        </ParentContext.Provider>
      );
    }
  );
};
