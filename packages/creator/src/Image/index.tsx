import { Image as ImageMain } from './Image';

export const createImage = ({ StyledImage, StyledImageFallbackText }: any) => {
  const Image = ImageMain({ StyledImage, StyledImageFallbackText }) as any;

  Image.displayName = 'Image';

  return Image;
};
