'use client';
import React from 'react';
import { createImage } from '@gluestack-ui/image';
import { Image as RNImage } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import { Platform } from 'react-native';

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
cssInterop(UIImage, { className: 'style' });

const Image = ({ size = 'md', className, ...props }: any) => {
  return (
    <UIImage
      className={imageStyle({ size, class: className })}
      {...props}
      style={
        Platform.OS === 'web'
          ? { height: 'revert-layer', width: 'revert-layer' }
          : undefined
      }
    />
  );
};

Image.displayName = 'Image';

export { Image };
