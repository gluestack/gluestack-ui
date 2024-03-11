import React from 'react';
import { createImage } from '@gluestack-ui/image';
import { Image as RNImage } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils';
import { cssInterop } from 'nativewind';

const imageStyle = tva({
  base: 'max-w-full',
  variants: {
    size: {
      '2xs': 'h-6 w-6',
      'xs': 'h-10 w-10',
      'sm': 'h-16 w-16',
      'md': 'h-20 w-20',
      'lg': 'h-24 w-24',
      'xl': 'h-32 w-32',
      '2xl': 'h-64 w-64',
      'full': 'h-full w-full',
    },
  },
});

export const UIImage = createImage({ Root: RNImage });

const Image = ({ size = 'md', className, ...props }: any) => {
  return (
    <UIImage className={imageStyle({ size, class: className })} {...props} />
  );
};

cssInterop(UIImage, { className: 'style' });
Image.displayName = 'Image';

export { Image };
