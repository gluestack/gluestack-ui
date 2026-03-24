import React, { memo } from 'react';
import { UL as StyledUL } from './StyledUL';
import { Text } from '@/components/ui/text';
export const UL = memo(({ children, ...props }: any) => {
  return (
    <StyledUL {...props}>
      <Text>{children}</Text>
    </StyledUL>
  );
});
