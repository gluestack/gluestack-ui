import { RefreshControl as RNRefreshControl } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const RefreshControl = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNRefreshControl
        className={tva({ base: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
