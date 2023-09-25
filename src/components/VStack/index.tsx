import { createVStack } from '@gluestack-ui/vstack';
import { Root, Spacer } from './styled-components';
import { usePropResolution } from '../../hooks';
import React, { forwardRef } from 'react';
import { GenericComponentType } from '../../types';

const AccessibleVStack = createVStack({
  Root,
  Spacer,
});

const VStackTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleVStack
      {...resolvedPropForGluestack}
      children={children}
      ref={ref}
    />
  );
});

export type IVStackComponentType<VStack> = GenericComponentType<VStack>;

export const VStack = VStackTemp as IVStackComponentType<
  typeof AccessibleVStack
>;
