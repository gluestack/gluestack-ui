import type { ImageSourcePropType } from 'react-native';
export interface IImageProps {
  source?: ImageSourcePropType | string;
  alt?: string;
}

export type IImageComponentType<StyledImage> = React.ForwardRefExoticComponent<
  (props: IImageProps & Omit<StyledImage, 'source' | 'alt'>) => JSX.Element
>;
