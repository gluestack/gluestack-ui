import { Image as ImageMain } from './Image';

export function createImage<StyledImageProps, StyledImageFallbackTextProps>({
  StyledImage,
  StyledImageFallbackText,
}: {
  StyledImage: React.ComponentType<StyledImageProps>;
  StyledImageFallbackText: React.ComponentType<StyledImageFallbackTextProps>;
}) {
  const Image = ImageMain({ StyledImage, StyledImageFallbackText });

  Image.displayName = 'Image';

  return Image;
}
