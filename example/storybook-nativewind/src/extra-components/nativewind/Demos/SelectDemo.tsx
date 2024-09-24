import React from 'react';
import {
  ChevronDownIcon,
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
} from '../../../core-components/nativewind';

const SelectDemo = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectInput placeholder="Select option" />
        <SelectIcon as={ChevronDownIcon} className="mr-3" />
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
            value="Cross Platform Development Process"
          />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default SelectDemo;
