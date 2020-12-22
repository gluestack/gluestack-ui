import React, { useState } from 'react';
import { useRef } from 'react';
import type { RNAriaCheckboxProps } from 'src/types';
import { AriaInputWrapper } from '../src/native';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import { useCheckbox } from '../index';
import { ToggleState, useToggleState } from '@react-stately/toggle';

function Checkbox({
  checkboxState,
  ...props
}: RNAriaCheckboxProps & { checkboxState: ToggleState }) {
  const ref = useRef<any>();
  const { children } = props;
  const { inputProps } = useCheckbox(props, checkboxState, ref);
  return (
    <AriaInputWrapper ref={ref} {...inputProps}>
      {children}
    </AriaInputWrapper>
  );
}

describe('useCheckbox', () => {
  it('handles uncontrolled checkbox', () => {
    let ControlledCheckbox = () => {
      const state = useToggleState();
      return (
        <Checkbox checkboxState={state} accessibilityLabel="test checkbox">
          <Text>Dogs</Text>
        </Checkbox>
      );
    };
    let { getByA11yLabel } = render(<ControlledCheckbox />);

    const checkbox = getByA11yLabel('test checkbox');

    expect(checkbox.props.accessibilityState.checked).toBe(false);

    fireEvent.press(checkbox);

    expect(checkbox.props.accessibilityState.checked).toBe(true);
  });

  it('handles controlled checkbox', () => {
    let ControlledCheckbox = ({ isSelected, onChange }: any) => {
      const state = useToggleState({ isSelected, onChange });
      return (
        <Checkbox checkboxState={state} accessibilityLabel="test checkbox">
          <Text>Hello</Text>
        </Checkbox>
      );
    };

    const mockFn = jest.fn();

    const MyControlledCheckbox = () => {
      const [isSelected, setIsSelected] = useState(false);
      const onChange = (nextVal: boolean) => {
        setIsSelected(nextVal);
        mockFn(nextVal);
      };

      return <ControlledCheckbox isSelected={isSelected} onChange={onChange} />;
    };

    let { getByA11yLabel } = render(<MyControlledCheckbox />);

    const checkbox = getByA11yLabel('test checkbox');

    expect(checkbox.props.accessibilityState.checked).toBe(false);

    fireEvent.press(checkbox);

    expect(checkbox.props.accessibilityState.checked).toBe(true);
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith(true);
  });
});
