import React, { memo } from 'react';
import { UL as StyledUL } from './StyledUL';

export const UL = memo(({ ...props }: any) => {
  return <StyledUL {...props} />;
});
