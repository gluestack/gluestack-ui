import React, { forwardRef } from 'react';
import { useCheckbox } from './CheckboxProvider';

const CheckboxIcon = (StyledCheckboxIcon: any) =>
  forwardRef(({ children, ...props }: any) => {
    const {
      isHovered,
      isChecked,
      isDisabled,
      isFocusVisible,
      resolveContextChildrenStyle,
    } = useCheckbox('CheckboxContext');

    const { ancestorStyle } = StyledCheckboxIcon.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    if (isChecked)
      return (
        <StyledCheckboxIcon
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
        </StyledCheckboxIcon>
      );

    return null;
  });

export default CheckboxIcon;
