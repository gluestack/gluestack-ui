import React from 'react';
export { useStyleContext } from '../context';
type WithStyleContextProps = {
  context?: any;
};
export declare const withStyleContext: <T>(
  Component: React.ComponentType<T & WithStyleContextProps>
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<T & WithStyleContextProps> &
    React.RefAttributes<unknown>
>;
