import { createContext } from '@gluestack-ui/utils';
import { Dayjs } from 'dayjs';

interface TimeInputContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  timeInputFieldRef?: any;
  value: Dayjs;
  setTimeValue: (value: Dayjs) => void;
  meridiem: string;
  setMeridiem: (meridiem: string) => void;
  meridiemHovered: boolean;
  setMeridiemHovered: (meridiemHovered: boolean) => void;
  meridiemPressed: boolean;
  setMeridiemPressed: (meridiemPressed: boolean) => void;
}

export const [TimeInputProvider, useTimeInput] =
  createContext<TimeInputContext>('TimeInputContext');
