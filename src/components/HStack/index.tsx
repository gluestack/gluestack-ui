import { createHStack } from '@gluestack-ui/hstack';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { Children, forwardRef } from 'react';
import { Text } from '../Text';
import { GenericComponentType } from '../../types';

const AccessibleHStack = createHStack({
  Root,
});

const HStackTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleHStack
      {...resolvedPropForGluestack}
      children={GUIChildren}
      ref={ref}
    />
  );
});

export type IHStackComponentType<HStack> = GenericComponentType<HStack>;

export const HStack = HStackTemp as IHStackComponentType<
  typeof AccessibleHStack
>;
