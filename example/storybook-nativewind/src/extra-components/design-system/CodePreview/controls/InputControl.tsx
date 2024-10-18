import React, { useContext, useState } from 'react';
import { Input, InputField } from '@/components/ui/input';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
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
      <FormControlLabel className="mb-3">
        <FormControlLabelText className="text-xs leading-3 text-typography-400 font-normal">
          {componentProp}
        </FormControlLabelText>
      </FormControlLabel>
      <Input variant="underlined">
        <InputField
          placeholder="Enter label"
          value={value}
          onChange={handleChange}
          className="text-typography-900 dark:text-typography-50 text-sm pt-3 pb-2 px-0"
        />
      </Input>
    </FormControl>
  );
};
