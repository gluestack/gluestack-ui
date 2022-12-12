import React, { forwardRef } from 'react';
import type { IStackProps } from './types';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
export const Stack = forwardRef(({ direction, ...props }: IStackProps) => {
  return direction === 'row' ? <HStack {...props} /> : <VStack {...props} />;
});
