import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const vstackStyle = tva({
  base: 'flex flex-col',
  variants: {
    space: {
      'xs': 'gap-1',
      'sm': 'gap-2',
      'md': 'gap-3',
      'lg': 'gap-4',
      'xl': 'gap-5',
      '2xl': 'gap-6',
      '3xl': 'gap-7',
      '4xl': 'gap-8',
    },
    reversed: {
      true: 'flex-col-reverse',
    },
  },
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
