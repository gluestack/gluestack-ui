import React, { forwardRef } from 'react';

import { Root as AccessibleScrollView } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const ScrollViewTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleScrollView {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleScrollView>
  );
});

const ScrollViewNew = ScrollViewTemp as any;

export type IScrollViewComponentType<ScrollView> =
  GenericComponentType<ScrollView>;

export const ScrollView = ScrollViewNew as IScrollViewComponentType<
  typeof AccessibleScrollView
>;
