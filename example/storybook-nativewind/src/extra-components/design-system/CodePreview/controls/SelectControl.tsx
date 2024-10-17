import React, { useContext, useState } from 'react';
import {
  Select,
  ChevronDownIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from '@/components/ui';
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
      <FormControlLabel mb="$3">
        <FormControlLabelText
          fontSize="$xs"
          lineHeight="$xs"
          color="$textDark400"
          fontWeight="$normal"
        >
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
          sx={{
            _light: {
              'color': '$textLight900',
              ':hover': {
                borderColor: '$borderLight400',
              },
            },
            _dark: {
              'color': '$textDark50',
              ':hover': {
                borderColor: '$borderDark600',
              },
            },
          }}
        >
          <SelectInput
            placeholder={`Select ${componentProp}`}
            fontSize="$sm"
            fontWeight="$normal"
            // color="$textLight900"
            sx={{
              _light: {
                color: '$textLight900',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          />
          <SelectIcon mr="$3">
            <ChevronDownIcon
              h="$4"
              w="$4"
              sx={{
                _light: {
                  color: '$backgroundLight500',
                },
                _dark: {
                  color: '$backgroundDark400',
                },
              }}
            />
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
                fontWeight="$normal"
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </FormControl>
  );
};
