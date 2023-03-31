import React, { forwardRef } from 'react';

const PopoverArrow = (StyledPopoverArrow: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledPopoverArrow ref={ref} {...props}>
        {children}
      </StyledPopoverArrow>
    );
  });

export default PopoverArrow;
