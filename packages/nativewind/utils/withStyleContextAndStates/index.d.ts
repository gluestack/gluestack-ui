import React from 'react';
export { useStyleContext } from '../context';
type WithStyleContextProps = {
  context?: any;
  className?: string;
  states?: any;
};
export declare const withStyleContextAndStates: <T>(
  Component: React.ComponentType<T & WithStyleContextProps>
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<T & WithStyleContextProps> &
    React.RefAttributes<unknown>
>;
