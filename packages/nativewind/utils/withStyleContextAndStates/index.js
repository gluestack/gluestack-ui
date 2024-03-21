'use client';
import React from 'react';
import { extractDataClassName } from '../utils';
import { ParentContext } from '../context';
export { useStyleContext } from '../context';
export const withStyleContextAndStates = (Component) => {
  return React.forwardRef(({ context, className, states, ...props }, ref) => {
    const classNamesFinal = React.useMemo(() => {
      if (!className) return;
      return extractDataClassName(className, states);
    }, [className, states]);
    return React.createElement(
      ParentContext.Provider,
      { value: context },
      React.createElement(Component, {
        className: classNamesFinal,
        ...props,
        ref: ref,
      })
    );
  });
};
