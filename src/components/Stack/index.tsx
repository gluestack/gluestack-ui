import React, { forwardRef } from 'react';

import { Root } from './styled-components';
type IProps = Omit<React.ComponentProps<typeof Root>, 'direction'>;

import { usePropResolution } from '../../hooks/usePropResolution';

type StackProps = {
  direction?: React.ComponentProps<typeof Root>['flexDirection'];
  space?: React.ComponentProps<typeof Root>['gap'];
};

export const Stack = forwardRef(
  (
    { children, direction, space, ...props }: IProps & StackProps,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <Root
        flexDirection={direction}
        gap={space}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {children}
      </Root>
    );
  }
);
