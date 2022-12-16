import React, { forwardRef } from 'react';
import { ProgressProvider } from './ProgressContext';

export const Progress = (StyledProgress: any) =>
  forwardRef(
    ({ children, min = 0, max = 100, value = 0, ...props }: any, ref: any) => {
      const valueWidth =
        value < max && value > min
          ? ((value - min) / (max - min)) * 100
          : value > min
          ? 100
          : 0;

      return (
        <StyledProgress
          ref={ref}
          accessible
          accessibilityRole="progressbar"
          accessibilityValue={{
            min: min,
            max: max,
            now: valueWidth,
          }}
          {...props}
        >
          <ProgressProvider min={min} max={max} valueWidth={valueWidth}>
            {children}
          </ProgressProvider>
        </StyledProgress>
      );
    }
  );
