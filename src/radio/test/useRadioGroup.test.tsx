import type { AriaRadioGroupProps } from '@react-types/radio';
import React, { useContext } from 'react';
import { useRef } from 'react';
import { Text, View } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import { useRadio, useRadioGroup } from '../src/native';
import type { RadioAriaProps } from '../src/web';
import { RadioGroupState, useRadioGroupState } from '@react-stately/radio';
import { AriaInputWrapper } from '../../checkbox';

const radioPropsArray = [
  { value: 'dogs', children: <Text>Dogs</Text> },
  { value: 'cats', children: <Text>Cats</Text> },
  { value: 'dragons', children: <Text>Dragons</Text> },
];

let RadioContext = React.createContext<any>({});

// Checkboxes in RN doesn't have a concept of naming, so ignoring those cases.

function Radio({
  radioGroupState,
  ...props
}: RadioAriaProps & { radioGroupState: RadioGroupState }) {
  const { state, isDisabled } = useContext(RadioContext);
  const ref = useRef<any>();
  const { inputProps } = useRadio(
    {
      ...props,
      ...state,
      isDisabled: isDisabled ?? props.isDisabled,
    },
    radioGroupState,
    ref
  );
  return (
    <AriaInputWrapper ref={ref} {...inputProps}>
      {props.children}
    </AriaInputWrapper>
  );
}

function RadioGroup({
  groupProps,
  radioProps,
}: {
  groupProps: AriaRadioGroupProps;
  radioProps: RadioAriaProps[];
}) {
  const state = useRadioGroupState(groupProps);
  const { radioGroupProps, labelProps } = useRadioGroup(groupProps, state);

  return (
    <RadioContext.Provider value={{ state, isDisabled: groupProps.isDisabled }}>
      {/* @ts-ignore */}
      <View {...radioGroupProps}>
        {groupProps.label && (
          //@ts-ignore
          <Text {...labelProps}>{groupProps.label}</Text>
        )}
        <Radio radioGroupState={state} {...radioProps[0]} />
        <Radio radioGroupState={state} {...radioProps[1]} />
        <Radio radioGroupState={state} {...radioProps[2]} />
      </View>
    </RadioContext.Provider>
  );
}

describe('useRadioGroup', () => {
  it('handles defaults', () => {
    let onChangeSpy = jest.fn();
    let { getByA11yLabel, getAllByRole, getByText } = render(
      <RadioGroup
        groupProps={{ label: 'Favorite Pet', onChange: onChangeSpy }}
        radioProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text> },
          { value: 'dragons', children: <Text>Dragons</Text> },
        ]}
      />
    );

    let radioGroup = getByA11yLabel('Favorite Pet');
    expect(radioGroup).toBeDefined();

    expect(radioGroup.props.accessibilityRole).toBe('radiogroup');

    let radios = getAllByRole('radio');

    expect(radios.length).toBe(3);

    expect(radios[0].props.accessibilityState.checked).toBe(false);
    expect(radios[1].props.accessibilityState.checked).toBe(false);
    expect(radios[2].props.accessibilityState.checked).toBe(false);

    let dragon = getByText('Dragons');
    fireEvent.press(dragon);

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith('dragons');

    expect(radios[0].props.accessibilityState.checked).toBe(false);
    expect(radios[1].props.accessibilityState.checked).toBe(false);
    expect(radios[2].props.accessibilityState.checked).toBe(true);
  });

  it('can have a default value', () => {
    let { getByText } = render(
      <RadioGroup
        groupProps={{ label: 'Favorite Pet', value: 'cats' }}
        radioProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text> },
          { value: 'dragons', children: <Text>Dragons</Text> },
        ]}
      />
    );

    expect(getByText('Cats').props.accessibilityState.checked).toBe(true);
  });

  it('supports custom props', () => {
    const groupProps = {
      'label': 'Favorite Pet',
      'data-testid': 'favorite-pet',
    };
    let { getByA11yLabel } = render(
      <RadioGroup groupProps={groupProps} radioProps={radioPropsArray} />
    );
    let radioGroup = getByA11yLabel('Favorite Pet');

    expect(radioGroup.props['data-testid']).toBe('favorite-pet');
  });

  it('sets accessibilityState disabled to all children and makes radio disabled when isDisabled is true', () => {
    let { getAllByRole } = render(
      <RadioGroup
        groupProps={{ label: 'Favorite Pet', isDisabled: true }}
        radioProps={radioPropsArray}
      />
    );

    let radio = getAllByRole('radio');

    // RN doesn't have a "disabled" on input, so checking manually that press event doesn't change the state
    fireEvent.press(radio[0]);
    expect(radio[0].props.accessibilityState.checked).toBe(false);

    expect(radio[0].props.accessibilityState.disabled).toBe(true);
    expect(radio[1].props.accessibilityState.disabled).toBe(true);
    expect(radio[2].props.accessibilityState.disabled).toBe(true);
  });

  it("doesn't set accessibilityState disabled or make radio disabled by default", () => {
    let { getAllByRole } = render(
      <RadioGroup
        groupProps={{ label: 'Favorite Pet' }}
        radioProps={radioPropsArray}
      />
    );

    let radios = getAllByRole('radio');
    expect(radios[0].props.accessibilityState.disabled).toBe(false);
    expect(radios[1].props.accessibilityState.disabled).toBe(false);
    expect(radios[2].props.accessibilityState.disabled).toBe(false);
  });

  it('should not update state for readonly checkbox', () => {
    let groupOnChangeSpy = jest.fn();
    let { getByText } = render(
      <RadioGroup
        groupProps={{ label: 'Favorite Pet', onChange: groupOnChangeSpy }}
        radioProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text> },
          {
            value: 'dragons',
            children: <Text>Dragons</Text>,
            isReadOnly: true,
          },
        ]}
      />
    );

    let dragons = getByText('Dragons');

    fireEvent.press(dragons);

    expect(groupOnChangeSpy).toHaveBeenCalledTimes(0);
  });

  it('should not update state for disabled radio', () => {
    let groupOnChangeSpy = jest.fn();
    let { getByText } = render(
      <RadioGroup
        groupProps={{ label: 'Favorite Pet', onChange: groupOnChangeSpy }}
        radioProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text> },
          {
            value: 'dragons',
            children: <Text>Dragons</Text>,
            isDisabled: true,
          },
        ]}
      />
    );

    let dragons = getByText('Dragons');

    fireEvent.press(dragons);

    expect(groupOnChangeSpy).toHaveBeenCalledTimes(0);
  });
});
