import { View as RNView } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const View = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return <RNView className={tva({ base: className })} {...props} ref={ref} />;
  }
);
