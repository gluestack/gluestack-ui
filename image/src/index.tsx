import type React from 'react';
import { Image as ImageMain } from './Image';
import type { IImageComponentType } from './types';
export function createImage<ImageProps>({
  Root,
}: {
  Root: React.ComponentType<ImageProps>;
}) {
  const Image = ImageMain(Root) as any;

  Image.displayName = 'Image';

  return Image as IImageComponentType<ImageProps>;
}
