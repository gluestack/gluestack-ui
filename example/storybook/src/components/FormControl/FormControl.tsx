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
} from './styled-component';
import { createFormControl } from '@universa11y/form-control';
import { Wrapper } from '../Wrapper';
import React from 'react';

const FormControlTemp = createFormControl({
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

export const FormControl = () => {
  return (
    <Wrapper>
      <FormControlTemp
        sx={{
          width: '30%',
        }}
      >
        {/* Label Message */}
        <FormControlTemp.Label>
          <FormControlTemp.Label.Text>Password</FormControlTemp.Label.Text>
        </FormControlTemp.Label>

        <input type="password" defaultValue="12345" placeholder="password" />

        {/* Helper Text */}
        <FormControlTemp.Helper>
          <FormControlTemp.Helper.Text>
            Must be atleast 6 characters.
          </FormControlTemp.Helper.Text>
        </FormControlTemp.Helper>

        {/* Error Message */}
        <FormControlTemp.Error>
          <FormControlTemp.Error.Icon></FormControlTemp.Error.Icon>
          <FormControlTemp.Error.Text>
            Atleast 6 characters are required.
          </FormControlTemp.Error.Text>
        </FormControlTemp.Error>
      </FormControlTemp>
    </Wrapper>
  );
};
