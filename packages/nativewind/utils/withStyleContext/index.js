'use client';
import React from 'react';
import { ParentContext } from '../context';
export { useStyleContext } from '../context';
export const withStyleContext = (Component) => {
  return React.forwardRef(({ context, ...props }, ref) => {
    return React.createElement(
      ParentContext.Provider,
      { value: context },
      React.createElement(Component, { ...props, ref: ref })
    );
  });
};
