import React, { forwardRef } from 'react';

import { Root as AccessibleFlex } from './styled-components';

import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

type IFlexProps = {
  direction?: React.ComponentProps<typeof AccessibleFlex>['flexDirection'];
  wrap?: React.ComponentProps<typeof AccessibleFlex>['flexWrap'];
  align?: React.ComponentProps<typeof AccessibleFlex>['alignItems'];
  justify?: React.ComponentProps<typeof AccessibleFlex>['justifyContent'];
};

const FlexTemp = forwardRef(
  ({ children, direction, wrap, align, justify, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleFlex
        flexDirection={direction}
        flexWrap={wrap}
        alignItems={align}
        justifyContent={justify}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {children}
      </AccessibleFlex>
    );
  }
);

export type IFlexComponentType<Flex> = GenericComponentType<Flex, IFlexProps>;

export const Flex = FlexTemp as IFlexComponentType<typeof AccessibleFlex>;
