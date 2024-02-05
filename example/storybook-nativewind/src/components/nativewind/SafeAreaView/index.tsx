import React from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils';

const safeAreaViewStyle = tva({});
export const SafeAreaView = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <RNSafeAreaView
        ref={ref}
        {...props}
        className={safeAreaViewStyle({ class: className })}
      />
    );
  }
);
