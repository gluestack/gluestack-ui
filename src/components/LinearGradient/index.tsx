import React, { Children, forwardRef } from 'react';

import { Root as AccessibleLinearGradient } from './styled-components';

import { Text } from '../Text';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const LinearGradientTemp = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const GUIChildren = Children.map(children, (child) => {
      if (typeof child === 'string') return <Text>{child}</Text>;
      return child;
    });
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleLinearGradient {...resolvedPropForGluestack} ref={ref}>
        {GUIChildren}
      </AccessibleLinearGradient>
    );
  }
);

const LinearGradientNew = LinearGradientTemp as any;

export type ILinearGradientComponentType<LinearGradient> =
  GenericComponentType<LinearGradient>;

export const LinearGradient = LinearGradientNew as ILinearGradientComponentType<
  typeof AccessibleLinearGradient
>;
