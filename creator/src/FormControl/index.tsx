import FormControl from './FormControl';

import FormControlError from './FormControlError';
import FormControlErrorText from './FormControlErrorText';
import FormControlErrorIcon from './FormControlErrorIcon';

import FormControlHelper from './FormControlHelper';
import FormControlHelperText from './FormControlHelper';

import FormControlLabel from './FormControlLabel';
import FormControlLabelText from './FormControlLabelText';

export const createFormControl = ({
  StyledFormControlBox,
  StyledFormControlError,
  StyledFormControlErrorText,
  StyledFormControlErrorIcon,
  StyledFormControlLabel,
  StyledFormControlLabelText,
  StyledFormControlLabelAstrick,
  StyledFormControlHelper,
  StyledFormControlHelperText,
}: any) => {
  const FormControlTemp = FormControl(StyledFormControlBox) as any;
  FormControlTemp.Error = FormControlError(StyledFormControlError);
  FormControlTemp.Error.Text = FormControlErrorText(StyledFormControlErrorText);
  FormControlTemp.Error.Icon = FormControlErrorIcon(StyledFormControlErrorIcon);
  FormControlTemp.Label = FormControlLabel({
    StyledFormControlLabel,
    StyledFormControlLabelAstrick,
  });
  FormControlTemp.Label.Text = FormControlLabelText(StyledFormControlLabelText);
  FormControlTemp.Helper = FormControlHelper(StyledFormControlHelper);
  FormControlTemp.Helper.Text = FormControlHelperText(
    StyledFormControlHelperText
  );

  return FormControlTemp;
};
