import React, { forwardRef } from 'react';

import { Root as AccessibleAspectRatio } from './styled-components';

type IRatio = {
  ratio: React.ComponentProps<typeof AccessibleAspectRatio>['aspectRatio'];
};

import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

const AspectRatioTemp = forwardRef(
  ({ children, ratio, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleAspectRatio
        aspectRatio={ratio}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {children}
      </AccessibleAspectRatio>
    );
  }
);

export type IAspectRatioComponentType<AspectRatio> = GenericComponentType<
  AspectRatio,
  IRatio
>;

export const AspectRatio = AspectRatioTemp as IAspectRatioComponentType<
  typeof AccessibleAspectRatio
>;
