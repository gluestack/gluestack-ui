import React, { Children, forwardRef } from 'react';

import { Root as AccessibleView } from './styled-components';

import { Text } from '../Text';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const ViewTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleView {...resolvedPropForGluestack} ref={ref}>
      {GUIChildren}
    </AccessibleView>
  );
});

const ViewNew = ViewTemp as any;

export type IViewComponentType<View> = GenericComponentType<View>;

export const View = ViewNew as IViewComponentType<typeof AccessibleView>;
