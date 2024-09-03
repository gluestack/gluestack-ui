import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIcon = (StyledCheckboxIcon: any) =>
  forwardRef(({ children, forceMount = false, ...props }: any, ref?: any) => {
    const { isChecked } = useCheckbox('CheckboxContext');

    if (forceMount || isChecked) {
      return (
        <StyledCheckboxIcon {...props} ref={ref}>
          {children}
        </StyledCheckboxIcon>
      );
    }

    return null;
  });

export default CheckboxIcon;
