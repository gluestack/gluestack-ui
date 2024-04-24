'use client';
import React from 'react';
import { ParentContext } from '../context';
import { useParentContext } from '../context';
export const withStyleContext = (Component, scope = 'Global') => {
    return React.forwardRef(({ context, ...props }, ref) => {
        let contextValues = {};
        const parentContextValues = useParentContext();
        if (parentContextValues[scope] !== undefined) {
            parentContextValues[scope] = context;
            contextValues = parentContextValues;
        }
        else {
            contextValues = { ...parentContextValues, [scope]: context };
        }
        return (React.createElement(ParentContext.Provider, { value: contextValues },
            React.createElement(Component, { ...props, ref: ref })));
    });
};
export const useStyleContext = (scope = 'Global') => {
    const parentContextValues = useParentContext();
    return parentContextValues[scope];
};
