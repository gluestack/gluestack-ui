import React from 'react';
import { AlertCircleIcon, FormControl, Input } from '../../../ui-components';
const FormControlDemo = () => {
  return (
    <FormControl
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      isRequired={true}
    >
      <FormControl.Label>
        <FormControl.Label.Text>Label</FormControl.Label.Text>
      </FormControl.Label>
      <Input my="$1">
        <Input.Input
          type="text"
          placeholder="placeholder text"
          placeholderTextColor="gray"
        />
      </Input>
      <FormControl.Helper>
        <FormControl.Helper.Text>
          This is a helper text.
        </FormControl.Helper.Text>
      </FormControl.Helper>

      <FormControl.Error>
        <FormControl.Error.Icon as={AlertCircleIcon} />
        <FormControl.Error.Text>
          Atleast 6 characters are required.
        </FormControl.Error.Text>
      </FormControl.Error>
    </FormControl>
  );
};

export default FormControlDemo;
