import type { ImageSourcePropType } from 'react-native';
export interface IImageProps {
  source?: ImageSourcePropType | string;
  alt?: string;
}

export type IImageComponentType<StyledImage> = (
  props: IImageProps & Omit<StyledImage, 'source' | 'alt'>
) => JSX.Element;
