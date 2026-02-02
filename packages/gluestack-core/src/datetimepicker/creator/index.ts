import { DateTimePicker as DateTimePickerMain } from './DateTimePicker';
import { DateTimePickerTrigger } from './DateTimePickerTrigger';
import { DateTimePickerInput } from './DateTimePickerInput';
import { DateTimePickerIcon } from './DateTimePickerIcon';
import { DateTimePickerPortal } from './DateTimePickerPortal';
import { DateTimePickerBackdrop } from './DateTimePickerBackdrop';
import { DateTimePickerContent } from './DateTimePickerContent';
import { DateTimePickerCalendar } from './DateTimePickerCalendar';
import { DateTimePickerCalendarHeader } from './DateTimePickerCalendarHeader';
import { DateTimePickerCalendarGrid } from './DateTimePickerCalendarGrid';
import { DateTimePickerCalendarDay } from './DateTimePickerCalendarDay';
import { DateTimePickerTimePicker } from './DateTimePickerTimePicker';
import { DateTimePickerModeToggle } from './DateTimePickerModeToggle';
import { DateTimePickerActionBar } from './DateTimePickerActionBar';
import { DateTimePickerActionButton } from './DateTimePickerActionButton';
import { DateTimePickerRangeLabel } from './DateTimePickerRangeLabel';

export function createDateTimePicker<
  DateTimePickerProps,
  DateTimePickerTriggerProps,
  DateTimePickerInputProps,
  DateTimePickerIconProps,
  DateTimePickerPortalProps,
  DateTimePickerBackdropProps,
  DateTimePickerContentProps,
  DateTimePickerCalendarProps,
  DateTimePickerCalendarHeaderProps,
  DateTimePickerCalendarGridProps,
  DateTimePickerCalendarDayProps,
  DateTimePickerTimePickerProps,
  DateTimePickerModeToggleProps,
  DateTimePickerActionBarProps,
  DateTimePickerActionButtonProps,
  DateTimePickerRangeLabelProps
>({
  Root,
  Trigger,
  Input,
  Icon,
  Portal,
  Backdrop,
  Content,
  Calendar,
  CalendarHeader,
  CalendarGrid,
  CalendarDay,
  TimePicker,
  ModeToggle,
  ActionBar,
  ActionButton,
  RangeLabel,
}: {
  Root: React.ComponentType<DateTimePickerProps>;
  Trigger: React.ComponentType<DateTimePickerTriggerProps>;
  Input: React.ComponentType<DateTimePickerInputProps>;
  Icon: React.ComponentType<DateTimePickerIconProps>;
  Portal: React.ComponentType<DateTimePickerPortalProps>;
  Backdrop: React.ComponentType<DateTimePickerBackdropProps>;
  Content: React.ComponentType<DateTimePickerContentProps>;
  Calendar: React.ComponentType<DateTimePickerCalendarProps>;
  CalendarHeader: React.ComponentType<DateTimePickerCalendarHeaderProps>;
  CalendarGrid: React.ComponentType<DateTimePickerCalendarGridProps>;
  CalendarDay: React.ComponentType<DateTimePickerCalendarDayProps>;
  TimePicker: React.ComponentType<DateTimePickerTimePickerProps>;
  ModeToggle: React.ComponentType<DateTimePickerModeToggleProps>;
  ActionBar: React.ComponentType<DateTimePickerActionBarProps>;
  ActionButton: React.ComponentType<DateTimePickerActionButtonProps>;
  RangeLabel: React.ComponentType<DateTimePickerRangeLabelProps>;
}) {
  const DateTimePicker = Root as any;
  DateTimePicker.Trigger = Trigger;
  DateTimePicker.Input = Input;
  DateTimePicker.Icon = Icon;
  DateTimePicker.Portal = Portal;
  DateTimePicker.Backdrop = Backdrop;
  DateTimePicker.Content = Content;
  DateTimePicker.Calendar = Calendar;
  DateTimePicker.CalendarHeader = CalendarHeader;
  DateTimePicker.CalendarGrid = CalendarGrid;
  DateTimePicker.CalendarDay = CalendarDay;
  DateTimePicker.TimePicker = TimePicker;
  DateTimePicker.ModeToggle = ModeToggle;
  DateTimePicker.ActionBar = ActionBar;
  DateTimePicker.ActionButton = ActionButton;
  DateTimePicker.RangeLabel = RangeLabel;

  return DateTimePicker;
}

export {
  DateTimePickerMain,
  DateTimePickerTrigger,
  DateTimePickerInput,
  DateTimePickerIcon,
  DateTimePickerPortal,
  DateTimePickerBackdrop,
  DateTimePickerContent,
  DateTimePickerCalendar,
  DateTimePickerCalendarHeader,
  DateTimePickerCalendarGrid,
  DateTimePickerCalendarDay,
  DateTimePickerTimePicker,
  DateTimePickerModeToggle,
  DateTimePickerActionBar,
  DateTimePickerActionButton,
  DateTimePickerRangeLabel,
};

export * from './types';
export * from './utils';
export { useDateTimePickerContext } from './DateTimePickerContext';
export { useCalendarGridContext, CalendarGridContext } from './DateTimePickerCalendarGrid';
