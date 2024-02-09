import { ScrollView as RNScrollView } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const ScrollView = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNScrollView className={tva({ base: className })} {...props} ref={ref} />
    );
  }
);
