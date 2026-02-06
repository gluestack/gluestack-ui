import { DateTimePicker as DateTimePickerMain } from './DateTimePicker';
import { DateTimePickerTrigger } from './DateTimePickerTrigger';
import { DateTimePickerInput } from './DateTimePickerInput';
import { DateTimePickerIcon } from './DateTimePickerIcon';
import type { IDateTimePickerComponentType } from './types';

export {
  DateTimePickerContext,
  useDateTimePicker,
  DateTimePickerProvider,
} from './DateTimePickerContext';
export type {
  DateTimePickerContextValue,
  DateTimePickerMode,
} from './DateTimePickerContext';

export function createDateTimePicker<
  DateTimePickerProps,
  DateTimePickerTriggerProps,
  DateTimePickerInputProps,
  DateTimePickerIconProps,
>({
  Root,
  Trigger,
  Input,
  Icon,
}: {
  Root: React.ComponentType<DateTimePickerProps>;
  Trigger: React.ComponentType<DateTimePickerTriggerProps>;
  Input: React.ComponentType<DateTimePickerInputProps>;
  Icon: React.ComponentType<DateTimePickerIconProps>;
}) {
  const DateTimePicker = DateTimePickerMain(Root) as any;
  DateTimePicker.Trigger = DateTimePickerTrigger(Trigger);
  DateTimePicker.Input = DateTimePickerInput(Input);
  DateTimePicker.Icon = DateTimePickerIcon(Icon);

  DateTimePicker.displayName = 'DateTimePicker';
  DateTimePicker.Trigger.displayName = 'DateTimePicker.Trigger';
  DateTimePicker.Input.displayName = 'DateTimePicker.Input';
  DateTimePicker.Icon.displayName = 'DateTimePicker.Icon';

  return DateTimePicker as IDateTimePickerComponentType<
    DateTimePickerProps,
    DateTimePickerTriggerProps,
    DateTimePickerInputProps,
    DateTimePickerIconProps
  >;
}
