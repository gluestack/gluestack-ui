import React from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { Root } from './styled-components';

export const Text = ({ children, ...props }: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return <Root {...resolvedPropForGluestack}>{children}</Root>;
};
