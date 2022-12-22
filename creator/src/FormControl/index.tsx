import FormControlMain from './FormControl';

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
  const FormControl = FormControlMain(StyledFormControlBox) as any;
  FormControl.Error = FormControlError(StyledFormControlError);
  FormControl.Error.Text = FormControlErrorText(StyledFormControlErrorText);
  FormControl.Error.Icon = FormControlErrorIcon(StyledFormControlErrorIcon);
  FormControl.Label = FormControlLabel({
    StyledFormControlLabel,
    StyledFormControlLabelAstrick,
  });
  FormControl.Label.Text = FormControlLabelText(StyledFormControlLabelText);
  FormControl.Helper = FormControlHelper(StyledFormControlHelper);
  FormControl.Helper.Text = FormControlHelperText(StyledFormControlHelperText);

  FormControl.Error.displayName = 'FormControl.Error';
  FormControl.Error.Text.displayName = 'FormControl.Error.Text';
  FormControl.Error.Icon.displayName = 'FormControl.Error.Icon';
  FormControl.Label.displayName = 'FormControl.Label';
  FormControl.Label.Text.displayName = 'FormControl.Label.Text';
  FormControl.Helper.displayName = 'FormControl.Helper';
  FormControl.Helper.Text.displayName = 'FormControl.Helper.Text';

  return FormControl;
};
