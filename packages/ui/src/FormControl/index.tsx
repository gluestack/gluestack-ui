import FormControl from './FormControl';

import FormControlError from './FormControlError';
import FormControlErrorText from './FormControlErrorText';
import FormControlErrorIcon from './FormControlErrorIcon';

import FormControlHelper from './FormControlHelper';
import FormControlHelperText from './FormControlHelper';

import FormControlLabel from './FormControlLabel';
import FormControlLabelText from './FormControlLabelText';

const FormControlTemp = FormControl as any;

FormControlTemp.Error = FormControlError;
FormControlTemp.Error.Icon = FormControlErrorIcon;
FormControlTemp.Error.Text = FormControlErrorText;

FormControlTemp.Label = FormControlLabel;
FormControlTemp.Label.Text = FormControlLabelText;

FormControlTemp.Helper = FormControlHelper;
FormControlTemp.Helper.Text = FormControlHelperText;

export { FormControlTemp as FormControl };
