import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioIcon = (StyledRadioIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { isChecked, forceMount } = useRadio('RadioContext');

    if (forceMount || isChecked) {
      return (
        <StyledRadioIcon {...props} ref={ref}>
          {children}
        </StyledRadioIcon>
      );
    }

    return null;
  });
