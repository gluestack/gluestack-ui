import React from 'react';
import { extractDataClassName } from './utils';
import { ParentContext } from './context';

type WithStyleContextProps = {
  context: any;
  className?: string;
  states?: any;
};

export const withStyleContextAndStates = <T,>(
  Component: React.ComponentType<T & WithStyleContextProps>
) => {
  return ({
    context,
    className,
    states,
    ...props
  }: T & WithStyleContextProps) => {
    const classNamesFinal = React.useMemo(() => {
      if (!className) return;
      return extractDataClassName(className, states);
    }, [className, states]);
    return (
      <ParentContext.Provider value={context}>
        <Component className={classNamesFinal} {...(props as any)} />
      </ParentContext.Provider>
    );
  };
};
