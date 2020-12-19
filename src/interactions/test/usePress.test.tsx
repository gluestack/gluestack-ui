import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { usePress } from '../src/native/usePress';

const isPressedStyles = {
  opacity: 0.6,
};

function Touchable(props: TouchableOpacityProps) {
  let { pressProps, isPressed } = usePress(props);
  return (
    <TouchableOpacity {...pressProps}>
      <View style={isPressed ? isPressedStyles : null} testID="exampleView">
        <Text>test</Text>
      </View>
    </TouchableOpacity>
  );
}
describe('usePress', function () {
  it('should fire press events based on touch', function () {
    const onPressIn = jest.fn();

    const onPressOut = jest.fn();

    const onPress = jest.fn();

    let { getByTestId } = render(
      <Touchable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        testID="testButton"
      />
    );
    const button = getByTestId('testButton');

    fireEvent(button, 'press');
    fireEvent(button, 'pressIn');
    fireEvent(button, 'pressOut');

    expect(onPressIn).toBeCalled();
    expect(onPress).toBeCalled();
    expect(onPressOut).toBeCalled();
  });

  it('should verify isPressable state', function () {
    const onPressIn = jest.fn();

    const onPressOut = jest.fn();

    let { getByTestId } = render(
      <Touchable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        testID="testButton"
      />
    );

    const button = getByTestId('testButton');

    const exampleView = getByTestId('exampleView');

    fireEvent(button, 'pressIn');
    expect(exampleView.props.style).toBe(isPressedStyles);
    fireEvent(button, 'pressOut');
    expect(exampleView.props.style).toBe(null);
  });
});
