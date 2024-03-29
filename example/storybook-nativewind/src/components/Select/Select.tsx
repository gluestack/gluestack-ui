import React from 'react';
import { Center } from '@/components/ui/center';
import { Icon, ChevronDownIcon } from '@/components/ui/icon';
import {
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
} from '@/components/ui/select';

const SelectBasic = ({ size = 'md', variant = 'outline', ...props }: any) => {
  return (
    <Select {...props}>
      <SelectTrigger size={size} variant={variant}>
        <SelectInput placeholder="Select option" />
        <SelectIcon className="mr-3" as={ChevronDownIcon} color="red" />
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
