import React, { Children, forwardRef } from 'react';
import { Root as AccessibleStack } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';
import { Text } from '../Text';

type IProps = Omit<React.ComponentProps<typeof AccessibleStack>, 'direction'>;

type StackProps = {
  direction?: React.ComponentProps<typeof AccessibleStack>['flexDirection'];
  space?: React.ComponentProps<typeof AccessibleStack>['gap'];
};

const StackTemp = forwardRef(
  ({ children, direction, ...props }: IProps & StackProps, ref?: any) => {
    const GUIChildren = Children.map(children, (child) => {
      if (typeof child === 'string') return <Text>{child}</Text>;
      return child;
    });
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleStack
        flexDirection={direction}
        gap={resolvedPropForGluestack.space}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {GUIChildren}
      </AccessibleStack>
    );
  }
);

export type IStackComponentType<Stack> = GenericComponentType<Stack>;

export const Stack = StackTemp as IStackComponentType<typeof StackTemp>;
