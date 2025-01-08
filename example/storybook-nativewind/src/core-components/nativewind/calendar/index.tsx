'use client';
import React from 'react';
import {
  View as RNView,
  Pressable as RNPressable,
  Text as RNText,
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

cssInterop(Root, {
  className: {
    target: 'style',
  },
});

/** Creator */

const UICalendar = createCalendar({
  Root: Root,
  HeaderPrev: RNPressable,
  HeaderTitle: RNText,
  HeaderNext: RNPressable,
  Header: RNView,
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
      <UIIcon as={ChevronLeft} className="text-typography-800" />
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
      <UIIcon as={ChevronRight} className="text-typography-800" />
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
      render={(day, index) => {
        return (
          <RNText
            key={index}
            className={calendarWeekCellStyle({ class: className })}
          >
            {day}
          </RNText>
        );
      }}
    />
  );
});

const CalendarGridDays = React.forwardRef<
  React.ElementRef<typeof UICalendar.GridDays>,
  ICalendarGridDaysProps
>(({ className, render, ...props }, ref) => {
  return (
    <UICalendar.GridDays
      ref={ref}
      {...props}
      className={calendarGridDaysStyle({ class: className })}
      render={
        render ??
        ((day, dayProps) => {
          return (
            <RNPressable
              key={day}
              {...dayProps}
              className={calendarDaysCellStyle({
                hasDay: !!day,
              })}
            >
              <RNText className="group-data-[selected=true]:text-typography-0">
                {day?.getDate()}
              </RNText>
            </RNPressable>
          );
        })
      }
    />
  );
});

const Calendar = React.forwardRef<
  React.ElementRef<typeof UICalendar>,
  ICalendarProps
>(({ children, className, ...props }, ref) => {
  return children ? (
    <UICalendar
      ref={ref}
      {...props}
      className={calendarStyle({ class: className })}
    >
      {children}
    </UICalendar>
  ) : (
    <UICalendar
      ref={ref}
      {...props}
      className={calendarStyle({ class: className })}
    >
      <CalendarHeader>
        <CalendarHeaderPrev />
        <CalendarHeaderTitle />
        <CalendarHeaderNext />
      </CalendarHeader>
      <CalendarGrid>
        <CalendarGridWeek />
        <CalendarGridDays />
      </CalendarGrid>
    </UICalendar>
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
