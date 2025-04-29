'use client';
import React from 'react';
import { extractDataClassName } from '../utils';
import { ParentContext } from '../context';
import { useParentContext } from '../context';

type WithStyleContextProps = {
  context?: any;
  className?: string;
  states?: any;
};

export const withStyleContextAndStates = <T extends React.ComponentType<any>>(
  Component: T,
  scope: string = 'Global'
) => {
  return React.forwardRef(({ context, className, states, ...props }, ref) => {
    let contextValues = {};
    const parentContextValues = useParentContext();
    if (parentContextValues[scope] !== undefined) {
      parentContextValues[scope] = context;
      contextValues = parentContextValues;
    } else {
      contextValues = { ...parentContextValues, [scope]: context };
    }

    const classNamesFinal = React.useMemo(() => {
      if (!className) return;
      return extractDataClassName(className, states);
    }, [className, states]);

    return (
      <ParentContext.Provider value={contextValues}>
        <Component className={classNamesFinal} {...(props as any)} ref={ref} />
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
