import { createVStack } from '@gluestack-ui/vstack';
import { Root, Spacer } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React from 'react';

export const AccessibleVStack = createVStack({
  Root,
  Spacer,
});

export const VStack = ({ children, ...props }: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return <AccessibleVStack {...resolvedPropForGluestack} children={children} />;
};
