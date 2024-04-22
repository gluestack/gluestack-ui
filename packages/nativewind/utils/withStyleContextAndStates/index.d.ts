import React from 'react';
type WithStyleContextProps = {
    context?: any;
    className?: string;
    states?: any;
};
export declare const withStyleContextAndStates: <T>(Component: React.ComponentType<T & WithStyleContextProps>, scope?: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<T & WithStyleContextProps> & React.RefAttributes<unknown>>;
export declare const useStyleContext: (scope?: string) => any;
export {};
