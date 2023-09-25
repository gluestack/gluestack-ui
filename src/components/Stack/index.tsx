import React, { forwardRef } from 'react';
import { Root as AccessibleStack } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

type IProps = Omit<React.ComponentProps<typeof AccessibleStack>, 'direction'>;

type StackProps = {
  direction?: React.ComponentProps<typeof AccessibleStack>['flexDirection'];
  space?: React.ComponentProps<typeof AccessibleStack>['gap'];
};

const StackTemp = forwardRef(
  ({ children, direction, ...props }: IProps & StackProps, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleStack
        flexDirection={direction}
        gap={resolvedPropForGluestack.space}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {children}
      </AccessibleStack>
    );
  }
);

export type IStackComponentType<Stack> = GenericComponentType<Stack>;

export const Stack = StackTemp as IStackComponentType<typeof StackTemp>;
