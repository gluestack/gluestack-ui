import { createVStack } from '@gluestack-ui/vstack';
import { Root, Spacer } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';

export const AccessibleVStack = createVStack({
  Root,
  Spacer,
});

type IProps = React.ComponentProps<typeof AccessibleVStack>;

export const VStack = forwardRef(
  ({ children, ...props }: IProps, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleVStack
        {...resolvedPropForGluestack}
        children={children}
        ref={ref}
      />
    );
  }
);
