import { Input, InputField } from '@/components/ui/input';

import {
  FormControl,
  FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
} from '@/components/ui/form-control';

import { AlertCircleIcon } from '@/components/ui/icon';
import React from 'react';

const FormControlDemo = () => {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('12345');
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <FormControl
      isInvalid={isInvalid}
      size="md"
      isDisabled={false}
      isReadOnly={false}
      isRequired={false}
    >
      <FormControlLabel>
        <FormControlLabelText>Password</FormControlLabelText>
      </FormControlLabel>
      <Input className="my-1">
        <InputField
          type="password"
          placeholder="password"
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target?.value)}
          onSubmitEditing={handleSubmit}
        />
      </Input>
      <FormControlHelper>
        <FormControlHelperText>
          Must be atleast 6 characters.
        </FormControlHelperText>
      </FormControlHelper>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          Atleast 6 characters are required.
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

export default FormControlDemo;
