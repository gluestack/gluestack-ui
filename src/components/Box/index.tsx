import React, { Children, forwardRef } from 'react';

import { Root as AccessibleBox } from './styled-components';

import { Text } from '../Text';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const BoxTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleBox {...resolvedPropForGluestack} ref={ref}>
      {GUIChildren}
    </AccessibleBox>
  );
});

const BoxNew = BoxTemp as any;

export const Box = BoxNew as IBoxComponentType<typeof AccessibleBox>;

export type IBoxComponentType<Box> = GenericComponentType<Box>;
