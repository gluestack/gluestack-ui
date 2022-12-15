import React, { forwardRef } from 'react';
import type { IStackProps } from './types';
// import { HStack } from '../HStack';
import { VStack } from '../VStack';
export const Stack = forwardRef(
  ({ direction, ...props }: IStackProps, ref: any) => {
    return direction === 'row' ? null : ( // <HStack ref={ref} {...props} />
      <VStack ref={ref} {...props} />
    );
  }
);
