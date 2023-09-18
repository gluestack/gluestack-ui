import React, { forwardRef } from 'react';

import { Root } from './styled-components';
type IProps = React.ComponentProps<typeof Root>;
type ratio = { ratio: React.ComponentProps<typeof Root>['aspectRatio'] };

import { usePropResolution } from '../../hooks/usePropResolution';

export const AspectRatio = forwardRef(
  ({ children, ratio, ...props }: IProps & ratio, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <Root aspectRatio={ratio} {...resolvedPropForGluestack} ref={ref}>
        {children}
      </Root>
    );
  }
);
