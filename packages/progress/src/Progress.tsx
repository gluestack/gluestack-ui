import React, { forwardRef } from 'react';
import { ProgressProvider } from './ProgressContext';
import type { IProgressProps } from './types';

const useProgress = ({
  min,
  max,
  value,
}: {
  min: number;
  max: number;
  value: number;
}) => {
  const valueWidth =
    value < max && value > min
      ? ((value - min) / (max - min)) * 100
      : value > min
      ? 100
      : 0;

  return {
    'accessible': true,
    'role': 'progressbar',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': valueWidth,
    'aria-valuetext': `${valueWidth}%`,
    valueWidth,
    'accessibilityRole': 'progressbar',
    'accessibilityValueNow': valueWidth,
    'accessibilityValueMin': min,
    'accessibilityValueMax': max,
    'accessibilityValueText': `${valueWidth}%`,
  };
};

export function Progress<StyledProgressProps>(
  StyledProgress: React.ComponentType<StyledProgressProps>
) {
  return forwardRef(
    (
      { children, min = 0, max = 100, value = 0, ...props }: IProgressProps,
      ref?: any
    ) => {
      const progressProps = useProgress({ min, max, value });

      return (
        <StyledProgress
          ref={ref}
          {...progressProps}
          {...(props as StyledProgressProps)}
        >
          <ProgressProvider
            min={min}
            max={max}
            valueWidth={progressProps.valueWidth}
          >
            {children}
          </ProgressProvider>
        </StyledProgress>
      );
    }
  );
}
