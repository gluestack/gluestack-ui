import { Pressable as RNPressable } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import React from 'react';
import { createPressable } from '@gluestack-ui/pressable';

export const UIPressable = createPressable({ Root: RNPressable });

const pressableStyle = tva({
  base: 'data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-primary-700 data-[focus-visible=true]:web:ring-2',
});

cssInterop(UIPressable, { className: 'style' });

export const Pressable = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <UIPressable
        {...props}
        ref={ref}
        className={pressableStyle({
          class: className,
        })}
      />
    );
  }
);
