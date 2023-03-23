import React, { forwardRef } from 'react';

export const SelectBackdrop = (Actionsheet: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <Actionsheet.Backdrop {...props} ref={ref}>
        {children}
      </Actionsheet.Backdrop>
    );
  });
