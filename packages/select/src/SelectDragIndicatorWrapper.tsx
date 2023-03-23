import React, { forwardRef } from 'react';

export const SelectDragIndicatorWrapper = (Actionsheet: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <Actionsheet.DragIndicatorWrapper {...props} ref={ref}>
        {children}
      </Actionsheet.DragIndicatorWrapper>
    );
  });
