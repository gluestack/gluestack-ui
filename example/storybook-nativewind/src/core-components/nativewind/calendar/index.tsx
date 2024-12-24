'use client';
import React from 'react';
import {
  View as RNView,
  Pressable as RNPressable,
  Text as RNText,
  TextProps as RNTextProps,
  Platform,
} from 'react-native';
import { createCalendar } from '@gluestack-ui/calendar';
import { withStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from 'nativewind';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/icon';
import { VariantProps } from '@gluestack-ui/nativewind-utils/types';
import {
  calendarStyle,
  calendarGridStyle,
  calendarGridWeekStyle,
  calendarGridDaysStyle,
  calendarHeaderStyle,
  calendarNavStyle,
  calendarTitleStyle,
  calendarWeekCellStyle,
  calendarDaysCellStyle,
} from './styles';
import { ChevronRight, ChevronLeft } from 'lucide-react-native';

const SCOPE = 'CALENDAR';

const Root = withStyleContext(RNView, SCOPE);

const Header = (
  Platform.OS === 'web' ? RNText : RNView
) as React.ComponentType<RNTextProps>;

/** Creator */

const UICalendar = createCalendar({
  Root: Root,
  HeaderPrev: RNPressable,
  HeaderTitle: RNText,
  HeaderNext: RNPressable,
  Header: Header,
  GridWeek: RNView,
  GridDays: RNView,
  Grid: RNView,
});

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

type ICalendarProps = React.ComponentPropsWithoutRef<typeof UICalendar> &
  VariantProps<typeof calendarStyle>;

type ICalendarGridProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Grid
> &
  VariantProps<typeof calendarGridStyle>;

type ICalendarGridWeekProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.GridWeek
> &
  VariantProps<typeof calendarGridWeekStyle>;

type ICalendarGridDaysProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.GridDays
> &
  VariantProps<typeof calendarGridDaysStyle>;

type ICalendarHeaderProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Header
> &
  VariantProps<typeof calendarHeaderStyle>;

type ICalendarHeaderPrevProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.HeaderPrev
> &
  VariantProps<typeof calendarNavStyle>;

type ICalendarHeaderNextProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.HeaderNext
> &
  VariantProps<typeof calendarNavStyle>;

type ICalendarHeaderTitleProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.HeaderTitle
> &
  VariantProps<typeof calendarTitleStyle>;

/** Components */

const Calendar = React.forwardRef<
  React.ElementRef<typeof UICalendar>,
  ICalendarProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar
      ref={ref}
      {...props}
      className={calendarStyle({ class: className })}
    />
  );
});

const CalendarHeaderPrev = React.forwardRef<
  React.ElementRef<typeof UICalendar.HeaderPrev>,
  ICalendarHeaderPrevProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.HeaderPrev
      ref={ref}
      {...props}
      className={calendarNavStyle({ class: className })}
    >
      <UIIcon as={ChevronLeft} />
    </UICalendar.HeaderPrev>
  );
});

const CalendarHeaderNext = React.forwardRef<
  React.ElementRef<typeof UICalendar.HeaderNext>,
  ICalendarHeaderNextProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.HeaderNext
      ref={ref}
      {...props}
      className={calendarNavStyle({ class: className })}
    >
      <UIIcon as={ChevronRight} />
    </UICalendar.HeaderNext>
  );
});

const CalendarHeaderTitle = React.forwardRef<
  React.ElementRef<typeof UICalendar.HeaderTitle>,
  ICalendarHeaderTitleProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.HeaderTitle
      ref={ref}
      {...props}
      className={calendarTitleStyle({ class: className })}
    />
  );
});

const CalendarHeader = React.forwardRef<
  React.ElementRef<typeof UICalendar.Header>,
  ICalendarHeaderProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.Header
      ref={ref}
      {...props}
      className={calendarHeaderStyle({ class: className })}
    />
  );
});

const CalendarGrid = React.forwardRef<
  React.ElementRef<typeof UICalendar.Grid>,
  ICalendarGridProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.Grid
      ref={ref}
      {...props}
      className={calendarGridStyle({ class: className })}
    />
  );
});

const CalendarGridWeek = React.forwardRef<
  React.ElementRef<typeof UICalendar.GridWeek>,
  ICalendarGridWeekProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.GridWeek
      ref={ref}
      {...props}
      className={calendarGridWeekStyle({ class: className })}
      render={(weekdays) => {
        return weekdays.map((day) => {
          return (
            <RNText
              className={calendarWeekCellStyle({ class: className })}
              key={day}
            >
              {day}
            </RNText>
          );
        });
      }}
    />
  );
});

const CalendarGridDays = React.forwardRef<
  React.ElementRef<typeof UICalendar.GridDays>,
  ICalendarGridDaysProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.GridDays
      ref={ref}
      {...props}
      className={calendarGridDaysStyle({ class: className })}
      render={(days) => {
        return days.map((day) => {
          return (
            <RNText
              className={calendarDaysCellStyle({ class: className })}
              key={day}
            >
              {day}
            </RNText>
          );
        });
      }}
    />
  );
});

Calendar.displayName = 'Calendar';
CalendarHeaderPrev.displayName = 'CalendarHeaderPrev';
CalendarHeaderNext.displayName = 'CalendarHeaderNext';
CalendarHeaderTitle.displayName = 'CalendarHeaderTitle';
CalendarHeader.displayName = 'CalendarHeader';
CalendarGrid.displayName = 'CalendarGrid';
CalendarGridWeek.displayName = 'CalendarGridWeek';
CalendarGridDays.displayName = 'CalendarGridDays';

export {
  Calendar,
  CalendarHeaderPrev,
  CalendarHeaderNext,
  CalendarHeaderTitle,
  CalendarHeader,
  CalendarGrid,
  CalendarGridWeek,
  CalendarGridDays,
};
