import React, { useContext, useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { ChevronDownIcon } from '@/components/ui/icon';
import {
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
} from '@/components/ui/select';
import { CodePreviewContext } from '../CodePreviewProvider';

export const SelectControl = ({
  defaultValue,
  componentProp,
  options,
}: any) => {
  const { propsString, updatePropsString } = useContext(CodePreviewContext);
  const [value, setValue] = useState(defaultValue ?? '');

  const handleChange = (val: any) => {
    const componentPropsValueRegex = new RegExp(
      componentProp + '="(.*?)"',
      'g'
    );
    setValue(val);
    if (propsString.match(componentPropsValueRegex)) {
      updatePropsString(
        propsString.replace(
          componentPropsValueRegex,
          `${componentProp}="${val}"`
        )
      );
    } else {
      updatePropsString(`${propsString} ${componentProp}="${val}"`);
    }

    if (val === '') {
      updatePropsString(propsString.replace(componentPropsValueRegex, ''));
    }
  };

  return (
    <FormControl>
      <FormControlLabel className="mb-3">
        <FormControlLabelText className="text-xs leading-3 text-typography-400 dark:text-background-500 font-normal">
          {componentProp}
        </FormControlLabelText>
      </FormControlLabel>
      <Select
        onValueChange={handleChange}
        value={value}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          variant="underlined"
          className="text-typography-900 hover:border-background-400 dark:text-typography-50 dark:hover:border-background-600"
        >
          <SelectInput
            placeholder={`Select ${componentProp}`}
            className="text-sm text-background-900 dark:text-background-500"
          />
          <SelectIcon className="mr-3">
            <ChevronDownIcon className="h-4 w-4 text-background-500 dark:text-background-700" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {options?.map((option: any, index: any) => (
              <SelectItem
                value={option}
                label={option}
                key={index}
                className="font-normal"
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </FormControl>
  );
};
