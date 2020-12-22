import React from 'react';
import { useRadioGroupState } from '@react-stately/radio';
import {
  AriaInputWrapper,
  RadioAriaProps,
  useRadio,
  useRadioGroup,
} from 'react-native-aria';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusRing, RNAriaRadioGroupProps } from 'react-native-aria';

let RadioContext = React.createContext<any>({});

export function RadioGroup(props: RNAriaRadioGroupProps) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    //@ts-ignore
    <View {...radioGroupProps}>
      {/* @ts-ignore */}
      <Text {...labelProps} nativeID={labelProps.id}>
        {label}
      </Text>
      <RadioContext.Provider
        value={{
          isDisabled: props.isDisabled,
          isReadOnly: props.isReadOnly,
          state,
        }}
      >
        {children}
      </RadioContext.Provider>
    </View>
  );
}

export function Radio(props: RadioAriaProps) {
  let { state, isReadOnly, isDisabled } = React.useContext(RadioContext);
  const inputRef = React.useRef(null);
  let { inputProps } = useRadio(
    { isReadOnly, isDisabled, ...props },
    state,
    inputRef
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  let isSelected = state.selectedValue === props.value;
  const icon = isSelected ? 'radiobox-marked' : 'radiobox-blank';

  return (
    <AriaInputWrapper {...inputProps} {...focusProps} ref={inputRef}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={isFocusVisible ? { borderWidth: 1 } : {}}>
          <MaterialCommunityIcons size={30} color={'green'} name={icon} />
        </View>
        <Text>{props.children}</Text>
      </View>
    </AriaInputWrapper>
  );
}
