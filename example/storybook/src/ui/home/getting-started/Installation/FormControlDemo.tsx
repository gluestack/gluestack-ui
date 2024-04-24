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
} from '@gluestack-ui/themed';
const FormControlDemo = () => {
  return (
    <FormControl
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      isRequired={true}
    >
      <FormControlLabel>
        <FormControlLabelText>Label</FormControlLabelText>
      </FormControlLabel>
      <Input my="$1">
        <InputField
          type="text"
          placeholder="placeholder text"
          placeholderTextColor="gray"
        />
      </Input>
      <FormControlHelper>
        <FormControlHelperText>This is a helper text.</FormControlHelperText>
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
