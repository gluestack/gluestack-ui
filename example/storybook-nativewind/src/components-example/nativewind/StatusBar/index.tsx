import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils';

const statusBarStyle = tva({});
export const StatusBar = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <RNStatusBar
        ref={ref}
        {...props}
        className={statusBarStyle({ class: className })}
      />
    );
  }
);
