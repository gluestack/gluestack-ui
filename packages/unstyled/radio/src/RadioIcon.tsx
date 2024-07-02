import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioIcon = (StyledRadioIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { isChecked } = useRadio('RadioContext');

    return (
      <>
        {isChecked && (
          <StyledRadioIcon {...props} ref={ref}>
            {children}
          </StyledRadioIcon>
        )}
      </>
    );
  });
