import React, { forwardRef } from 'react';
import { View } from 'react-native';
import type { ICalendarDayIndicatorProps } from './types';

export const CalendarDayIndicatorMain = (StyledCalendarDayIndicator: any) =>
  forwardRef<any, ICalendarDayIndicatorProps>((props, ref) => {
    const { type = 'dot', dots, color, children, ...rest } = props;

    if (children) {
      return (
        <StyledCalendarDayIndicator ref={ref} data-type={type} {...rest}>
          {children}
        </StyledCalendarDayIndicator>
      );
    }

    if (type === 'dot' && color) {
      return (
        <StyledCalendarDayIndicator ref={ref} data-type="dot" {...rest}>
          <DotIndicator color={color} />
        </StyledCalendarDayIndicator>
      );
    }

    if (type === 'multi-dot' && dots) {
      return (
        <StyledCalendarDayIndicator ref={ref} data-type="multi-dot" {...rest}>
          {dots.map((dot, index) => (
            <DotIndicator key={dot.key || index} color={dot.color} />
          ))}
        </StyledCalendarDayIndicator>
      );
    }

    return (
      <StyledCalendarDayIndicator ref={ref} data-type={type} {...rest}>
        {children}
      </StyledCalendarDayIndicator>
    );
  });

// Simple dot indicator component
const DotIndicator = ({ color }: { color: string }) => {
  return (
    <View
      style={{
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: color,
      }}
    />
  );
};
