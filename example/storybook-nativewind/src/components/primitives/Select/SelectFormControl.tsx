import React from 'react';

import {
  Center,
  ChevronDownIcon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Icon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
} from '@custom-ui/themed';

const colors = [
  { label: 'Red', value: 'red-key' },
  { label: 'Blue', value: 'blue-key' },
  { label: 'Black', value: 'black-key' },
  { label: 'Pink', value: 'pink-key', isDisabled: true },
  { label: 'Green', value: 'green-key' },
];
const SelectWithFormControl = ({ size, variant, ...props }: any) => {
  const items = colors.map((c) => {
    return (
      <SelectItem
        key={c.value}
        label={c.label}
        value={c.value}
        isDisabled={c.isDisabled}
      />
    );
  });
  const [selected, setSelected] = React.useState(colors[0]);
  return (
    <FormControl {...props}>
      <FormControlLabel>
        <FormControlLabelText>Choose your favorite color</FormControlLabelText>
      </FormControlLabel>
      <Select
        selectedValue={selected.value}
        selectedLabel={selected.label}
        onValueChange={(value) => {
          setSelected(colors.filter((c) => c.value === value)[0]);
        }}
      >
        <SelectTrigger size={size} variant={variant}>
          <SelectInput placeholder="Select option" />
          {/* @ts-ignore */}
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {items}
          </SelectContent>
        </SelectPortal>
      </Select>
      <FormControlHelper>
        <FormControlHelperText>
          You can only select one option
        </FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon>
          <Icon as={AlertCircleIcon} />
        </FormControlErrorIcon>
        <FormControlErrorText>Mandatory field</FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

SelectWithFormControl.description =
  'This is a Select component example used with formcontrol to show error and helper text.';

export default SelectWithFormControl;

export {
  Center,
  Select,
  Icon,
  ChevronDownIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  AlertCircleIcon,
};
