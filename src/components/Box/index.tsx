import React, { forwardRef } from 'react';

import { Root } from './styled-components';
type IProps = React.ComponentProps<typeof Root>;

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const BoxTemp = forwardRef(({ children, ...props }: IProps, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <Root {...resolvedPropForGluestack} ref={ref}>
      {children}
    </Root>
  );
});

const BoxNew = BoxTemp as any;

export type IBoxComponentType<Box> = GenericComponentType<Box>;

export const Box = BoxNew as IBoxComponentType<typeof BoxTemp>;
