import React, { forwardRef } from 'react';

import { Root as AccessibleView } from './styled-components';

import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

const ViewTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleView {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleView>
  );
});

const ViewNew = ViewTemp as any;

export type IViewComponentType<View> = GenericComponentType<View>;

export const View = ViewNew as IViewComponentType<typeof AccessibleView>;
