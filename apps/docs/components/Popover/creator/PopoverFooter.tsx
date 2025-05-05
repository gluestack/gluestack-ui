import React, { forwardRef } from 'react';

const PopoverFooter = (StyledPopoverFooter: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledPopoverFooter ref={ref} {...props}>
        {children}
      </StyledPopoverFooter>
    );
  });

export default PopoverFooter;
