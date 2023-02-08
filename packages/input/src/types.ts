export interface InputContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
  isFullWidth?: boolean;
  inputRef?: any;
  handleFocus?: any;
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

  onFocus?: any;
  onBlur?: any;
}

interface IInputProps {
  type?: 'text' | 'password';
  onKeyPress?: (e: any) => void;
}

export type IInputComponentType<Root, Icon, Input> = ((
  props: Root & IInputFieldProps
) => JSX.Element) & {
  Icon: (props: Icon) => JSX.Element;
  Input: (props: Input & IInputFieldProps) => JSX.Element;
};

export type InputProps = Partial<IInputProps>;
