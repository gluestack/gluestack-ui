import FormControlMain from './FormControl';

import FormControlError from './FormControlError';
import FormControlErrorText from './FormControlErrorText';
import FormControlErrorIcon from './FormControlErrorIcon';

import FormControlHelper from './FormControlHelper';
import FormControlHelperText from './FormControlHelper';

import FormControlLabel from './FormControlLabel';
import FormControlLabelText from './FormControlLabelText';
import type { IFormControlComponentType } from './types';

export const createFormControl = <
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText
>({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
}: {
  Root: React.ComponentType<Root>;
  Error: React.ComponentType<Error>;
  ErrorText: React.ComponentType<ErrorText>;
  ErrorIcon: React.ComponentType<ErrorIcon>;
  Label: React.ComponentType<Label>;
  LabelText: React.ComponentType<LabelText>;
  LabelAstrick: React.ComponentType<LabelAstrick>;
  Helper: React.ComponentType<Helper>;
  HelperText: React.ComponentType<HelperText>;
}) => {
  const FormControl = FormControlMain(Root) as any;
  FormControl.Error = FormControlError(Error);
  FormControl.Error.Text = FormControlErrorText(ErrorText);
  FormControl.Error.Icon = FormControlErrorIcon(ErrorIcon);
  FormControl.Label = FormControlLabel({
    Label,
    LabelAstrick,
  });
  FormControl.Label.Text = FormControlLabelText(LabelText);
  FormControl.Helper = FormControlHelper(Helper);
  FormControl.Helper.Text = FormControlHelperText(HelperText);

  FormControl.Error.displayName = 'FormControl.Error';
  FormControl.Error.Text.displayName = 'FormControl.Error.Text';
  FormControl.Error.Icon.displayName = 'FormControl.Error.Icon';
  FormControl.Label.displayName = 'FormControl.Label';
  FormControl.Label.Text.displayName = 'FormControl.Label.Text';
  FormControl.Helper.displayName = 'FormControl.Helper';
  FormControl.Helper.Text.displayName = 'FormControl.Helper.Text';

  return FormControl as IFormControlComponentType<
    Root,
    Error,
    ErrorText,
    ErrorIcon,
    Label,
    LabelText,
    LabelAstrick,
    Helper,
    HelperText
  >;
};

export { useFormControl, useFormControlContext } from './useFormControl';
