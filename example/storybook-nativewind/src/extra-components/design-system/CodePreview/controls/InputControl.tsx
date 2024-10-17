import React, { useContext, useState } from 'react';
import {
  Input,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputField,
} from '@/components/ui';
import { CodePreviewContext } from '../CodePreviewProvider';

export const InputControl = ({ defaultValue, componentProp }: any) => {
  const { propsString, updatePropsString } = useContext(CodePreviewContext);
  const [value, setValue] = useState(defaultValue ?? '');

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    const componentPropValueRegex = new RegExp(componentProp + '="(.*?)"', 'g');

    if (propsString.match(componentPropValueRegex)) {
      updatePropsString(
        propsString.replace(
          componentPropValueRegex,
          `${componentProp}="${inputValue}"`
        )
      );
    } else {
      updatePropsString(`${propsString} ${componentProp}="${inputValue}"`);
    }

    if (inputValue === '') {
      updatePropsString(propsString.replace(componentPropValueRegex, ''));
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
      <Input variant="underlined">
        <InputField
          placeholder="Enter label"
          value={value}
          onChange={handleChange}
          color="$textLight900"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
          fontSize="$sm"
          pt="$3"
          pb="$2"
          px="$0"
        />
      </Input>
    </FormControl>
  );
};
