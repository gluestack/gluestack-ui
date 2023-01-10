import {
  StyledFormControlBox,
  StyledFormControlError,
  StyledFormControlErrorText,
  StyledFormControlErrorIcon,
  StyledFormControlLabel,
  StyledFormControlLabelText,
  StyledFormControlLabelAstrick,
  StyledFormControlHelper,
  StyledFormControlHelperText,
} from '../../styled-components';
import { createFormControl } from '@gluestack/ui-creator';

export const FormControl = createFormControl({
  StyledFormControlBox,
  StyledFormControlError,
  StyledFormControlErrorText,
  StyledFormControlErrorIcon,
  StyledFormControlLabel,
  StyledFormControlLabelText,
  StyledFormControlLabelAstrick,
  StyledFormControlHelper,
  StyledFormControlHelperText,
}) as any;
