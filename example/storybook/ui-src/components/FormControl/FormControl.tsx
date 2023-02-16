import React from 'react';
import { FormControl } from '@gluestack/ui-compiled';
// @ts-ignore
import { WarningIcon } from '@gluestack/ui-compiled';
import { Input } from '@gluestack/ui-compiled';

import Wrapper from '../Wrapper';

export const FormControlStory = ({ ...props }) => {
  return (
    <Wrapper>
      <FormControl {...props}>
        {/* Label Message */}
        <FormControl.Label>
          <FormControl.Label.Text>Password</FormControl.Label.Text>
        </FormControl.Label>

        <Input>
          <Input.Input
            type="password"
            defaultValue="12345"
            placeholder="password"
          />
        </Input>

        {/* Helper Text */}
        <FormControl.Helper>
          <FormControl.Helper.Text>
            Must be atleast 6 characters.
          </FormControl.Helper.Text>
        </FormControl.Helper>

        {/* Error Message */}
        <FormControl.Error>
          <FormControl.Error.Icon>
            <WarningIcon sx={{ color: '$red500', height: '$3', width: '$3' }} />
          </FormControl.Error.Icon>
          <FormControl.Error.Text>
            Atleast 6 characters are required.
          </FormControl.Error.Text>
        </FormControl.Error>
      </FormControl>
    </Wrapper>
  );
};
