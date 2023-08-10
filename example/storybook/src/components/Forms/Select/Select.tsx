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
} from '../../../ui-components';

const SelectStory = ({ size = 'md', variant = 'outline', ...props }: any) => {
  return (
    <Select {...props}>
      <SelectTrigger size={size} variant={variant}>
        <SelectInput placeholder="Select option" />
        <SelectIcon
          mr={variant === 'underlined' ? 0 : '$3'}
          ml={variant === 'underlined' ? '$3' : 0}
          as={ChevronDownIcon}
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

export default SelectStory;

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
