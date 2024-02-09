import { FlatList as RNFlatList } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const FlatList = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <RNFlatList className={tva({ base: className })} {...props} ref={ref} />
    );
  }
);
