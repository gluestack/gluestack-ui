import React from 'react';
import type { VariantProps } from '@gluestack-ui-nightly/utils/nativewind-utils';
import { View } from 'react-native';
import type { ViewProps } from 'react-native';
import { hstackStyle } from './styles';

type IHStackProps = ViewProps & VariantProps<typeof hstackStyle>;

const HStack = React.forwardRef<React.ComponentRef<typeof View>, IHStackProps>(
  function HStack({ className, space, reversed, ...props }, ref) {
    return (
      <View
        className={hstackStyle({
          space: space as any,
          reversed: reversed as boolean,
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

HStack.displayName = 'HStack';

export { HStack };
