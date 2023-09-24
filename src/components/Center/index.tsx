import React, { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { Root as AccessibleCenter } from './styled-components';
import { GenericComponentType } from '../../types';

const CenterTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleCenter {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleCenter>
  );
});

export type ICenterComponentType<Center> = GenericComponentType<Center>;

export const Center = CenterTemp as ICenterComponentType<
  typeof AccessibleCenter
>;
