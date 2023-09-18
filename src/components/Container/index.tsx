import React, { forwardRef } from 'react';

import { Root } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';

export const Container = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <Root {...resolvedPropForGluestack} ref={ref}>
        {children}
      </Root>
    );
  }
);
