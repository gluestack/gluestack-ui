import { ComboBoxProps } from '@react-types/combobox';
import { ComboBoxState } from '@react-stately/combobox';
import { RefObject } from 'react';
// @ts-ignore
import { KeyboardDelegate, PressEvent } from '@react-types/shared';
import { TextInput, View, Pressable, Touchable } from 'react-native';

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
  inputProps: any;
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
  let { inputRef } = props;

  // Press handlers for the ComboBox button
  let onPress = () => {
    // Focus the input field in case it isn't focused yet
    inputRef.current?.focus();
    state.toggle();
  };

  const onChangeText = state.setInputValue;

  return {
    labelProps: {},
    buttonProps: {
      onPress,
    },
    inputProps: {
      onChangeText,
      value: state.inputValue,
      onFocus: () => {
        state.setFocused(true);
      },
      onBlur: () => {
        state.setFocused(false);
      },
    },
    listBoxProps: {},
  };
}
