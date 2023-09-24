import React, { Children, cloneElement, forwardRef } from 'react';

import { Root as AccessibleZStack } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const ZStackTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);

  const GuiChildren = Children.map(children, (child) =>
    cloneElement(child, { position: 'absolute' })
  );
  return (
    <AccessibleZStack {...resolvedPropForGluestack} ref={ref}>
      {GuiChildren}
    </AccessibleZStack>
  );
});

export type IZStackComponentType<ZStack> = GenericComponentType<ZStack>;

export const ZStack = ZStackTemp as IZStackComponentType<
  typeof AccessibleZStack
>;
