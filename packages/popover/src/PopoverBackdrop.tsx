import React, { forwardRef } from 'react';
import { usePopover } from './PopoverContext';

const PopoverBackdrop = (StyledPopoverBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { value } = usePopover('PopperContext');
    const { handleClose } = value;
    return (
      <StyledPopoverBackdrop ref={ref} {...props} onPress={handleClose}>
        {children}
      </StyledPopoverBackdrop>
    );
  });

export default PopoverBackdrop;
