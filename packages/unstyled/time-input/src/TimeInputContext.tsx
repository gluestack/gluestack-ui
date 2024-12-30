import { createContext } from '@gluestack-ui/utils';

interface TimeInputContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  timeInputRef?: any;
  handleFocus?: (focusState: boolean, callback: any) => void;
  setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>;
  timeInputFieldRef?: any;
  timeValue: string;
  setTimeValue: React.Dispatch<React.SetStateAction<string>>;
  updateHours: (hours: string) => void;
  updateMinutes: (minutes: string) => void;
  updateSeconds: (seconds: string) => void;
  updateMeridiem: (meridiem: string) => void;
  format: number;
  meridiemHovered: boolean;
  setMeridiemHovered: (meridiemHovered: boolean) => void;
  meridiemPressed: boolean;
  setMeridiemPressed: (meridiemPressed: boolean) => void;
  meridiemValue: string;
}

export const [TimeInputProvider, useTimeInput] =
  createContext<TimeInputContext>('TimeInputContext');
