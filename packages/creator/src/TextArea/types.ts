// @ts-ignore

import type { SxProps } from '@gluestack/ui-styled';
import type { TextInputProps } from 'react-native';

export interface TextAreaContext {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isFocused?: boolean;
  isFullWidth?: boolean;
  resolveContextChildrenStyle?: any;
  inputRef?: any;
  handleFocus?: any;
}

interface IInputProps extends TextInputProps {
  type?: 'text' | 'password';
  variant: any;
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
  onKeyPress: (e: any) => void;
  sx?: SxProps;
}

export type InputProps = IInputProps;
