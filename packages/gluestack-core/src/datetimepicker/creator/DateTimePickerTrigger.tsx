import React from 'react';
import { useDateTimePickerContext } from './DateTimePickerContext';
import type { DateTimePickerTriggerProps } from './types';

export const DateTimePickerTrigger = (StyledTrigger: any) =>
  React.forwardRef<any, DateTimePickerTriggerProps>(
    ({ children, ...props }, ref) => {
      const { setIsOpen, isDisabled, isReadOnly, isInvalid } =
        useDateTimePickerContext();

      return (
        <StyledTrigger
          ref={ref}
          onPress={() => {
            if (!isDisabled && !isReadOnly) {
              setIsOpen(true);
            }
          }}
          disabled={isDisabled}
          data-disabled={isDisabled}
          data-invalid={isInvalid}
          data-readonly={isReadOnly}
          {...props}
        >
          {children}
        </StyledTrigger>
      );
    }
  );
