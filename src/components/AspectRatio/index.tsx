import React, { forwardRef } from 'react';

import { Root } from './styled-components';
type IProps = React.ComponentProps<typeof Root>;
type ratio = { ratio: React.ComponentProps<typeof Root>['aspectRatio'] };

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AspectRatioTemp = forwardRef(
  ({ children, ratio, ...props }: IProps & ratio, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <Root aspectRatio={ratio} {...resolvedPropForGluestack} ref={ref}>
        {children}
      </Root>
    );
  }
);

const AspectRatioNew = AspectRatioTemp as any;

export type IAspectRatioComponentType<AspectRatio> =
  GenericComponentType<AspectRatio>;

export const AlertDialog = AspectRatioNew as IAspectRatioComponentType<
  typeof AspectRatioTemp
>;
