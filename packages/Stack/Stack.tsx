import React, { forwardRef } from 'react';
import type { IStackProps } from './types';
import { View } from 'react-native';
// import { HStack } from '../HStack';
// import { VStack } from '../VStack';
export const Stack = forwardRef(
  ({ direction, ...props }: IStackProps, ref: any) => {
    return (
      <View
        ref={ref}
        {...props}
        style={{
          flexDirection: direction,
        }}
      >
        {props.children}
      </View>
    );
    // return direction === 'row' ? (
    //   <HStack ref={ref} {...props} />
    // ) : (
    //   <VStack ref={ref} {...props} />
    // );
  }
);
