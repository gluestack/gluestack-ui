'use client';
import { View } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';

// TODO: Implement LinearGradient
export const LinearGradient = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    // @ts-ignore
    return <View {...props} className={tva({ base: className })} ref={ref} />;
  }
);
