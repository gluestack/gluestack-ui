import Root from './Root';
import Error from './Error';
import ErrorText from './ErrorText';
import ErrorIcon from './ErrorIcon';
import Label from './Label';
import LabelText from './LabelText';
import LabelAstrick from './LabelAstrick';
import Helper from './Helper';
import HelperText from './HelperText';
import { createFormControl } from '@universa11y/form-control';

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
