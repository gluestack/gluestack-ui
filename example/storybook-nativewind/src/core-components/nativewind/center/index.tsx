import { View, ViewProps } from 'react-native';
import React from 'react';
import { centerStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

type ICenterProps = ViewProps & VariantProps<typeof centerStyle>;

const Center = React.forwardRef<React.ComponentRef<typeof View>, ICenterProps>(
  function Center({ className, ...props }, ref) {
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
