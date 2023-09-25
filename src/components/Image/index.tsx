import React, { forwardRef } from 'react';
import { Root as AccessibleImage } from './styled-components';
import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

export const ImageTemp = forwardRef(
  ({ source, alt, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleImage {...resolvedProps} source={source} alt={alt} ref={ref} />
    );
  }
);

export type IImageComponentType<Image> = GenericComponentType<Image>;

export const Image = ImageTemp as IImageComponentType<typeof AccessibleImage>;
