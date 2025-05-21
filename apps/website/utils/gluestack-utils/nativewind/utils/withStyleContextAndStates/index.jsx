'use client';
import React from 'react';
import { extractDataClassName } from '../utils';
import { ParentContext } from '@/utils/gluestack-utils/nativewind/utils/context';
import { useParentContext } from '@/utils/gluestack-utils/nativewind/utils/context';
export const withStyleContextAndStates = (Component, scope = 'Global') => {
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
        <Component className={classNamesFinal} {...props} ref={ref} />
      </ParentContext.Provider>
    );
  });
};
export const useStyleContext = (scope = 'Global') => {
  const parentContextValues = useParentContext();
  return parentContextValues[scope];
};
