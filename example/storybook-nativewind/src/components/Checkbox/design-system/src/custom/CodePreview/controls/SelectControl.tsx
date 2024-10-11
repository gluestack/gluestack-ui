import React, { useContext, useState } from 'react';
import { Select, ChevronDownIcon, FormControl } from '../../../index';
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
      <FormControl.Label mb="$3">
        <FormControl.Label.Text
          fontSize="$xs"
          lineHeight="$xs"
          color="$textDark400"
          fontWeight="$normal"
        >
          {componentProp}
        </FormControl.Label.Text>
      </FormControl.Label>
      <Select
        onValueChange={handleChange}
        value={value}
        defaultValue={defaultValue}
      >
        <Select.Trigger
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
          <Select.Input
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
          <Select.Icon mr="$3">
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
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Backdrop />
          <Select.Content>
            <Select.DragIndicatorWrapper>
              <Select.DragIndicator />
            </Select.DragIndicatorWrapper>
            {options?.map((option: any, index: any) => (
              <Select.Item
                value={option}
                label={option}
                key={index}
                fontWeight="$normal"
              />
            ))}
          </Select.Content>
        </Select.Portal>
      </Select>
    </FormControl>
  );
};
