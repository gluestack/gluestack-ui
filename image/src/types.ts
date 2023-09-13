import type { ImageSourcePropType } from 'react-native';
export interface IImageProps {
  source?: ImageSourcePropType;
  src?: string;
  alt?: string;
}
interface InterfaceImageProps extends IImageProps {}

export type IImageComponentType<StyledImage> = (
  props: InterfaceImageProps & Omit<StyledImage, 'src' | 'source' | 'alt'>
) => JSX.Element;
