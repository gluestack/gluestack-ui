import { createHStack } from '@gluestack-ui/hstack';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';
import { GenericComponentType } from '../../types';

const AccessibleHStack = createHStack({
  Root,
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
