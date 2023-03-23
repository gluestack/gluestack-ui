import React, { forwardRef } from 'react';

export const SelectDragIndicator = (Actionsheet: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <Actionsheet.DragIndicator {...props} ref={ref}>
        {children}
      </Actionsheet.DragIndicator>
    );
  });
