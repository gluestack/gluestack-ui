import { View } from 'react-native';
import React from 'react';
import { centerStyle } from './styles';

import type { VariantProps } from '@gluestack-ui/nativewind-utils';
type ICenterProps = VariantProps<typeof centerStyle> &
  React.ComponentProps<typeof View>;

const Center = React.forwardRef(
  ({ className, ...props }: ICenterProps, ref?: any) => {
    return (
      <View
        className={centerStyle({ class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

Center.displayName = 'Center';

export { Center };
