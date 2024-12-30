export interface TimeInputContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
  handleFocus?: any;
  isFocusVisible?: boolean;
  isFullWidth?: boolean;
  timeInputFieldRef?: any;
  setIsFocused?: (value: boolean) => void;
  meridiemHovered?: boolean;
  updateMeridiem?: (value: boolean) => void;
}

export interface ITimeInputFieldProps {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isFullWidth?: boolean;
}
export interface ITimeInputProps {
  onKeyPress?: (e: any) => void;
  onFocus?: any;
  onBlur?: any;
  isHovered?: boolean;
  isDisabled?: boolean;
}
export interface ITimeInputMeridiemProps {
  isPressed?: boolean;
  isHovered?: boolean;
}

export type ITimeInputComponentType<
  Root,
  Hr,
  Min,
  Sec,
  Meridiem,
  MeridiemText
> = React.ForwardRefExoticComponent<
  React.RefAttributes<Root> & React.PropsWithoutRef<Root> & ITimeInputFieldProps
> & {
  Hr: React.ForwardRefExoticComponent<
    React.RefAttributes<Hr> & React.PropsWithoutRef<Hr> & ITimeInputProps
  >;
  Min: React.ForwardRefExoticComponent<
    React.RefAttributes<Min> & React.PropsWithoutRef<Min> & ITimeInputProps
  >;
  Sec: React.ForwardRefExoticComponent<
    React.RefAttributes<Sec> & React.PropsWithoutRef<Sec> & ITimeInputProps
  >;
  Meridiem: React.ForwardRefExoticComponent<
    React.RefAttributes<Meridiem> &
      React.PropsWithoutRef<Meridiem> &
      ITimeInputMeridiemProps
  >;
  MeridiemText: React.ForwardRefExoticComponent<
    React.RefAttributes<MeridiemText> & React.PropsWithoutRef<MeridiemText>
  >;
};
export interface ITimeInputMeridiemProps {
  isPressed?: boolean;
  isDisabled?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  children: JSX.Element | Array<JSX.Element> | ((props: any) => JSX.Element);
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  toggleItem?: () => void;
}
