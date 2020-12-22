import {
  CheckboxGroupState,
  useCheckboxGroupState,
} from '@react-stately/checkbox';
import React from 'react';
import { useRef } from 'react';
import type { RNAriaCheckboxProps } from 'src/types';
import { AriaInputWrapper, useCheckboxGroup } from '../src/native';
import { useCheckboxGroupItem } from '../src/native';
import type { AriaCheckboxProps } from '@react-types/checkbox';
import { Text, View } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import type { RNAriaCheckboxGroupProps } from '../../types';

const checkboxPropsArray = [
  { value: 'dogs', children: <Text>Dogs</Text> },
  { value: 'cats', children: <Text>Cats</Text> },
  { value: 'dragons', children: <Text>Dragons</Text> },
];

// Checkboxes in RN doesn't have a concept of naming, so ignoring those cases.

function Checkbox({
  checkboxGroupState,
  ...props
}: RNAriaCheckboxProps & { checkboxGroupState: CheckboxGroupState }) {
  const ref = useRef<any>();
  const { children } = props;
  const { inputProps } = useCheckboxGroupItem(props, checkboxGroupState, ref);
  return (
    <AriaInputWrapper ref={ref} {...inputProps}>
      {children}
    </AriaInputWrapper>
  );
}

function CheckboxGroup({
  groupProps,
  checkboxProps,
}: {
  groupProps: RNAriaCheckboxGroupProps;
  checkboxProps: AriaCheckboxProps[];
}) {
  const state = useCheckboxGroupState(groupProps);
  const { groupProps: checkboxGroupProps, labelProps } = useCheckboxGroup(
    groupProps,
    state
  );

  return (
    //@ts-ignore
    <View {...checkboxGroupProps}>
      {groupProps.label && (
        //@ts-ignore
        <Text {...labelProps}>{groupProps.label}</Text>
      )}
      <Checkbox checkboxGroupState={state} {...checkboxProps[0]} />
      <Checkbox checkboxGroupState={state} {...checkboxProps[1]} />
      <Checkbox checkboxGroupState={state} {...checkboxProps[2]} />
    </View>
  );
}

describe('useCheckboxGroup', () => {
  it('handles defaults', () => {
    let onChangeSpy = jest.fn();
    let { getByA11yLabel, getAllByRole, getByText } = render(
      <CheckboxGroup
        groupProps={{ label: 'Favorite Pet', onChange: onChangeSpy }}
        checkboxProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text> },
          { value: 'dragons', children: <Text>Dragons</Text> },
        ]}
      />
    );

    let checkboxGroup = getByA11yLabel('Favorite Pet');
    expect(checkboxGroup).toBeDefined();

    let checkboxes = getAllByRole('checkbox');

    expect(checkboxes.length).toBe(3);

    expect(checkboxes[0].props.accessibilityState.checked).toBe(false);
    expect(checkboxes[1].props.accessibilityState.checked).toBe(false);
    expect(checkboxes[2].props.accessibilityState.checked).toBe(false);

    let dragon = getByText('Dragons');
    fireEvent.press(dragon);

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith(['dragons']);

    expect(checkboxes[0].props.accessibilityState.checked).toBe(false);
    expect(checkboxes[1].props.accessibilityState.checked).toBe(false);
    expect(checkboxes[2].props.accessibilityState.checked).toBe(true);
  });

  it('can have a default value', () => {
    let { getByText } = render(
      <CheckboxGroup
        groupProps={{ label: 'Favorite Pet', value: ['cats'] }}
        checkboxProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text> },
          { value: 'dragons', children: <Text>Dragons</Text> },
        ]}
      />
    );

    expect(getByText('Cats').props.accessibilityState.checked).toBe(true);
  });

  it('supports labeling', () => {
    let { getByA11yLabel } = render(
      <CheckboxGroup
        groupProps={{ label: 'Favorite Pet' }}
        checkboxProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text> },
          { value: 'dragons', children: <Text>Dragons</Text> },
        ]}
      />
    );
    let checkboxGroup = getByA11yLabel('Favorite Pet');

    expect(checkboxGroup).toBeDefined();
  });

  it('supports accessibilityLabel', () => {
    let { getByA11yLabel } = render(
      <CheckboxGroup
        groupProps={{ accessibilityLabel: 'My Favorite Pet' }}
        checkboxProps={checkboxPropsArray}
      />
    );
    let checkboxGroup = getByA11yLabel('My Favorite Pet');
    expect(checkboxGroup).toBeDefined();
  });

  it('supports custom props', () => {
    const groupProps = {
      'label': 'Favorite Pet',
      'data-testid': 'favorite-pet',
    };
    let { getByA11yLabel } = render(
      <CheckboxGroup
        groupProps={groupProps}
        checkboxProps={checkboxPropsArray}
      />
    );
    let checkboxGroup = getByA11yLabel('Favorite Pet');

    expect(checkboxGroup.props['data-testid']).toBe('favorite-pet');
  });

  it('sets accessibilityState disabled to all children and makes checkboxes disabled when isDisabled is true', () => {
    let { getAllByRole } = render(
      <CheckboxGroup
        groupProps={{ label: 'Favorite Pet', isDisabled: true }}
        checkboxProps={checkboxPropsArray}
      />
    );

    let checkbox = getAllByRole('checkbox');

    // RN doesn't have a "disabled" on input, so checking manually that press event doesn't change the state
    fireEvent.press(checkbox[0]);
    expect(checkbox[0].props.accessibilityState.checked).toBe(false);

    expect(checkbox[0].props.accessibilityState.disabled).toBe(true);
    expect(checkbox[1].props.accessibilityState.disabled).toBe(true);
    expect(checkbox[2].props.accessibilityState.disabled).toBe(true);
  });

  it("doesn't set accessibilityState disabled or make checkboxes disabled by default", () => {
    let { getAllByRole } = render(
      <CheckboxGroup
        groupProps={{ label: 'Favorite Pet' }}
        checkboxProps={checkboxPropsArray}
      />
    );

    let checkboxes = getAllByRole('checkbox');
    expect(checkboxes[0].props.accessibilityState.disabled).toBe(false);
    expect(checkboxes[1].props.accessibilityState.disabled).toBe(false);
    expect(checkboxes[2].props.accessibilityState.disabled).toBe(false);
  });

  it("doesn't set accessibilityState disabled or make checkboxes disabled when isDisabled is false", () => {
    let { getAllByRole } = render(
      <CheckboxGroup
        groupProps={{ label: 'Favorite Pet', isDisabled: false }}
        checkboxProps={checkboxPropsArray}
      />
    );

    let checkboxes = getAllByRole('checkbox');
    expect(checkboxes[0].props.accessibilityState.disabled).toBe(false);
    expect(checkboxes[1].props.accessibilityState.disabled).toBe(false);
    expect(checkboxes[2].props.accessibilityState.disabled).toBe(false);
  });

  it("doesn't set accessibilityState disabled or make checkboxes disabled when isDisabled is false on a checkbox", () => {
    let onChangeSpy = jest.fn();

    let { getByText } = render(
      <CheckboxGroup
        groupProps={{
          label: 'Favorite Pet',
          isDisabled: false,
          onChange: onChangeSpy,
        }}
        checkboxProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text>, isDisabled: true },
          { value: 'dragons', children: <Text>Dragons</Text> },
        ]}
      />
    );

    let checkbox = getByText('Cats');
    fireEvent.press(checkbox);

    expect(checkbox.props.accessibilityState.disabled).toBe(true);
    expect(onChangeSpy).toHaveBeenCalledTimes(0);
  });

  it('should not update state for readonly checkbox', () => {
    let groupOnChangeSpy = jest.fn();
    let checkboxOnChangeSpy = jest.fn();
    let { getByText } = render(
      <CheckboxGroup
        groupProps={{ label: 'Favorite Pet', onChange: groupOnChangeSpy }}
        checkboxProps={[
          { value: 'dogs', children: <Text>Dogs</Text> },
          { value: 'cats', children: <Text>Cats</Text> },
          {
            value: 'dragons',
            children: <Text>Dragons</Text>,
            isReadOnly: true,
            onChange: checkboxOnChangeSpy,
          },
        ]}
      />
    );

    let dragons = getByText('Dragons');

    fireEvent.press(dragons);

    expect(groupOnChangeSpy).toHaveBeenCalledTimes(0);
    expect(checkboxOnChangeSpy).toHaveBeenCalledTimes(0);
  });
});
