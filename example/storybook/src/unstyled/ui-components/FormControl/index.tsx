import { createFormControl } from '@gluestack-ui/form-control';
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
} from './styled-components';

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
export const FormControlError = FormControl.Error;
export const FormControlErrorText = FormControl.Error.Text;
export const FormControlErrorIcon = FormControl.Error.Icon;
export const FormControlLabel = FormControl.Label;
export const FormControlLabelText = FormControl.Label.Text;
export const FormControlLabelAstrick = FormControl.Label.Astrick;
export const FormControlHelper = FormControl.Helper;
export const FormControlHelperText = FormControl.Helper.Text;
