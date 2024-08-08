import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIcon = (StyledCheckboxIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { isChecked } = useCheckbox('CheckboxContext');

    return (
      <>
        {isChecked && (
          <StyledCheckboxIcon {...props} ref={ref}>
            {children}
          </StyledCheckboxIcon>
        )}
      </>
    );
  });

export default CheckboxIcon;
