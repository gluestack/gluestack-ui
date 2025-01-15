import { TimeInput as TimeInputComponent } from './TimeInput';
import { TimeInputHr } from './TimeInputHr';
import { TimeInputMin } from './TimeInputMin';
import type { ITimeInputComponentType } from './types';
import { TimeInputMeridiem } from './TimeInputMeridiem';
import { TimeInputMeridiemText } from './TimeInputMeridiemText';

export const createTimeInput = <
  Root,
  TimeInputHr,
  TimeInputMin,
  TimeInputMeridiem,
  TimeInputMeridiemText
>({
  Root,
  TimeInputHr: Hr,
  TimeInputMin: Min,
  TimeInputMeridiem: Meridiem,
  TimeInputMeridiemText: MeridiemText,
}: {
  Root: React.ComponentType<Root>;
  TimeInputHr: React.ComponentType<TimeInputHr>;
  TimeInputMin: React.ComponentType<TimeInputMin>;
  TimeInputMeridiem: React.ComponentType<TimeInputMeridiem>;
  TimeInputMeridiemText: React.ComponentType<TimeInputMeridiemText>;
}) => {
  const TimeInput = TimeInputComponent(Root) as any;
  TimeInput.Hr = TimeInputHr(Hr);
  TimeInput.Min = TimeInputMin(Min);
  TimeInput.Meridiem = TimeInputMeridiem(Meridiem);
  TimeInput.MeridiemText = TimeInputMeridiemText(MeridiemText);
  TimeInput.displayName = 'TimeInput';
  TimeInput.Hr.displayName = 'TimeInput.Hr';
  TimeInput.Min.displayName = 'TimeInput.Min';
  TimeInput.Meridiem.displayName = 'TimeInput.Meridiem';
  TimeInput.MeridiemText.displayName = 'TimeInput.MeridiemText';

  return TimeInput as ITimeInputComponentType<
    Root,
    TimeInputHr,
    TimeInputMin,
    TimeInputMeridiem,
    TimeInputMeridiemText
  >;
};
