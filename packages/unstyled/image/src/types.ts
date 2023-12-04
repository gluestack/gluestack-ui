import type { ImageSourcePropType } from 'react-native';
export interface IImageProps {
  source?: ImageSourcePropType | string;
  alt?: string;
}

export type IImageComponentType<StyledImage> = React.ForwardRefExoticComponent<
  IImageProps & Omit<StyledImage, 'source' | 'alt'>
>;
