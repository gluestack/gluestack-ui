export interface IPinInputContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  inputRef?: any;
  childRefs?: any;
  setInputFieldRef?: any;
  inputValue?: string;
  setInputValue?: any;
  handleBackSpace?: any;
}

export interface IPinInputFieldProps {
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
   * The index of the field.
   */
  index?: number;
}
export interface IPinInputProps {
  type?: 'text' | 'password';
  onFocus?: any;
  onBlur?: any;
  noOfFields?: number;
  onChange?: (value: string) => void;
  /**
   * If true, the input will indicate an error.
   */
  isInvalid?: boolean;
  /**
   * 	If true, the input will be disabled.
   */
  isDisabled?: boolean;
  /**
   * This will set aria-required="true" on web when passed in formcontrol.
   */
  isRequired?: boolean;
  /**
   * If true, prevents the value of the input from being edited.
   */
  isReadOnly?: boolean;
}

export type IPinInputComponentType<Root, Input> =
  React.ForwardRefExoticComponent<
    React.RefAttributes<Root> & React.PropsWithoutRef<Root> & IPinInputProps
  > & {
    Input: React.ForwardRefExoticComponent<
      React.RefAttributes<Input> &
        React.PropsWithoutRef<Input> &
        IPinInputFieldProps
    >;
  };
