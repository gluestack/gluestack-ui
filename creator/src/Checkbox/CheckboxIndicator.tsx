import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIndicator = (StyledCheckboxIndicator: any) =>
  forwardRef(({ children, ...props }: any) => {
    const {
      isChecked,
      isDisabled,
      isFocusVisible,
      isHovered,
      isInvalid,
      resolveContextChildrenStyle,
    } = useCheckbox('CheckboxContext');

    const { ancestorStyle } = StyledCheckboxIndicator.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledCheckboxIndicator
        states={{
          checked: isChecked,
          focusVisible: isFocusVisible,
          disabled: isDisabled,
          hover: isHovered,
          invalid: isInvalid,
        }}
        ancestorStyle={styledObject}
        {...props}
      >
        {children}
      </StyledCheckboxIndicator>
    );
  });
export default CheckboxIndicator;
