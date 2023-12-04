import React, { useContext, useRef } from 'react';
import { Platform, Pressable, View } from 'react-native';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { useFocusRing } from '@react-native-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckboxGroupContext } from './CheckboxGroup';

export function Checkbox(props: any) {
  let groupState = useContext(CheckboxGroupContext);
  let inputRef = useRef<HTMLInputElement>(null);

  let { isFocusVisible, focusProps } = useFocusRing();

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

  let icon: any = props.isIndeterminate
    ? 'checkbox-intermediate'
    : inputProps.checked
    ? 'checkbox-marked'
    : 'checkbox-blank-outline';

  const iconColor = props.isDisabled ? '#d1d1d1' : '#000';

  return (
    <View style={isFocusVisible ? { borderWidth: 2 } : {}}>
      {Platform.OS === 'web' ? (
        <label>
          <VisuallyHidden>
            <input {...inputProps} {...focusProps} ref={inputRef}></input>
          </VisuallyHidden>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons size={30} color={iconColor} name={icon} />
            {props.children}
          </View>
        </label>
      ) : (
        <Pressable {...inputProps} {...focusProps}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons size={30} color={iconColor} name={icon} />
            {props.children}
          </View>
        </Pressable>
      )}
    </View>
  );
}
