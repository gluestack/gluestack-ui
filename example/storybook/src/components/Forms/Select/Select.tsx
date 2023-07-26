import React from 'react';

import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

const SelectStory = ({ size = 'md', variant = 'outline', ...props }: any) => {
  let selectIconSize = '';
  switch (size) {
    case 'sm':
      selectIconSize = 'xs';
      break;
    case 'md':
      selectIconSize = 'sm';
      break;
    case 'lg':
      selectIconSize = 'lg';
      break;
    case 'xl':
      selectIconSize = 'xl';
      break;
  }

  return (
    <Select {...props}>
      <Select.Trigger size={size} variant={variant}>
        <Select.Input placeholder="Select option" />
        <Select.Icon
          mr={variant === 'underlined' ? 0 : '$3'}
          ml={variant === 'underlined' ? '$3' : 0}
          as={ChevronDownIcon}
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'ChevronDownIcon',
              'size': selectIconSize,
            }),
          }}
        />
      </Select.Trigger>
      <Select.Portal>
        <Select.Backdrop />
        <Select.Content>
          <Select.DragIndicatorWrapper>
            <Select.DragIndicator />
          </Select.DragIndicatorWrapper>
          <Select.Item label="UX Research" value="UX Research" />
          <Select.Item label="Web Development" value="Web Development" />
          <Select.Item
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <Select.Item
            label="UI Designing"
            value="UI Designing"
            isDisabled={true}
          />
          <Select.Item
            label="Backend Development"
            value="Backend Development"
          />
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};

export default SelectStory;

export { Center, Select, Icon, ChevronDownIcon };
