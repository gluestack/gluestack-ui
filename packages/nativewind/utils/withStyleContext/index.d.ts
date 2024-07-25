import React from 'react';
type WithStyleContextProps = {
    context?: any;
};
export declare const withStyleContext: <T>(Component: React.ComponentType<T & WithStyleContextProps>, scope?: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<T & WithStyleContextProps> & React.RefAttributes<unknown>>;
export declare const useStyleContext: (scope?: string) => any;
export {};
