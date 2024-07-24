import React from 'react';
type WithStyleContextProps = {
  context?: any;
  className?: string;
  states?: any;
};
export declare const withStyleContextAndStates: <
  T extends React.ComponentType<any>
>(
  Component: T,
  scope?: string
) => React.ForwardRefExoticComponent<
  React.ComponentProps<T> & WithStyleContextProps
>;
export declare const useStyleContext: (scope?: string) => any;
export {};
