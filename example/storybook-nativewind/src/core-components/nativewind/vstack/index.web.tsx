import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import { vstackStyle as vstackBaseStyle } from './index';

const vstackStyle = tva({
  extend: vstackBaseStyle,
  base: 'flex',
});

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
