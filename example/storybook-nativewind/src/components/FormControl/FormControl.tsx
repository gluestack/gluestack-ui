import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from '@/components/ui/form-control';
import { AlertCircleIcon } from 'lucide-react-native';
import { Input, InputField } from '@/components/ui/input';

const FormControlBasic = ({ ...props }: any) => {
  return (
    <FormControl {...props}>
      <FormControlLabel>
        <FormControlLabelText>Password</FormControlLabelText>
      </FormControlLabel>
      <Input>
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

FormControlBasic.description =
  'This is a basic FormControl component example.  A form control is a component that users can interact with to enter or select data.';

export default FormControlBasic;

export {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Input,
  InputField,
  AlertCircleIcon,
};
