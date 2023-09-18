import React, { forwardRef } from 'react';

import { Root } from './styled-components';
type IProps = React.ComponentProps<typeof Root>;

import { usePropResolution } from '../../hooks/usePropResolution';

type FlexProps = {
  direction?: React.ComponentProps<typeof Root>['flexDirection'];
  wrap?: React.ComponentProps<typeof Root>['flexWrap'];
  align?: React.ComponentProps<typeof Root>['alignItems'];
  justify?: React.ComponentProps<typeof Root>['justifyContent'];
};

export const Flex = forwardRef(
  (
    { children, direction, wrap, align, justify, ...props }: IProps & FlexProps,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <Root
        flexDirection={direction}
        flexWrap={wrap}
        alignItems={align}
        justifyContent={justify}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {children}
      </Root>
    );
  }
);
