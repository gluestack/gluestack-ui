import type React from 'react';
import { CalendarHeaderPrev } from './CalendarHeaderPrev';
import { CalendarHeaderTitle } from './CalendarTitle';
import { CalendarHeaderNext } from './CalendarHeaderNext';
import { CalendarHeader } from './CalendarHeader';
import { CalendarWeek } from './CalendarWeek';
import { CalendarDays } from './CalendarDays';
import { CalendarDate } from './CalendarDate';
import { CalendarContent } from './CalendarContext';
import { Calendar as CalendarMain } from './Calendar';
import type { ICalendarComponentType } from './types';

export function createCalendar<
  Calendar,
  CalendarHeaderPrev,
  CalendarHeaderTitle,
  CalendarHeaderNext,
  CalendarHeader,
  CalendarWeek,
  CalendarDays,
  CalendarContent,
  CalendarDate,
>({
  Root,
  HeaderPrev,
  HeaderTitle,
  HeaderNext,
  Header,
  Week,
  Days,
  Content,
  Date,
}: {
  Root: React.ComponentType<Calendar>;
  HeaderPrev: React.ComponentType<CalendarHeaderPrev>;
  HeaderTitle: React.ComponentType<CalendarHeaderTitle>;
  HeaderNext: React.ComponentType<CalendarHeaderNext>;
  Header: React.ComponentType<CalendarHeader>;
  Week: React.ComponentType<CalendarWeek>;
  Days: React.ComponentType<CalendarDays>;
  Content: React.ComponentType<CalendarContent>;
  Date: React.ComponentType<CalendarDate>;
}) {
  const Calendar = CalendarMain(Root) as any;
  Calendar.HeaderPrev = CalendarHeaderPrev(HeaderPrev);
  Calendar.HeaderTitle = CalendarHeaderTitle(HeaderTitle);
  Calendar.HeaderNext = CalendarHeaderNext(HeaderNext);
  Calendar.Header = CalendarHeader(Header);
  Calendar.Week = CalendarWeek(Week);
  Calendar.Days = CalendarDays(Days);
  Calendar.Content = CalendarContent(Content);
  Calendar.Date = CalendarDate(Date);

  Calendar.displayName = 'Calendar';
  Calendar.HeaderPrev.displayName = 'Calendar.HeaderPrev';
  Calendar.HeaderTitle.displayName = 'Calendar.HeaderTitle';
  Calendar.HeaderNext.displayName = 'Calendar.HeaderNext';
  Calendar.Header.displayName = 'Calendar.Header';
  Calendar.Week.displayName = 'Calendar.Week';
  Calendar.Days.displayName = 'Calendar.Days';
  Calendar.Content.displayName = 'Calendar.Content';
  Calendar.Date.displayName = 'Calendar.Date';

  return Calendar as ICalendarComponentType<
    Calendar,
    CalendarHeaderPrev,
    CalendarHeaderTitle,
    CalendarHeaderNext,
    CalendarHeader,
    CalendarWeek,
    CalendarDays,
    CalendarContent,
    CalendarDate
  >;
}
