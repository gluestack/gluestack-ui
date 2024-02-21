import React from 'react';
import { extractDataClassName } from './utils';

export const withStates =
  <T,>(Component: T): T =>
  // @ts-ignore
  ({
    states,
    className,
    ...props
  }: React.Component<T> & { className: string; states: any }): any => {
    const classNamesFinal = React.useMemo(
      () => extractDataClassName(className, states),
      [className, states]
    );

    // @ts-ignore
    return <Component className={classNamesFinal} {...props} />;
  };
