import { Image } from './Image';

export const createImage = ({ StyledImage, StyledImageFallbackText }: any) => {
  const ImageTemp = Image({ StyledImage, StyledImageFallbackText }) as any;

  return ImageTemp;
};
