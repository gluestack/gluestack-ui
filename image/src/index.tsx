import type React from 'react';
import { Image as ImageMain } from './Image';
import type { IImageComponentType } from './types';
export function createImage<StyledImage>({
  Root,
}: {
  Root: React.ComponentType<StyledImage>;
}) {
  const Image = ImageMain(Root) as any;

  Image.displayName = 'Image';

  return Image as IImageComponentType<StyledImage>;
}
