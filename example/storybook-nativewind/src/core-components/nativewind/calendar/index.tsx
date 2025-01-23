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
import { ChevronRight, ChevronLeft } from 'lucide-react-native';
import {
  calendarStyle,
  calendarContentStyle,
  calendarWeekStyle,
  calendarDaysStyle,
  calendarHeaderStyle,
  calendarNavStyle,
  calendarTitleStyle,
  calendarWeekCellStyle,
  calendarDateStyle,
} from './styles';

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
  Week: RNView,
  Days: RNView,
  Content: RNView,
  Date: RNPressable,
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

type ICalendarContentProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Content
> &
  VariantProps<typeof calendarContentStyle>;

type ICalendarWeekProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Week
> &
  VariantProps<typeof calendarWeekStyle>;

type ICalendarDaysProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Days
> &
  VariantProps<typeof calendarDaysStyle>;

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

type ICalendarDateProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Date
> &
  VariantProps<typeof calendarDateStyle>;

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
      <UIIcon as={ChevronLeft} className="text-typography-800 w-3.5 h-3.5" />
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
      <UIIcon as={ChevronRight} className="text-typography-800 w-3.5 h-3.5" />
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

const CalendarContent = React.forwardRef<
  React.ElementRef<typeof UICalendar.Content>,
  ICalendarContentProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.Content
      ref={ref}
      {...props}
      className={calendarContentStyle({ class: className })}
    />
  );
});

const CalendarWeek = React.forwardRef<
  React.ElementRef<typeof UICalendar.Week>,
  ICalendarWeekProps
>(({ className, ...props }, ref) => {
  return (
    <UICalendar.Week
      ref={ref}
      {...props}
      className={calendarWeekStyle({ class: className })}
      render={({ weekday }: any) => {
        return (
          <RNText className={calendarWeekCellStyle({ class: className })}>
            {weekday}
          </RNText>
        );
      }}
    />
  );
});

const CalendarDate = React.forwardRef<
  React.ElementRef<typeof UICalendar.Date>,
  ICalendarDateProps
>(({ className, day, ...props }, ref) => {
  return (
    <UICalendar.Date
      ref={ref}
      day={day}
      {...props}
      className={calendarDateStyle({
        class: className,
        hasDay: day ? true : false,
      })}
    />
  );
});

const CalendarDays = React.forwardRef<
  React.ElementRef<typeof UICalendar.Days>,
  ICalendarDaysProps
>(({ className, render, ...props }, ref) => {
  return (
    <UICalendar.Days
      ref={ref}
      {...props}
      className={calendarDaysStyle({
        class: className,
      })}
      render={
        render ??
        (({ day, ...dayProps }: any) => {
          return (
            <CalendarDate {...dayProps} day={day}>
              <RNText className="text-typography-800 group-data-[selected=true]:text-typography-0 group-data-[disabled=true]:text-typography-400">
                {day?.getDate()}
              </RNText>
            </CalendarDate>
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
      <CalendarContent>
        <CalendarWeek />
        <CalendarDays />
      </CalendarContent>
    </UICalendar>
  );
});

Calendar.displayName = 'Calendar';
CalendarHeaderPrev.displayName = 'CalendarHeaderPrev';
CalendarHeaderNext.displayName = 'CalendarHeaderNext';
CalendarHeaderTitle.displayName = 'CalendarHeaderTitle';
CalendarHeader.displayName = 'CalendarHeader';
CalendarContent.displayName = 'CalendarContent';
CalendarWeek.displayName = 'CalendarWeek';
CalendarDays.displayName = 'CalendarDays';
CalendarDate.displayName = 'CalendarDate';

export {
  Calendar,
  CalendarHeaderPrev,
  CalendarHeaderNext,
  CalendarHeaderTitle,
  CalendarHeader,
  CalendarContent,
  CalendarWeek,
  CalendarDays,
  CalendarDate,
};
