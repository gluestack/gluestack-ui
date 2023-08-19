import { ChevronDownIcon, Icon, Select } from '../../../ui-components';
import React from 'react';

const SelectDemo = () => {
  return (
    <Select>
      <Select.Trigger>
        <Select.Input
          color="$textDark50"
          placeholder="Select option"
          placeholderTextColor="gray"
        />
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
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <Select.Item label="Backend Development" value="backend" />
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};

export default SelectDemo;
