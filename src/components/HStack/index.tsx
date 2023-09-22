import { createHStack } from '@gluestack-ui/hstack';
import { Root, Spacer } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';

const AccessibleHStack = createHStack({
  Root,
  Spacer,
});

type IProps = React.ComponentProps<typeof AccessibleHStack>;

export const HStack = forwardRef(
  ({ children, ...props }: IProps, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleHStack
        {...resolvedPropForGluestack}
        children={children}
        ref={ref}
      />
    );
  }
);
