import React, { forwardRef } from 'react';
import { usePopperContext } from '../Popper/PopperContext';

const PopoverBackdrop = (StyledPopoverBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { value } = usePopperContext('PopperContext');
    const { handleClose } = value;
    return (
      <StyledPopoverBackdrop ref={ref} {...props} onPress={handleClose}>
        {children}
      </StyledPopoverBackdrop>
    );
  });

export default PopoverBackdrop;
