import React from 'react';

import {
  Center,
  ChevronDownIcon,
  Select,
  SelectIcon,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Icon,
} from '@gluestack-ui/themed';

const SelectBasic = ({ size = 'md', variant = 'outline', ...props }: any) => {
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
      <SelectTrigger size={size} variant={variant}>
        <SelectInput placeholder="Select option" />
        <SelectIcon
          pr={variant === 'underlined' ? 0 : '$3'}
          pl={variant === 'underlined' ? '$3' : 0}
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
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="UX Research" value="UX Research" />
          <SelectItem label="Web Development" value="Web Development" />
          <SelectItem
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <SelectItem
            label="UI Designing"
            value="UI Designing"
            isDisabled={true}
          />
          <SelectItem label="Backend Development" value="Backend Development" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default SelectBasic;

export {
  Center,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Icon,
  ChevronDownIcon,
};
