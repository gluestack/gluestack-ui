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

const SelectBasic = ({
  size = 'md',
  variant = 'outline',
  colorMode,
  ...props
}: any) => {
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
              'as': 'ChevronDownIcon',
              'size': selectIconSize,
              'colorMode': colorMode,
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
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem
            label="Cross Platform Development Process"
            value="cross-platform"
          />
          <SelectItem label="UI Designing" value="ui" isDisabled={true} />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

SelectBasic.description =
  'This is a basic Select component example. Selects are used to select an option from a list of options.';

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
