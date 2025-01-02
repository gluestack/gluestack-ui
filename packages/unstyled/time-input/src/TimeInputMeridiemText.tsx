import React, { forwardRef } from 'react';
import { useTimeInput } from './TimeInputContext';

export const TimeInputMeridiemText = (StyledTimeInputMeridiemText: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    const {
      isDisabled,
      isReadOnly,
      meridiemHovered,
      meridiem,
      meridiemPressed,
    } = useTimeInput('TimeInputContext');

    return (
      <StyledTimeInputMeridiemText
        ref={ref}
        {...props}
        states={{
          hover: meridiemHovered,
          disabled: isDisabled,
          active: meridiemPressed,
          readOnly: isReadOnly,
        }}
        dataSet={{
          hover: meridiemHovered,
          disabled: isDisabled,
          active: meridiemPressed,
          readOnly: isReadOnly,
        }}
      >
        {meridiem}
      </StyledTimeInputMeridiemText>
    );
  });
