'use client';
import React from 'react';
import { extractDataClassName } from '../utils';
export const withStates = (Component) => React.forwardRef(({ states, className, ...props }, ref) => {
    const classNamesFinal = React.useMemo(() => {
        if (!className)
            return;
        return extractDataClassName(className, states);
    }, [className, states]);
    return (React.createElement(Component, { className: classNamesFinal, ...props, ref: ref }));
});
