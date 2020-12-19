import { useToggleState } from '@react-stately/toggle';
import React from 'react';
import { Text, View } from 'react-native';
import { useToggleButton, AriaButton, useFocusRing } from 'react-native-aria';

export function ToggleButton(props: any) {
  let ref = React.useRef();
  let state = useToggleState(props);
  let { buttonProps, isPressed } = useToggleButton(props, state, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  let style: any = {
    backgroundColor: state.isSelected ? 'blue' : 'green',
    padding: 10,
    alignItems: 'center',
  };

  if (isFocusVisible) {
    style.borderWidth = 2;
    style.borderColor = 'black';
  }

  return (
    <View>
      <AriaButton {...buttonProps} {...focusProps} ref={ref}>
        <View style={style}>{props.children}</View>
      </AriaButton>
      <Text>{isPressed ? 'Pressed' : 'Not pressed'}</Text>
      <Text>{state.isSelected ? 'Selected' : 'Not selected'}</Text>
    </View>
  );
}
