import { VirtualizedList as RNVirtualizedList } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const VirtualizedList = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNVirtualizedList
        className={tva({ base: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
