import React, { forwardRef } from 'react';
import { useTimeInput } from './TimeInputContext';

export const TimeInputMeridiemText = (StyledTimeInputMeridiemText: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    const {
      isDisabled,
      meridiemHovered,
      meridiem,
      meridiemPressed,
      isInvalid,
    } = useTimeInput('TimeInputContext');

    return (
      <StyledTimeInputMeridiemText
        ref={ref}
        {...props}
        states={{
          hover: meridiemHovered,
          disabled: isDisabled,
          active: meridiemPressed,
          invalid: isInvalid,
        }}
        dataSet={{
          hover: meridiemHovered,
          disabled: isDisabled,
          active: meridiemPressed,
          invalid: isInvalid,
        }}
      >
        {meridiem}
      </StyledTimeInputMeridiemText>
    );
  });
