import Root from './styled-components/Root';
import Error from './styled-components/Error';
import ErrorText from './styled-components/ErrorText';
import ErrorIcon from './styled-components/ErrorIcon';
import Label from './styled-components/Label';
import LabelText from './styled-components/LabelText';
import LabelAstrick from './styled-components/LabelAstrick';
import Helper from './styled-components/Helper';
import HelperText from './styled-components/HelperText';
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
