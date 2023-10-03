import { createVStack } from '@gluestack-ui/vstack';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';
import { GenericComponentType } from '../../types';

const AccessibleVStack = createVStack({
  Root,
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
