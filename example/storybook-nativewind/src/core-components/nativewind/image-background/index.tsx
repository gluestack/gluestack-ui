'use client';
import { ImageBackground as RNImageBackground } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
export const ImageBackground = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNImageBackground
        className={tva({ base: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
