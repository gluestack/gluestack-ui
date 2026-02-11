'use client';
import React from 'react';
import {
  View as RNView,
  Pressable as RNPressable,
  Text as RNText,
} from 'react-native';
import { Grid, GridItem } from '@/components/ui/grid';
import { createCalendar } from '@gluestack-ui/core/calendar/creator';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';
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
} from './style';
import type { ICalendarProps } from './types';

const SCOPE = 'CALENDAR';

const Root = withStyleContext(RNView, SCOPE);

cssInterop(Root, {
  className: {
    target: 'style',
  },
});

// Create the calendar using gluestack-ui creator
const UICalendar = createCalendar({
  Root: Root,
  HeaderPrev: RNPressable,
  HeaderTitle: RNText,
  HeaderNext: RNPressable,
  Header: RNView,
  Week: RNView,
  Days: Grid,
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

// Type definitions
type ICalendarComponentProps = React.ComponentPropsWithoutRef<
  typeof UICalendar
>;
type ICalendarContentProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Content
>;
type ICalendarWeekProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Week
>;
type ICalendarDaysProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Days
>;
type ICalendarHeaderProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Header
>;
type ICalendarHeaderPrevProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.HeaderPrev
>;
type ICalendarHeaderNextProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.HeaderNext
>;
type ICalendarHeaderTitleProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.HeaderTitle
>;
type ICalendarDateProps = React.ComponentPropsWithoutRef<
  typeof UICalendar.Date
>;

// Compound Components
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
      <UIIcon as={ChevronLeft} className="text-foreground w-3.5 h-3.5" />
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
      <UIIcon as={ChevronRight} className="text-foreground w-3.5 h-3.5" />
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
  ICalendarWeekProps & { format?: 'min' | 'short' | 'full' }
>(({ className, format = 'min', ...props }, ref) => {
  return (
    <UICalendar.Week
      ref={ref}
      {...props}
      format={format}
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
  ICalendarDateProps & {
    render?: (props: {
      day: Date | null;
      isSelected: boolean;
      isRangeStart: boolean;
      isRangeEnd: boolean;
      isRangeMiddle: boolean;
      isToday: boolean;
      isDisabled: boolean;
    }) => React.ReactNode;
  }
>(({ className, day, render, ...props }, ref) => {
  if (render) {
    return 
    (<GridItem _extra={{className: "col-span-1"}}>
      <UICalendar.Date ref={ref} day={day} render={render} {...props}/>
    </GridItem>);
  }

  return (
    <UICalendar.Date
      ref={ref}
      day={day}
      {...props}
      className={calendarDateStyle({
        class: className,
        hasDay: day ? true : false,
      })}
    >
      <RNText className="text-foreground group-data-[selected=true]:text-typography-0 group-data-[disabled=true]:text-typography-400">
        {day?.getDate()}
      </RNText>
    </UICalendar.Date>
  );
});

const CalendarDays = React.forwardRef<
  React.ElementRef<typeof UICalendar.Days>,
  ICalendarDaysProps & {
    render?: (props: {
      day: Date | null;
      isSelected: boolean;
      isRangeStart: boolean;
      isRangeEnd: boolean;
      isRangeMiddle: boolean;
      isToday: boolean;
      isDisabled: boolean;
    }) => React.ReactNode;
  }
>(({ className, render, ...props }, ref) => {
  return (
    <UICalendar.Days
      ref={ref}
      {...props}
      className={calendarDaysStyle({
        class: className,
      })}
      _extra={{className: "grid-cols-7"}}
      render={
        render ??
        (({ day, ...dayProps }: any) => {
          return (
            <CalendarDate {...dayProps} day={day}>
              <RNText className="text-foreground group-data-[selected=true]:text-typography-0 group-data-[disabled=true]:text-typography-400">
                {day?.getDate()}
              </RNText>
            </CalendarDate>
          );
        })
      }
    />
  );
});

// Main Calendar Component
interface CalendarComponent extends React.ForwardRefExoticComponent<
  ICalendarComponentProps &
    ICalendarProps &
    React.RefAttributes<typeof UICalendar>
> {
  Header: typeof CalendarHeader;
  HeaderPrev: typeof CalendarHeaderPrev;
  HeaderNext: typeof CalendarHeaderNext;
  HeaderTitle: typeof CalendarHeaderTitle;
  Content: typeof CalendarContent;
  Week: typeof CalendarWeek;
  Days: typeof CalendarDays;
  Date: typeof CalendarDate;
}

const Calendar = React.forwardRef<
  React.ElementRef<typeof UICalendar>,
  ICalendarComponentProps & ICalendarProps
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
}) as CalendarComponent;

Calendar.displayName = 'Calendar';
CalendarHeaderPrev.displayName = 'Calendar.HeaderPrev';
CalendarHeaderNext.displayName = 'Calendar.HeaderNext';
CalendarHeaderTitle.displayName = 'Calendar.HeaderTitle';
CalendarHeader.displayName = 'Calendar.Header';
CalendarContent.displayName = 'Calendar.Content';
CalendarWeek.displayName = 'Calendar.Week';
CalendarDays.displayName = 'Calendar.Days';
CalendarDate.displayName = 'Calendar.Date';

// Attach sub-components
Calendar.Header = CalendarHeader;
Calendar.HeaderPrev = CalendarHeaderPrev;
Calendar.HeaderNext = CalendarHeaderNext;
Calendar.HeaderTitle = CalendarHeaderTitle;
Calendar.Content = CalendarContent;
Calendar.Week = CalendarWeek;
Calendar.Days = CalendarDays;
Calendar.Date = CalendarDate;

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

export type {
  ICalendarProps as CalendarProps,
  ICalendarComponentProps,
  ICalendarContentProps,
  ICalendarWeekProps,
  ICalendarDaysProps,
  ICalendarHeaderProps,
  ICalendarHeaderPrevProps,
  ICalendarHeaderNextProps,
  ICalendarHeaderTitleProps,
  ICalendarDateProps,
};
