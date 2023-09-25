import React, { forwardRef } from 'react';

import { Root as AccessibleFlatList } from './styled-components';

import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

const FlatListTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleFlatList {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleFlatList>
  );
});

const FlatListNew = FlatListTemp as any;

export type IFlatListComponentType<FlatList> = GenericComponentType<FlatList>;

export const FlatList = FlatListNew as IFlatListComponentType<
  typeof AccessibleFlatList
>;
