import React from 'react';
import type { ImageSourcePropType } from 'react-native';
export interface IImageProps {
  source?: ImageSourcePropType | string;
  alt?: string;
}

export type IImageComponentType<StyledImage> = React.ForwardRefExoticComponent<
  IImageProps &
    InnerForwardRefExoticComponent<Omit<StyledImage, 'source' | 'alt'>>
>;

type InnerForwardRefExoticComponent<T> = React.PropsWithoutRef<T> &
  React.RefAttributes<T>;
