import React, { forwardRef } from 'react';

export const SelectContent = (Actionsheet: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <Actionsheet.Content {...props} ref={ref}>
        {children}
      </Actionsheet.Content>
    );
  });
