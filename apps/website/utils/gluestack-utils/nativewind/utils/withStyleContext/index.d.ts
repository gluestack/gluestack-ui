import React from 'react';
type WithStyleContextProps = {
  context?: any;
};
export declare const withStyleContext: <T extends React.ComponentType<any>>(
  Component: T,
  scope?: string
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentProps<T>> &
    WithStyleContextProps &
    React.RefAttributes<T>
>;
export declare const useStyleContext: (scope?: string) => any;
export {};
