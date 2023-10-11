import React, { Children, forwardRef } from 'react';

import { Root as AccessibleContainer } from './styled-components';

import { Text } from '../Text';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const ContainerTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleContainer {...resolvedPropForGluestack} ref={ref}>
      {GUIChildren}
    </AccessibleContainer>
  );
});

export type IContainerComponentType<Container> =
  GenericComponentType<Container>;

export const Container = ContainerTemp as IContainerComponentType<
  typeof AccessibleContainer
>;
