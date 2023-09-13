import type { ImageSourcePropType } from 'react-native';
export interface IImageProps {
  source?: ImageSourcePropType;
  src?: string;
  alt?: string;
}

export type IImageComponentType<StyledImage> = (
  props: IImageProps & Omit<StyledImage, 'src' | 'source' | 'alt'>
) => JSX.Element;
