import React from 'react';
import { View } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils';

const boxStyle = tva({});
export const Box = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <View ref={ref} {...props} className={boxStyle({ class: className })} />
  );
});
