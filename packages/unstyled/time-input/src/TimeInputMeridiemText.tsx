import React, { forwardRef } from 'react';
import { useTimeInput } from './TimeInputContext';

export const TimeInputMeridiemText = (StyledTimeInputMeridiemText: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    const {
      isDisabled,
      isReadOnly,
      isFocused,
      isInvalid,
      isFocusVisible,
      meridiemHovered,
      meridiemValue,
      meridiemPressed,
    } = useTimeInput('TimeInputContext');
    return (
      <StyledTimeInputMeridiemText
        ref={ref}
        {...props}
        states={{
          hover: meridiemHovered,
          disabled: isDisabled,
          focusVisible: isFocusVisible,
          focus: isFocused,
          active: meridiemPressed,
          readOnly: isReadOnly,
          invalid: isInvalid,
        }}
        dataSet={{
          hover: meridiemHovered,
          focus: focus,
          active: meridiemPressed,
          readOnly: isReadOnly,
          invalid: isInvalid,
        }}
      >
        {meridiemValue}
      </StyledTimeInputMeridiemText>
    );
  });
