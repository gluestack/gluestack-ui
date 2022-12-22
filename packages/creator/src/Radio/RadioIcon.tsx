import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioIcon = (StyledRadioIcon: any) =>
  forwardRef(({ children, ...props }: any) => {
    const {
      isHovered,
      isChecked,
      isDisabled,
      isFocusVisible,
      isInvalid,
      resolveContextChildrenStyle,
    } = useRadio('RadioContext');

    const { ancestorStyle } = StyledRadioIcon.config;
    let styledObject = {};

    ancestorStyle?.forEach((consumer: any) => {
      if (resolveContextChildrenStyle[consumer]) {
        styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
      }
    });

    if (isChecked)
      return (
        <StyledRadioIcon
          states={{
            hover: isHovered,
            checked: isChecked,
            disabled: isDisabled,
            focusVisible: isFocusVisible,
            invalid: isInvalid,
          }}
          ancestorStyle={styledObject}
          {...props}
        >
          {children}
        </StyledRadioIcon>
      );
    return null;
  });
