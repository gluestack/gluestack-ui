import React, { forwardRef } from 'react';
import { ProgressProvider } from './ProgressContext';
import type { IProgressProps } from './types';

export function Progress<StyledProgressProps>(
  StyledProgress: React.ComponentType<StyledProgressProps>
) {
  return forwardRef(
    (
      { children, min = 0, max = 100, value = 0, ...props }: IProgressProps,
      ref: any
    ) => {
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
          {...(props as StyledProgressProps)}
        >
          <ProgressProvider min={min} max={max} valueWidth={valueWidth}>
            {children}
          </ProgressProvider>
        </StyledProgress>
      );
    }
  );
}
