import { FormControl, Input, WarningIcon } from '@gluestack/ui';
import React from 'react';

export const Example = () => {
  return (
    <>
      <FormControl isInvalid={true} isRequired={true}>
        {/* Label Message */}
        <FormControl.Label>
          <FormControl.Label.Text>Enter Your name</FormControl.Label.Text>
        </FormControl.Label>

        <Input.Root>
          <Input />
        </Input.Root>

        {/* Helper Text */}
        <FormControl.Helper>
          <FormControl.Helper.Text>
            Must be atleast 6 characters.
          </FormControl.Helper.Text>
        </FormControl.Helper>

        {/* Error Message */}
        <FormControl.Error>
          <FormControl.Error.Icon>
            <WarningIcon sx={{ style: { color: '$red.500' } }} />
          </FormControl.Error.Icon>
          <FormControl.Error.Text>Password Invalid</FormControl.Error.Text>
        </FormControl.Error>
      </FormControl>
    </>
  );
};
