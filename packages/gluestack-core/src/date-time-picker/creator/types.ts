export interface IDateTimePickerComponentType<
  DateTimePickerProps,
  DateTimePickerTriggerProps,
  DateTimePickerInputProps,
  DateTimePickerIconProps,
> {
  (props: DateTimePickerProps): JSX.Element;
  Trigger: React.ForwardRefExoticComponent<DateTimePickerTriggerProps>;
  Input: React.ForwardRefExoticComponent<DateTimePickerInputProps>;
  Icon: React.ForwardRefExoticComponent<DateTimePickerIconProps>;
}
