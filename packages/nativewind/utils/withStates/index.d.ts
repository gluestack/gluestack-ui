import React from 'react';
export { useStyleContext } from '../context';
type WithStatesProps = {
  className?: string;
  states?: any;
};
export declare const withStates: <T>(
  Component: React.ComponentType<T>
) => React.ForwardRefExoticComponent<
  React.PropsWithoutRef<T & WithStatesProps> & React.RefAttributes<unknown>
>;
