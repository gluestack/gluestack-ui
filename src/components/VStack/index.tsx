import { createVStack } from '@gluestack-ui/vstack';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { Children, forwardRef } from 'react';
import { GenericComponentType } from '../../types';
import { Text } from '../Text';

const AccessibleVStack = createVStack({
  Root,
});

const VStackTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleVStack
      {...resolvedPropForGluestack}
      children={GUIChildren}
      ref={ref}
    />
  );
});

export type IVStackComponentType<VStack> = GenericComponentType<VStack>;

export const VStack = VStackTemp as IVStackComponentType<
  typeof AccessibleVStack
>;
