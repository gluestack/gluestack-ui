import React from 'react';
import { View } from 'react-native';

import { tva } from '@gluestack-ui/nativewind-utils/tva';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const boxStyle = tva({});

type IBoxProps = React.ComponentProps<typeof View> &
  VariantProps<typeof boxStyle>;

const Box = React.forwardRef(
  ({ className, ...props }: IBoxProps, ref?: any) => {
    return (
      <View ref={ref} {...props} className={boxStyle({ class: className })} />
    );
  }
);

Box.displayName = 'Box';
export { Box };
