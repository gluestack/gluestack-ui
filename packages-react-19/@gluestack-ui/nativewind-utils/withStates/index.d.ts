import React from 'react';
type WithStatesProps = {
  className?: string;
  states?: any;
};
export declare const withStates: <T extends React.ComponentType<any>>(
  Component: T
) => React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<T> & WithStatesProps & React.RefAttributes<T>
>;
export {};
