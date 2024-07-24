'use client';
import React from 'react';
import { extractDataClassName } from '../utils';

type WithStatesProps = {
  className?: string;
  states?: any;
};

export const withStates = <T extends React.ComponentType<any>>(Component: T) =>
  React.forwardRef(
    ({ states, className, ...props }: T & WithStatesProps, ref?: any) => {
      const classNamesFinal = React.useMemo(() => {
        if (!className) return;
        return extractDataClassName(className, states);
      }, [className, states]);

      return (
        <Component className={classNamesFinal} {...(props as any)} ref={ref} />
      );
    }
  ) as React.ForwardRefExoticComponent<
    React.ComponentProps<T> & WithStatesProps & React.RefAttributes<T>
  >;
