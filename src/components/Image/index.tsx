import React, { forwardRef } from 'react';
import { Root } from './styled-components';
import { createImage } from '@gluestack-ui/image';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessibleImage = createImage({ Root });

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
