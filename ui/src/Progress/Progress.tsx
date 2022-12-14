import React from 'react';
import { UIContext } from '../UIProvider';
import { ProgressProvider } from './ProgressContext';

export const Progress = ({
  children,
  min = 0,
  max = 100,
  value = 0,
  ...props
}: any) => {
  const { StyledProgress } = React.useContext(UIContext);
  const valueWidth =
    value < max && value > min
      ? ((value - min) / (max - min)) * 100
      : value > min
      ? 100
      : 0;

  return (
    <StyledProgress
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
};
