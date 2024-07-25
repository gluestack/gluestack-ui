import React from 'react';
type WithStatesProps = {
    className?: string;
    states?: any;
};
export declare const withStates: <T>(Component: React.ComponentType<T>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<T & WithStatesProps> & React.RefAttributes<unknown>>;
export {};
