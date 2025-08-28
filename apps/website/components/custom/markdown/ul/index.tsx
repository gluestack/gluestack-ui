import React, { memo } from 'react';
import { UL as StyledUL } from './StyledUL';
export const UL = memo(({ children, ...props }: any) => {
  return (
    <StyledUL {...props}>
      {/* {children} */}
      <li>{children}</li>
    </StyledUL>
  );
});
