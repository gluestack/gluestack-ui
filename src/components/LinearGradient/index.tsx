import React, { forwardRef } from 'react';

import { Root as AccessibleLinearGradient } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const LinearGradientTemp = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleLinearGradient {...resolvedPropForGluestack} ref={ref}>
        {children}
      </AccessibleLinearGradient>
    );
  }
);

const LinearGradientNew = LinearGradientTemp as any;

export type ILinearGradientComponentType<LinearGradient> =
  GenericComponentType<LinearGradient>;

export const LinearGradient = LinearGradientNew as GenericComponentType<
  typeof AccessibleLinearGradient
>;
