import React, { forwardRef } from 'react';
import { Root as AccessibleHeading } from './styled-components';
import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

const HeadingTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleHeading {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleHeading>
  );
});

export type IHeadingComponentType<Heading> = GenericComponentType<Heading>;

export const Heading = HeadingTemp as IHeadingComponentType<
  typeof AccessibleHeading
>;
