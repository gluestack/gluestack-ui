import React, { forwardRef } from 'react';

import { Root as AccessibleContainer } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const ContainerTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleContainer {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleContainer>
  );
});

export type IContainerComponentType<Container> =
  GenericComponentType<Container>;

export const Container = ContainerTemp as IContainerComponentType<
  typeof AccessibleContainer
>;
