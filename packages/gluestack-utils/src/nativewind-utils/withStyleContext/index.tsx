'use client';
import React from 'react';
import { ParentContext } from '../context';
import { useParentContext } from '../context';
type WithStyleContextProps = {
  context?: any;
};
export const withStyleContext = <T extends React.ComponentType<any>>(
  Component: T,
  scope: string = 'Global'
) => {
  return React.forwardRef(({ context, ...props }, ref) => {
    let contextValues = {};
    const parentContextValues = useParentContext();
    if (parentContextValues[scope] !== undefined) {
      parentContextValues[scope] = context;
      contextValues = parentContextValues;
    } else {
      contextValues = { ...parentContextValues, [scope]: context };
    }
    return (
      <ParentContext.Provider value={contextValues}>
        <Component {...(props as any)} ref={ref} />
      </ParentContext.Provider>
    );
  }) as React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<T> &
      WithStyleContextProps &
      React.RefAttributes<T>
  >;
};

export const useStyleContext = (scope: string = 'Global') => {
  const parentContextValues = useParentContext();
  return parentContextValues[scope];
};
