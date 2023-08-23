import { createHStack } from '@gluestack-ui/hstack';
import { Root, Spacer } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React from 'react';

export const AccessibleHStack = createHStack({
  Root,
  Spacer,
});

export const HStack = ({ children, ...props }: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return <AccessibleHStack {...resolvedPropForGluestack} children={children} />;
};
