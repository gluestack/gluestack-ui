import React from 'react';
// @ts-ignore
import { WarningIcon } from '@gluestack/design-system';
import { Input } from '@gluestack/design-system';

import Wrapper from '../Wrapper';

import { createFormControl } from '@universa11y/form-control';
import {
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
} from '../styled-components/formcontrol';

export const FormControl = createFormControl({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
});

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
