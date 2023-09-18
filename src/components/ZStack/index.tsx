import React, { Children, cloneElement, forwardRef } from 'react';

import { Root } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';

type IProps = React.ComponentProps<typeof Root>;

export const ZStack = forwardRef(
  ({ children, ...props }: IProps, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);

    const GuiChildren = Children.map(children, (child) =>
      cloneElement(child, { position: 'absolute' })
    );
    return (
      <Root {...resolvedPropForGluestack} ref={ref}>
        {GuiChildren}
      </Root>
    );
  }
);
