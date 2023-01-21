import { Image as ImageMain } from './Image';

export const createImage = ({ Root, FallbackText }: any) => {
  const Image = ImageMain({ Root, FallbackText });
  Image.displayName = 'Image';
  return Image;
};
