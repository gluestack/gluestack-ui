import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxLabel = (StyledCheckboxLabel: any) =>
  forwardRef(({ children, ...props }: any) => {
    const {
      isHovered,
      isChecked,
      isDisabled,
      isFocusVisible,
      resolveContextChildrenStyle,
    } = useCheckbox('CheckboxContext');

    const { ancestorStyle } = StyledCheckboxLabel.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    return (
      <StyledCheckboxLabel
        states={{
          hover: isHovered,
          checked: isChecked,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
        }}
        ancestorStyle={styledObject}
        {...props}
      >
        {children}
      </StyledCheckboxLabel>
    );
  });

export default CheckboxLabel;
