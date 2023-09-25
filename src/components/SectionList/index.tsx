import React, { forwardRef } from 'react';

import { Root as AccessibleSectionList } from './styled-components';

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const SectionListTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleSectionList {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleSectionList>
  );
});

const SectionListNew = SectionListTemp as any;

export type ISectionListComponentType<SectionList> =
  GenericComponentType<SectionList>;

export const SectionList = SectionListNew as ISectionListComponentType<
  typeof AccessibleSectionList
>;
