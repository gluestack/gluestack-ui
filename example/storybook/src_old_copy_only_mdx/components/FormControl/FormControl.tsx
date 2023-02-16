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
import { TextInput } from 'react-native';
import React from 'react';

export const AccessibleFormControl = createFormControl({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
}) as any;

export const FormControl = () => {
  return (
    <Wrapper>
      <AccessibleFormControl
        sx={{
          width: '30%',
        }}
      >
        {/* Label Message */}
        <AccessibleFormControl.Label>
          <AccessibleFormControl.Label.Text>
            Password
          </AccessibleFormControl.Label.Text>
        </AccessibleFormControl.Label>

        <TextInput defaultValue="12345" placeholder="password" />

        {/* Helper Text */}
        <AccessibleFormControl.Helper>
          <AccessibleFormControl.Helper.Text>
            Must be atleast 6 characters.
          </AccessibleFormControl.Helper.Text>
        </AccessibleFormControl.Helper>

        {/* Error Message */}
        <AccessibleFormControl.Error>
          <AccessibleFormControl.Error.Icon></AccessibleFormControl.Error.Icon>
          <AccessibleFormControl.Error.Text>
            Atleast 6 characters are required.
          </AccessibleFormControl.Error.Text>
        </AccessibleFormControl.Error>
      </AccessibleFormControl>
    </Wrapper>
  );
};

export default FormControl;
