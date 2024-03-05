import { createDivider } from '@gluestack-ui/divider';
import { tva } from '@gluestack-ui/nativewind-utils';
import { View } from 'react-native';
import { cssInterop } from 'nativewind';

import React from 'react';
const dividerStyle = tva({
  base: 'bg-background-200',
  variants: {
    orientation: {
      vertical: 'w-px h-full',
      horizontal: 'h-px w-full',
    },
  },
});

const UIDivider = createDivider({ Root: View });

cssInterop(UIDivider, { className: 'style' });

const Divider = React.forwardRef(
  ({ className, orientation = 'horizontal', ...props }: any, ref?: any) => {
    return (
      <UIDivider
        ref={ref}
        {...props}
        className={dividerStyle({
          orientation,
          class: className,
        })}
      />
    );
  }
);

Divider.displayName = 'Divider';

export { Divider };
