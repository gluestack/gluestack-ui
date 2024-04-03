import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { View } from 'react-native';
import { hstackStyle } from './styles';

type IHStackProps = React.ComponentProps<typeof View> &
  VariantProps<typeof hstackStyle>;

const HStack = React.forwardRef(
  ({ className, space, reversed, ...props }: IHStackProps, ref?: any) => {
    return (
      <View
        className={hstackStyle({ space, reversed, class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

HStack.displayName = 'HStack';

export { HStack };
