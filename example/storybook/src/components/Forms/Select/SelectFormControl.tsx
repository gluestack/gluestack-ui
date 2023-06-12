import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Center,
  ChevronDownIcon,
  Select,
  Icon,
  FormControl,
  WarningIcon,
} from '../../../ui-components';

const colors = [
  { label: 'Red', value: 'red-key' },
  { label: 'Blue', value: 'blue-key' },
  { label: 'Black', value: 'black-key' },
  { label: 'Pink', value: 'pink-key', isDisabled: true },
  { label: 'Green', value: 'green-key' },
];
export const SelectStory = ({ size, variant, ...props }: any) => {
  const items = colors.map((c) => {
    return (
      <Select.Item
        key={c.value}
        label={c.label}
        value={c.value}
        isDisabled={c.isDisabled}
      />
    );
  });
  const [selected, setSelected] = React.useState(colors[0]);
  return (
    <Wrapper>
      <FormControl {...props}>
        <FormControl.Label>
          <FormControl.Label.Text>
            Choose your favorite color
          </FormControl.Label.Text>
        </FormControl.Label>
        <Select
          selectedValue={selected.value}
          selectedLabel={selected.label}
          onValueChange={(value) => {
            setSelected(colors.filter((c) => c.value === value)[0]);
          }}
        >
          <Select.Trigger size={size} variant={variant}>
            <Select.Input placeholder="Select option" />
            <Select.Icon mr="$3">
              <Icon as={ChevronDownIcon} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Backdrop />
            <Select.Content>
              <Select.DragIndicatorWrapper>
                <Select.DragIndicator />
              </Select.DragIndicatorWrapper>
              {items}
            </Select.Content>
          </Select.Portal>
        </Select>
        <FormControl.Helper>
          <FormControl.Helper.Text>
            You can only select one option
          </FormControl.Helper.Text>
        </FormControl.Helper>
        <FormControl.Error>
          <FormControl.Error.Icon>
            <Icon as={WarningIcon} />
          </FormControl.Error.Icon>
          <FormControl.Error.Text>Mandatory field</FormControl.Error.Text>
        </FormControl.Error>
      </FormControl>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon, FormControl, WarningIcon };
