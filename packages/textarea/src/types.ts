export interface TextAreaContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isHovered?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  inputRef?: any;
  handleFocus?: any;
}

interface ITextAreaProps {
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
}
interface IInputProps {
  type?: 'text' | 'password';
}

export type ITextAreaComponentType<Root, Input> = ((
  props: Root & ITextAreaProps
) => JSX.Element) & {
  Input: (props: Input & IInputProps) => JSX.Element;
};
