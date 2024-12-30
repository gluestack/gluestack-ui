import { TimeInputHr } from './TimeInputHr';
import { TimeInputMin } from './TimeInputMin';
import { TimeInputSec } from './TimeInputSec';
import type { ITimeInputComponentType } from './types';
import { TimeInputGroup } from './TimeInputGroup';
import { TimeInputMeridiem } from './TimeInputMeridiem';
import { TimeInputMeridiemText } from './TimeInputMeridiemText';

export const createTimeInput = <
  Root,
  TimeInputHr,
  TimeInputMin,
  TimeInputSec,
  TimeInputMeridiem,
  TimeInputMeridiemText
>({
  Root,
  TimeInputHr: Hr,
  TimeInputMin: Min,
  TimeInputSec: Sec,
  TimeInputMeridiem: Meridiem,
  TimeInputMeridiemText: MeridiemText,
}: {
  Root: React.ComponentType<Root>;
  TimeInputHr: React.ComponentType<TimeInputHr>;
  TimeInputMin: React.ComponentType<TimeInputMin>;
  TimeInputSec: React.ComponentType<TimeInputSec>;
  TimeInputMeridiem: React.ComponentType<TimeInputMeridiem>;
  TimeInputMeridiemText: React.ComponentType<TimeInputMeridiemText>;
}) => {
  const TimeInputField = TimeInputGroup(Root) as any;
  TimeInputField.Hr = TimeInputHr(Hr);
  TimeInputField.Min = TimeInputMin(Min);
  TimeInputField.Sec = TimeInputSec(Sec);
  TimeInputField.Meridiem = TimeInputMeridiem(Meridiem);
  TimeInputField.MeridiemText = TimeInputMeridiemText(MeridiemText);
  TimeInputField.displayName = 'TimeInputField';
  TimeInputField.Hr.displayName = 'TimeInputField.Hr';
  TimeInputField.Min.displayName = 'TimeInputField.Min';
  TimeInputField.Sec.displayName = 'TimeInputField.Sec';
  TimeInputField.Meridiem.displayName = 'TimeInputField.Meridiem';
  TimeInputField.MeridiemText.displayName = 'TimeInputField.MeridiemText';

  return TimeInputField as ITimeInputComponentType<
    Root,
    TimeInputHr,
    TimeInputMin,
    TimeInputSec,
    TimeInputMeridiem,
    TimeInputMeridiemText
  >;
};
