import { InputAccessoryView as RNInputAccessoryView } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const InputAccessoryView = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNInputAccessoryView
        className={tva({ base: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
