import React from 'react';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';

export const Heading = ({ children, ...props }: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return <Root {...resolvedPropForGluestack}>{children}</Root>;
};
