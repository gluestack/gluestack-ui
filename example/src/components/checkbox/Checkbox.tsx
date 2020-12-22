import React, { useContext, useRef } from 'react';
import { View } from 'react-native';
import {
  AriaInputWrapper,
  useCheckbox,
  useCheckboxGroupItem,
} from 'react-native-aria';
import { useToggleState } from '@react-stately/toggle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckboxGroupContext } from './CheckboxGroup';
import { useFocusRing } from '@react-aria/focus';
import type { RNAriaCheckboxProps } from 'src/types';

export function Checkbox(props: RNAriaCheckboxProps) {
  let groupState = useContext(CheckboxGroupContext);
  let inputRef = useRef<HTMLInputElement>(null);

  let { isFocusVisible, focusProps } = useFocusRing({
    autoFocus: props.autoFocus,
  });

  let { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...props,
          // Only pass isRequired and validationState to react-aria if they came from
          // the props for this individual checkbox, and not from the group via context.
          isRequired: props.isRequired,
          validationState: props.validationState,
        },
        groupState,
        inputRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(props, useToggleState(props), inputRef);

  let icon = props.isIndeterminate
    ? 'checkbox-intermediate'
    : inputProps.checked
    ? 'checkbox-marked'
    : 'checkbox-blank-outline';

  const iconColor = props.isDisabled ? 'gray' : 'green';

  return (
    <View style={isFocusVisible ? { borderWidth: 2 } : {}}>
      <AriaInputWrapper
        {...inputProps}
        {...focusProps}
        autoFocus={props.autoFocus}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons size={30} color={iconColor} name={icon} />
          {props.children}
        </View>
      </AriaInputWrapper>
    </View>
  );
}
