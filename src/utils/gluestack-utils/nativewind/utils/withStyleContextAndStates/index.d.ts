import React from 'react';
type WithStyleContextProps = {
  context?: any;
  className?: string;
  states?: any;
};
export declare const withStyleContextAndStates: <
  T extends React.ComponentType<any>,
>(
  Component: T,
  scope?: string
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentProps<T>> &
    WithStyleContextProps &
    React.RefAttributes<T>
>;
export declare const useStyleContext: (scope?: string) => any;
export {};
