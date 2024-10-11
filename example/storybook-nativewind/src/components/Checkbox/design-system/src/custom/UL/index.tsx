import React, { memo } from 'react';
import { StyledUL } from '../../styled-components';
export const UL = memo(({ ...props }: any) => {
  return <StyledUL {...props} />;
});
