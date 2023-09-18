import React, { Children, cloneElement } from 'react';

import { Root } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';

export const ZStack = ({ children, ...props }: any) => {
  const resolvedPropForGluestack = usePropResolution(props);

  const GuiChildren = Children.map(children, (child) =>
    cloneElement(child, { position: 'absolute' })
  );
  return <Root {...resolvedPropForGluestack}>{GuiChildren}</Root>;
};
