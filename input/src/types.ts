export interface InputContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  handleFocus?: any;
  isFocusVisible?: boolean;
  isFullWidth?: boolean;
  inputRef?: any;
  setIsFocused?: any;
  inputFieldRef?: any;
}

interface IInputFieldProps {
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
   * 	If true, the input will be focused.
   */
  isFocused?: boolean;
  /**
   * This will set aria-required="true" on web when passed in formcontrol.
   */
  isRequired?: boolean;
  /**
   * If true, prevents the value of the input from being edited.
   */
  isReadOnly?: boolean;
  /**
   * If true, the input element will span the full width of its parent
   */
  isFullWidth?: boolean;
}
export interface IInputProps {
  type?: 'text' | 'password';
  onKeyPress?: (e: any) => void;
  onFocus?: any;
  onBlur?: any;
}

export type IInputComponentType<Root, Icon, Slot, Input> =
  React.ForwardRefExoticComponent<Root & IInputFieldProps> & {
    Icon: React.ForwardRefExoticComponent<Icon>;
    Slot: React.ForwardRefExoticComponent<Slot>;
    Input: React.ForwardRefExoticComponent<Input & IInputProps>;
  };

// export type InputProps = Partial<IInputProps>;
