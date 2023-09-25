import { createHStack } from '@gluestack-ui/hstack';
import { Root, Spacer } from './styled-components';
import { usePropResolution } from '../../hooks';
import React, { forwardRef } from 'react';
import { GenericComponentType } from '../../types';

const AccessibleHStack = createHStack({
  Root,
  Spacer,
});

const HStackTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleHStack
      {...resolvedPropForGluestack}
      children={children}
      ref={ref}
    />
  );
});

export type IHStackComponentType<HStack> = GenericComponentType<HStack>;

export const HStack = HStackTemp as IHStackComponentType<
  typeof AccessibleHStack
>;
