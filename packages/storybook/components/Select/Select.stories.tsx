import React from 'react';
import { Select, ChevronDownIcon } from '@gluestack/ui';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Wrapper from '../Wrapper';

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'FORMS/Select',
  component: Select,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isDisabled: false,
    isInvalid: false,
  },
};

export default SelectMeta;

type SelectStory = ComponentStory<typeof Select>;

export const Basic: SelectStory = ({
  isDisabled,
  isInvalid,
  ...props
}: any) => {
  return (
    <Wrapper>
      <Select {...props} isDisabled={isDisabled} isInvalid={isInvalid}>
        <Select.ItemList placeholder="Select">
          <Select.Item value="select option" label="select option" />
          <Select.Item value="select option 1" label="select option 1" />
          <Select.Item value="select option 2" label="select option 2" />
          <Select.Item value="select option 3" label="select option 3" />
        </Select.ItemList>
        <Select.Icon>
          <ChevronDownIcon sx={{ style: { w: 20, h: 20 } }} />
        </Select.Icon>
      </Select>
    </Wrapper>
  );
};
