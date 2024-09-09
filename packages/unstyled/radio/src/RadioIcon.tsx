import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioIcon = (StyledRadioIcon: any) =>
  forwardRef(({ children, forceMount = false, ...props }: any, ref?: any) => {
    const { isChecked } = useRadio('RadioContext');

    if (forceMount || isChecked) {
      return (
        <StyledRadioIcon {...props} ref={ref}>
          {children}
        </StyledRadioIcon>
      );
    }

    return null;
  });
