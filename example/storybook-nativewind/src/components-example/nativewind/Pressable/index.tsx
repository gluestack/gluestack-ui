import { Pressable as RNPressable } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils';
import React from 'react';

const pressableStyle = tva({
  base: 'data-[focus-visible=true]:outline-2 outline-primary-700 outline-solid',
});

export const Pressable = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNPressable
        {...props}
        ref={ref}
        className={pressableStyle({
          class: className,
        })}
      />
    );
  }
);
