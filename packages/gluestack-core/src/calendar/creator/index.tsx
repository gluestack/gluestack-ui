import { CalendarMain } from './Calendar';
import { CalendarHeaderMain } from './CalendarHeader';
import { CalendarHeaderPrevButtonMain } from './CalendarHeaderPrevButton';
import { CalendarHeaderNextButtonMain } from './CalendarHeaderNextButton';
import { CalendarHeaderTitleMain } from './CalendarHeaderTitle';
import { CalendarHeaderMonthSelectMain } from './CalendarHeaderMonthSelect';
import { CalendarHeaderYearSelectMain } from './CalendarHeaderYearSelect';
import { CalendarWeekDaysHeaderMain } from './CalendarWeekDaysHeader';
import { CalendarWeekDayMain } from './CalendarWeekDay';
import { CalendarBodyMain } from './CalendarBody';
import { CalendarGridMain } from './CalendarGrid';
import { CalendarWeekMain } from './CalendarWeek';
import { CalendarDayMain } from './CalendarDay';
import { CalendarDayTextMain } from './CalendarDayText';
import { CalendarDayIndicatorMain } from './CalendarDayIndicator';
import { CalendarWeekNumberMain } from './CalendarWeekNumber';
import { CalendarFooterMain } from './CalendarFooter';

import type { ICalendarComponentType } from './types';

export function createCalendar<
  RootProps,
  HeaderProps,
  HeaderPrevButtonProps,
  HeaderNextButtonProps,
  HeaderTitleProps,
  HeaderMonthSelectProps,
  HeaderYearSelectProps,
  WeekDaysHeaderProps,
  WeekDayProps,
  BodyProps,
  GridProps,
  WeekProps,
  DayProps,
  DayTextProps,
  DayIndicatorProps,
  WeekNumberProps,
  FooterProps
>({
  Root,
  Header,
  HeaderPrevButton,
  HeaderNextButton,
  HeaderTitle,
  HeaderMonthSelect,
  HeaderYearSelect,
  WeekDaysHeader,
  WeekDay,
  Body,
  Grid,
  Week,
  Day,
  DayText,
  DayIndicator,
  WeekNumber,
  Footer,
}: {
  Root: React.ComponentType<RootProps>;
  Header: React.ComponentType<HeaderProps>;
  HeaderPrevButton: React.ComponentType<HeaderPrevButtonProps>;
  HeaderNextButton: React.ComponentType<HeaderNextButtonProps>;
  HeaderTitle: React.ComponentType<HeaderTitleProps>;
  HeaderMonthSelect: React.ComponentType<HeaderMonthSelectProps>;
  HeaderYearSelect: React.ComponentType<HeaderYearSelectProps>;
  WeekDaysHeader: React.ComponentType<WeekDaysHeaderProps>;
  WeekDay: React.ComponentType<WeekDayProps>;
  Body: React.ComponentType<BodyProps>;
  Grid: React.ComponentType<GridProps>;
  Week: React.ComponentType<WeekProps>;
  Day: React.ComponentType<DayProps>;
  DayText: React.ComponentType<DayTextProps>;
  DayIndicator: React.ComponentType<DayIndicatorProps>;
  WeekNumber: React.ComponentType<WeekNumberProps>;
  Footer: React.ComponentType<FooterProps>;
}) {
  const Calendar = CalendarMain(Root) as any;

  // Create sub-components
  const CalendarWeekComponent = CalendarWeekMain(Week);
  const CalendarDayComponent = CalendarDayMain(Day);
  const CalendarDayTextComponent = CalendarDayTextMain(DayText);
  const CalendarDayIndicatorComponent = CalendarDayIndicatorMain(DayIndicator);
  const CalendarWeekNumberComponent = CalendarWeekNumberMain(WeekNumber);
  const CalendarWeekDayComponent = CalendarWeekDayMain(WeekDay);

  // Create Grid with sub-component dependencies
  const CalendarGridComponent = CalendarGridMain(
    Grid,
    CalendarWeekComponent,
    CalendarDayComponent,
    CalendarDayTextComponent,
    CalendarDayIndicatorComponent,
    CalendarWeekNumberComponent
  );

  // Create WeekDaysHeader with sub-component dependencies
  const CalendarWeekDaysHeaderComponent = CalendarWeekDaysHeaderMain(
    WeekDaysHeader,
    CalendarWeekDayComponent,
    CalendarWeekNumberComponent
  );

  Calendar.Header = CalendarHeaderMain(Header);
  Calendar.HeaderPrevButton = CalendarHeaderPrevButtonMain(HeaderPrevButton);
  Calendar.HeaderNextButton = CalendarHeaderNextButtonMain(HeaderNextButton);
  Calendar.HeaderTitle = CalendarHeaderTitleMain(HeaderTitle);
  Calendar.HeaderMonthSelect = CalendarHeaderMonthSelectMain(HeaderMonthSelect);
  Calendar.HeaderYearSelect = CalendarHeaderYearSelectMain(HeaderYearSelect);
  Calendar.WeekDaysHeader = CalendarWeekDaysHeaderComponent;
  Calendar.WeekDay = CalendarWeekDayComponent;
  Calendar.Body = CalendarBodyMain(Body);
  Calendar.Grid = CalendarGridComponent;
  Calendar.Week = CalendarWeekComponent;
  Calendar.Day = CalendarDayComponent;
  Calendar.DayText = CalendarDayTextComponent;
  Calendar.DayIndicator = CalendarDayIndicatorComponent;
  Calendar.WeekNumber = CalendarWeekNumberComponent;
  Calendar.Footer = CalendarFooterMain(Footer);

  Calendar.displayName = 'Calendar';
  Calendar.Header.displayName = 'Calendar.Header';
  Calendar.HeaderPrevButton.displayName = 'Calendar.HeaderPrevButton';
  Calendar.HeaderNextButton.displayName = 'Calendar.HeaderNextButton';
  Calendar.HeaderTitle.displayName = 'Calendar.HeaderTitle';
  Calendar.HeaderMonthSelect.displayName = 'Calendar.HeaderMonthSelect';
  Calendar.HeaderYearSelect.displayName = 'Calendar.HeaderYearSelect';
  Calendar.WeekDaysHeader.displayName = 'Calendar.WeekDaysHeader';
  Calendar.WeekDay.displayName = 'Calendar.WeekDay';
  Calendar.Body.displayName = 'Calendar.Body';
  Calendar.Grid.displayName = 'Calendar.Grid';
  Calendar.Week.displayName = 'Calendar.Week';
  Calendar.Day.displayName = 'Calendar.Day';
  Calendar.DayText.displayName = 'Calendar.DayText';
  Calendar.DayIndicator.displayName = 'Calendar.DayIndicator';
  Calendar.WeekNumber.displayName = 'Calendar.WeekNumber';
  Calendar.Footer.displayName = 'Calendar.Footer';

  return Calendar as ICalendarComponentType<
    RootProps,
    HeaderProps,
    HeaderPrevButtonProps,
    HeaderNextButtonProps,
    HeaderTitleProps,
    HeaderMonthSelectProps,
    HeaderYearSelectProps,
    WeekDaysHeaderProps,
    WeekDayProps,
    BodyProps,
    GridProps,
    WeekProps,
    DayProps,
    DayTextProps,
    DayIndicatorProps,
    WeekNumberProps,
    FooterProps
  >;
}

// Export types
export * from './types';
export { useCalendarContext } from './CalendarContext';
