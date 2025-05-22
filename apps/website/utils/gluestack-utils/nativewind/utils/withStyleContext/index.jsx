'use client';
import React from 'react';
import { ParentContext } from '@/utils/gluestack-utils/nativewind/utils/context';
import { useParentContext } from '@/utils/gluestack-utils/nativewind/utils/context';
export const withStyleContext = (Component, scope = 'Global') => {
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
        <Component {...props} ref={ref} />
      </ParentContext.Provider>
    );
  });
};
export const useStyleContext = (scope = 'Global') => {
  const parentContextValues = useParentContext();
  return parentContextValues[scope];
};
