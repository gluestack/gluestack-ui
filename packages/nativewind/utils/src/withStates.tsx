import React from 'react';
import { extractDataClassName } from './utils';

type WithStatesProps = {
  className?: string;
  states?: any;
};

export const withStates =
  <T,>(Component: React.ComponentType<T> & WithStatesProps) =>
  ({ states, className, ...props }: React.Component<T> & WithStatesProps) => {
    const classNamesFinal = React.useMemo(() => {
      if (!className) return;
      extractDataClassName(className, states);
    }, [className, states]);

    return <Component className={classNamesFinal} {...(props as any)} />;
  };
