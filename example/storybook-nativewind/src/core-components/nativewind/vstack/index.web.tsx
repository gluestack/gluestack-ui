import React from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import { vstackStyle } from './styles';

type IVStackProps = React.ComponentProps<'div'> &
  VariantProps<typeof vstackStyle>;

const VStack = React.forwardRef(
  ({ className, space, reversed, ...props }: IVStackProps, ref?: any) => {
    return (
      <div
        className={vstackStyle({ space, reversed, class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

VStack.displayName = 'VStack';

export { VStack };
