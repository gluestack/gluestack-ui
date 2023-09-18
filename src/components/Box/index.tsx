import React, { forwardRef } from 'react';

import { Root } from './styled-components';
type IProps = React.ComponentProps<typeof Root>;

import { usePropResolution } from '../../hooks/usePropResolution';

export const Box = forwardRef(({ children, ...props }: IProps, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <Root {...resolvedPropForGluestack} ref={ref}>
      {children}
    </Root>
  );
});
