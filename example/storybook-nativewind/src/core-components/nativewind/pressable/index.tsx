import { Pressable as RNPressable } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils';
import React from 'react';

const pressableStyle = tva({
  base: 'data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-primary-700 data-[focus-visible=true]:ring-2',
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
