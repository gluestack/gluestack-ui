import type React from 'react';
import { CalendarHeaderPrev } from './CalendarHeaderPrev';
import { CalendarHeaderTitle } from './CalendarHeaderTitle';
import { CalendarHeaderNext } from './CalendarHeaderNext';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGridWeek } from './CalendarGridWeek';
import { CalendarGridDays } from './CalendarGridDays';
import { CalendarGrid } from './CalendarGrid';
import { Calendar as CalendarMain } from './Calendar';
import type { ICalendarComponentType } from './types';

export function createCalendar<
  Calendar,
  CalendarHeaderPrev,
  CalendarHeaderTitle,
  CalendarHeaderNext,
  CalendarHeader,
  CalendarGridWeek,
  CalendarGridDays,
  CalendarGrid
>({
  Root,
  HeaderPrev,
  HeaderTitle,
  HeaderNext,
  Header,
  GridWeek,
  GridDays,
  Grid,
}: {
  Root: React.ComponentType<Calendar>;
  HeaderPrev: React.ComponentType<CalendarHeaderPrev>;
  HeaderTitle: React.ComponentType<CalendarHeaderTitle>;
  HeaderNext: React.ComponentType<CalendarHeaderNext>;
  Header: React.ComponentType<CalendarHeader>;
  GridWeek: React.ComponentType<CalendarGridWeek>;
  GridDays: React.ComponentType<CalendarGridDays>;
  Grid: React.ComponentType<CalendarGrid>;
}) {
  const Calendar = CalendarMain(Root) as any;
  Calendar.HeaderPrev = CalendarHeaderPrev(HeaderPrev);
  Calendar.HeaderTitle = CalendarHeaderTitle(HeaderTitle);
  Calendar.HeaderNext = CalendarHeaderNext(HeaderNext);
  Calendar.Header = CalendarHeader(Header);
  Calendar.GridWeek = CalendarGridWeek(GridWeek);
  Calendar.GridDays = CalendarGridDays(GridDays);
  Calendar.Grid = CalendarGrid(Grid);

  Calendar.displayName = 'Calendar';
  Calendar.HeaderPrev.displayName = 'Calendar.HeaderPrev';
  Calendar.HeaderTitle.displayName = 'Calendar.HeaderTitle';
  Calendar.HeaderNext.displayName = 'Calendar.HeaderNext';
  Calendar.Header.displayName = 'Calendar.Header';
  Calendar.GridWeek.displayName = 'Calendar.GridWeek';
  Calendar.GridDays.displayName = 'Calendar.GridDays';
  Calendar.Grid.displayName = 'Calendar.Grid';

  return Calendar as ICalendarComponentType<
    Calendar,
    CalendarHeaderPrev,
    CalendarHeaderTitle,
    CalendarHeaderNext,
    CalendarHeader,
    CalendarGridWeek,
    CalendarGridDays,
    CalendarGrid
  >;
}
