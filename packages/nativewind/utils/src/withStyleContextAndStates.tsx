import React from 'react';
import { extractDataClassName } from './utils';
import { ParentContext } from './context';

export const withStyleContextAndStates = <T,>(
  Component: React.ComponentType<T>
): T => {
  // @ts-ignore
  return ({ context, className, states, ...props }: any): any => {
    const classNamesFinal = React.useMemo(
      () => extractDataClassName(className, states),
      [className, states]
    );
    return (
      <ParentContext.Provider value={{ context }}>
        <Component className={classNamesFinal} {...props} />
      </ParentContext.Provider>
    );
  };
};
