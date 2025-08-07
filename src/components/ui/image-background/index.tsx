'use client';
import { ImageBackground as RNImageBackground } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';

const imageBackgroundStyle = tva({});

const ImageBackground = React.forwardRef<
  React.ComponentRef<typeof RNImageBackground>,
  React.ComponentProps<typeof RNImageBackground>
>(function ImageBackground({ className, ...props }, ref) {
  return (
    <RNImageBackground
      className={imageBackgroundStyle({
        class: className,
      })}
      {...props}
      ref={ref}
    />
  );
});

ImageBackground.displayName = 'ImageBackground';

export { ImageBackground };
