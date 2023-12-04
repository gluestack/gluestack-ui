import React, { Children, cloneElement, forwardRef } from 'react';

import { Root as AccessibleZStack } from './styled-components';

import { Text } from '../Text';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const ZStackTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  const resolvedPropForGluestack = usePropResolution(props);

  const ZStackChildren = Children.map(GUIChildren, (child) =>
    cloneElement(child, { position: 'absolute' })
  );
  return (
    <AccessibleZStack {...resolvedPropForGluestack} ref={ref}>
      {ZStackChildren}
    </AccessibleZStack>
  );
});

export type IZStackComponentType<ZStack> = GenericComponentType<ZStack>;

export const ZStack = ZStackTemp as IZStackComponentType<
  typeof AccessibleZStack
>;
