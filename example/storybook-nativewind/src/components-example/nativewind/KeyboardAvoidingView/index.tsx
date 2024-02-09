import { KeyboardAvoidingView as RNKeyboardAvoidingView } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const KeyboardAvoidingView = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNKeyboardAvoidingView
        className={tva({ base: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
