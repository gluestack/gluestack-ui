'use client';

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { createCalendar, type ICalendarProps } from '@gluestack-ui/core/calendar/creator';
import { cssInterop } from 'nativewind';
import {
  calendarStyle,
  calendarHeaderStyle,
  calendarHeaderButtonStyle,
  calendarHeaderTitleStyle,
  calendarHeaderSelectStyle,
  calendarWeekDaysHeaderStyle,
  calendarWeekDayStyle,
  calendarWeekDayTextStyle,
  calendarBodyStyle,
  calendarGridStyle,
  calendarWeekStyle,
  calendarDayStyle,
  calendarDayTextStyle,
  calendarDayIndicatorStyle,
  calendarWeekNumberStyle,
  calendarWeekNumberTextStyle,
  calendarFooterStyle,
} from './styles';

// Apply cssInterop for NativeWind support
cssInterop(View, { className: 'style' });
cssInterop(Text, { className: 'style' });
cssInterop(Pressable, { className: 'style' });

// Styled Root Component
const CalendarRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  ICalendarProps & React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarStyle({ class: className })} {...props} />;
});

// Styled Header
const CalendarHeaderRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarHeaderStyle({ class: className })} {...props} />;
});

const CalendarHeaderPrevButtonRoot = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentProps<typeof Pressable> & { className?: string; disabled?: boolean }
>(({ className, disabled, ...props }, ref) => {
  return (
    <Pressable
      ref={ref}
      className={calendarHeaderButtonStyle({ class: className })}
      data-disabled={disabled}
      {...props}
    />
  );
});

const CalendarHeaderNextButtonRoot = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentProps<typeof Pressable> & { className?: string; disabled?: boolean }
>(({ className, disabled, ...props }, ref) => {
  return (
    <Pressable
      ref={ref}
      className={calendarHeaderButtonStyle({ class: className })}
      data-disabled={disabled}
      {...props}
    />
  );
});

const CalendarHeaderTitleRoot = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentProps<typeof Text> & { className?: string }
>(({ className, ...props }, ref) => {
  return <Text ref={ref} className={calendarHeaderTitleStyle({ class: className })} {...props} />;
});

const CalendarHeaderMonthSelectRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarHeaderSelectStyle({ class: className })} {...props} />;
});

const CalendarHeaderYearSelectRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarHeaderSelectStyle({ class: className })} {...props} />;
});

// Styled Week Days Header
const CalendarWeekDaysHeaderRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarWeekDaysHeaderStyle({ class: className })} {...props} />;
});

const CalendarWeekDayRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, children, ...props }, ref) => {
  return (
    <View ref={ref} className={calendarWeekDayStyle({ class: className })} {...props}>
      {typeof children === 'string' ? (
        <Text className={calendarWeekDayTextStyle({ class: '' })}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
});

// Styled Body & Grid
const CalendarBodyRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarBodyStyle({ class: className })} {...props} />;
});

const CalendarGridRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarGridStyle({ class: className })} {...props} />;
});

const CalendarWeekRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarWeekStyle({ class: className })} {...props} />;
});

// Styled Day
const CalendarDayRoot = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentProps<typeof Pressable> & { className?: string; 'data-state'?: string }
>(({ className, 'data-state': dataState, ...props }, ref) => {
  return (
    <Pressable
      ref={ref}
      className={calendarDayStyle({
        state: dataState as any,
        class: className,
      })}
      {...props}
    />
  );
});

const CalendarDayTextRoot = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentProps<typeof Text> & { className?: string; state?: any }
>(({ className, state, ...props }, ref) => {
  return (
    <Text
      ref={ref}
      className={calendarDayTextStyle({
        state: state?.isSelected && state?.isRangeStart ? 'range-start' :
              state?.isSelected && state?.isRangeEnd ? 'range-end' :
              state?.isInRange ? 'range-middle' :
              state?.isSelected ? 'selected' :
              state?.isToday ? 'today' :
              state?.isDisabled ? 'disabled' :
              state?.isOutsideMonth ? 'outside-month' :
              'default',
        class: className,
      })}
      {...props}
    />
  );
});

const CalendarDayIndicatorRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string; 'data-type'?: string }
>(({ className, 'data-type': dataType, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={calendarDayIndicatorStyle({
        type: dataType as any,
        class: className,
      })}
      {...props}
    />
  );
});

// Styled Week Number
const CalendarWeekNumberRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, children, ...props }, ref) => {
  return (
    <View ref={ref} className={calendarWeekNumberStyle({ class: className })} {...props}>
      {typeof children === 'string' || typeof children === 'number' ? (
        <Text className={calendarWeekNumberTextStyle({ class: '' })}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
});

// Styled Footer
const CalendarFooterRoot = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentProps<typeof View> & { className?: string }
>(({ className, ...props }, ref) => {
  return <View ref={ref} className={calendarFooterStyle({ class: className })} {...props} />;
});

// Create Calendar using the factory
const UICalendar = createCalendar({
  Root: CalendarRoot,
  Header: CalendarHeaderRoot,
  HeaderPrevButton: CalendarHeaderPrevButtonRoot,
  HeaderNextButton: CalendarHeaderNextButtonRoot,
  HeaderTitle: CalendarHeaderTitleRoot,
  HeaderMonthSelect: CalendarHeaderMonthSelectRoot,
  HeaderYearSelect: CalendarHeaderYearSelectRoot,
  WeekDaysHeader: CalendarWeekDaysHeaderRoot,
  WeekDay: CalendarWeekDayRoot,
  Body: CalendarBodyRoot,
  Grid: CalendarGridRoot,
  Week: CalendarWeekRoot,
  Day: CalendarDayRoot,
  DayText: CalendarDayTextRoot,
  DayIndicator: CalendarDayIndicatorRoot,
  WeekNumber: CalendarWeekNumberRoot,
  Footer: CalendarFooterRoot,
});

// Export components
export const Calendar = UICalendar;
export const CalendarHeader = UICalendar.Header;
export const CalendarHeaderPrevButton = UICalendar.HeaderPrevButton;
export const CalendarHeaderNextButton = UICalendar.HeaderNextButton;
export const CalendarHeaderTitle = UICalendar.HeaderTitle;
export const CalendarHeaderMonthSelect = UICalendar.HeaderMonthSelect;
export const CalendarHeaderYearSelect = UICalendar.HeaderYearSelect;
export const CalendarWeekDaysHeader = UICalendar.WeekDaysHeader;
export const CalendarWeekDay = UICalendar.WeekDay;
export const CalendarBody = UICalendar.Body;
export const CalendarGrid = UICalendar.Grid;
export const CalendarWeek = UICalendar.Week;
export const CalendarDay = UICalendar.Day;
export const CalendarDayText = UICalendar.DayText;
export const CalendarDayIndicator = UICalendar.DayIndicator;
export const CalendarWeekNumber = UICalendar.WeekNumber;
export const CalendarFooter = UICalendar.Footer;

// Re-export types
export type {
  ICalendarProps,
  CalendarMode,
  CalendarMarker,
  CalendarMarkers,
  DayState,
} from '@gluestack-ui/core/calendar/creator';
