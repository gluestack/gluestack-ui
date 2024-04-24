'use client';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
//@ts-ignore
import { LinearGradient as RNLinearGradient } from 'react-native-linear-gradient';
import { cssInterop } from 'nativewind';

cssInterop(RNLinearGradient, {
  className: 'style',
});

const linearGradientStyle = tva({
  base: '',
});

export const LinearGradient = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNLinearGradient
        {...props}
        className={linearGradientStyle({ class: className })}
        ref={ref}
      />
    );
  }
);
