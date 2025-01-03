import { Dayjs } from 'dayjs';
export interface TimeInputContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  timeInputFieldRef?: any; //remove it
  value: Dayjs;
  setTimeValue: (value: Dayjs) => void;
  meridiem: string;
  setMeridiem: (meridiem: string) => void;
  meridiemHovered: boolean;
  setMeridiemHovered: (meridiemHovered: boolean) => void;
  meridiemPressed: boolean;
  setMeridiemPressed: (meridiemPressed: boolean) => void;
  hourRef: React.RefObject<any>;
  minuteRef: React.RefObject<any>;
  meridiemRef: React.RefObject<any>;
}
export interface ITimeInputProps {
  /**
   * If true, the input will indicate an error.
   */
  isInvalid?: boolean;
  /**
   * 	If true, the input will be disabled.
   */
  isDisabled?: boolean;
  /**
   * 	If true, the input will be hovered.
   */
  isHovered?: boolean;
  /**
   * If true, prevents the value of the input from being edited.
   */
  isReadOnly?: boolean;
  /**
   * This will set aria-required="true" on web when passed in formcontrol.
   */
  isRequired?: boolean;
  /**
   * value that will be set to the input
   */
  value?: Dayjs;
  /**
   * callback function that will be called when the value changes
   */
  onChange?: (value: Dayjs) => void;
}
export interface ITimeInputFieldProps {
  /**
   * 	If true, the input will be hovered.
   */
  'isHovered'?: boolean;
  /**
   * 	If true, the input will be disabled.
   */
  'isDisabled'?: boolean;
  /**
   * the input will be editable.
   */
  'editable'?: boolean;
  /**
   * If true, the input will be focused.
   */
  'isFocused'?: boolean;
  /**
   * If true, the input will be focus visible.
   */
  'isFocusVisible'?: boolean;
  /**
   * aria-label for the input
   */
  'aria-label'?: string;
  /**
   * callback function that will be called when the key is pressed
   */
  'onKeyPress'?: (e: any) => void;
  /**
   * callback function that will be called when the input is focused
   */
  'onFocus'?: (e: any) => void;
  /**
   * callback function that will be called when the input is blurred
   */
  'onBlur'?: (e: any) => void;
  /**
   * id for the input
   */
  'id'?: string;
}
export interface ITimeInputMeridiemProps {
  /**
   * If true, the input will be on active state on press.
   */
  isPressed?: boolean;
  /**
   * If true, the input will be hovered.
   */
  isHovered?: boolean;
  /**
   * callback function that will be called when the input is pressed
   */
  onPress?: () => void;
  /**
   * callback function that will be called when the input is pressed in
   */
  onPressIn?: () => void;
  /**
   * callback function that will be called when the input is pressed out
   */
  onPressOut?: () => void;
  /**
   * If true, the input will be focused.
   */
  isFocused?: boolean;
  /**
   * If true, the input will be focus visible.
   */
  isFocusVisible?: boolean;
  /**
   * callback function that will be called when the input is focused
   */
  onFocus?: (e: any) => void;
  /**
   * callback function that will be called when the input is blurred
   */
  onBlur?: (e: any) => void;
}

export type ITimeInputComponentType<Root, Hr, Min, Meridiem, MeridiemText> =
  React.ForwardRefExoticComponent<
    React.RefAttributes<Root> & React.PropsWithoutRef<Root> & ITimeInputProps
  > & {
    Hr: React.ForwardRefExoticComponent<
      React.RefAttributes<Hr> & React.PropsWithoutRef<Hr> & ITimeInputFieldProps
    >;
    Min: React.ForwardRefExoticComponent<
      React.RefAttributes<Min> &
        React.PropsWithoutRef<Min> &
        ITimeInputFieldProps
    >;
    Meridiem: React.ForwardRefExoticComponent<
      React.RefAttributes<Meridiem> &
        React.PropsWithoutRef<Meridiem> &
        ITimeInputMeridiemProps
    >;
    MeridiemText: React.ForwardRefExoticComponent<
      React.RefAttributes<MeridiemText> & React.PropsWithoutRef<MeridiemText>
    >;
    Text: React.FC;
  };
export interface ITimeInputMeridiemProps {
  /**
   * If true, the input will be on active state on press.
   */
  isPressed?: boolean;
  /**
   * If true, the input will be disabled.
   */
  isDisabled?: boolean;
  /**
   * If true, the input will be hovered.
   */
  isHovered?: boolean;
  /**
   * If true, the input will be focused.
   */
  isFocused?: boolean;
  /**
   * If true, the input will be focus visible.
   */
  isFocusVisible?: boolean;
  children: JSX.Element | Array<JSX.Element> | ((props: any) => JSX.Element);
  /**
   * callback function that will be called when the input is focused
   */
  onFocus?: (e: any) => void;
  /**
   * callback function that will be called when the input is blurred
   */
  onBlur?: (e: any) => void;
}
