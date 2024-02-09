import { StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const StatusBar = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNStatusBar className={tva({ base: className })} {...props} ref={ref} />
    );
  }
);
