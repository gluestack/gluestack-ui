import React, { forwardRef } from 'react';
import { ProgressProvider } from './ProgressContext';
import type { IProgressProps } from './types';

const useProgress = ({
  min,
  max,
  value,
  orientation = 'horizontal',
}: {
  min: number;
  max: number;
  value: number;
  orientation: 'horizontal' | 'vertical';
}) => {
  const calculatedValue =
    value < max && value > min
      ? Math.round(((value - min) / (max - min)) * 100)
      : value > min
      ? 100
      : 0;

  return {
    'accessible': true,
    'tabIndex': 1,
    'role': 'progressbar',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': calculatedValue,
    'aria-valuetext': `${calculatedValue}%`,
    'aria-orientation': orientation,
    'valueWidth': orientation === 'horizontal' ? calculatedValue : 100,
    'valueHeight': orientation === 'vertical' ? calculatedValue : 100,
  };
};

export function Progress<StyledProgressProps>(
  StyledProgress: React.ComponentType<StyledProgressProps>
) {
  return forwardRef(
    (
      {
        children,
        min = 0,
        max = 100,
        value = 0,
        orientation = 'horizontal',
        ...props
      }: IProgressProps,
      ref?: any
    ) => {
      const progressProps = useProgress({ min, max, value, orientation });

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
            valueHeight={progressProps.valueHeight}
            orientation={orientation}
          >
            {children}
          </ProgressProvider>
        </StyledProgress>
      );
    }
  );
}
