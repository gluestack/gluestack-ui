import React from 'react';
import {
  AlertCircleIcon,
  FormControl,
  FormControlHelper,
  Input,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  InputField,
} from '../../../core-components/themed';
const FormControlDemo = () => {
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>Password</FormControlLabelText>
      </FormControlLabel>
      <Input my="$1">
        <InputField
          type="password"
          defaultValue="12345"
          placeholder="password"
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
