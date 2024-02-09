import { SafeAreaView as RNSafeAreaView } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const SafeAreaView = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNSafeAreaView
        className={tva({ base: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
