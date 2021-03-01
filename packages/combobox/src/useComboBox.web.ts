import { ComboBoxProps } from '@react-types/combobox';
import { ComboBoxState } from '@react-stately/combobox';
import { RefObject } from 'react';
import { KeyboardDelegate } from '@react-types/shared';
import { TextInput, View, Pressable, Touchable } from 'react-native';
import { useComboBox as useComboBoxWeb } from '@react-aria/combobox';
import { mapDomPropsToRN } from '@react-native-aria/utils';
import { TextInputProps } from 'react-native';

interface AriaComboBoxProps<T> extends ComboBoxProps<T> {
  /** The ref for the input element. */
  inputRef: RefObject<TextInput>;
  /** The ref for the list box popover. */
  popoverRef: RefObject<View>;
  /** The ref for the list box. */
  listBoxRef: RefObject<View>;
  /** The ref for the list box popup trigger button.  */
  buttonRef: RefObject<typeof Pressable | Touchable>;
  /** An optional keyboard delegate implementation, to override the default. */
  keyboardDelegate?: KeyboardDelegate;
}

interface ComboBoxAria {
  /** Props for the combo box menu trigger button. */
  buttonProps: any;
  /** Props for the combo box input element. */
  inputProps: TextInputProps;
  /** Props for the combo box menu. */
  listBoxProps: any;
  /** Props for the combo box label element. */
  labelProps: any;
}

/**
 * Provides the behavior and accessibility implementation for a combo box component.
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 * @param props - Props for the combo box.
 * @param state - State for the select, as returned by `useComboBoxState`.
 */
export function useComboBox<T>(
  props: AriaComboBoxProps<T>,
  state: ComboBoxState<T>
): ComboBoxAria {
  // @ts-ignore
  const params = useComboBoxWeb(props, state);

  const onKeyPress = params.inputProps.onKeyDown;
  params.inputProps.onKeyDown = undefined;

  // RN Web supports onKeyPress. It's same as onKeyDown
  // https://necolas.github.io/react-native-web/docs/text-input/
  params.inputProps.onKeyPress = onKeyPress;

  // @ts-ignore
  params.inputProps.blurOnSubmit = false;
  params.inputProps.onKeyDown = undefined;

  return {
    inputProps: mapDomPropsToRN(params.inputProps),
    buttonProps: mapDomPropsToRN(params.buttonProps),
    labelProps: mapDomPropsToRN(params.labelProps),
    listBoxProps: mapDomPropsToRN(params.listBoxProps),
  };
}
