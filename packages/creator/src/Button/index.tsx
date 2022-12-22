import { Button as ButtonMain } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonText } from './ButtonText';
import { Spinner } from './ButtonSpinner';

export const createButton = ({
  StyledButton,
  StyledButtonText,
  StyledButtonGroup,
  StyledButtonGroupSpacer,
  StyledButtonSpinner,
}: any) => {
  const Button = ButtonMain(StyledButton) as any;
  Button.Text = ButtonText(StyledButtonText);
  Button.Group = ButtonGroup(StyledButtonGroup, StyledButtonGroupSpacer);
  Button.Spinner = Spinner(StyledButtonSpinner);

  Button.displayName = 'Button';
  Button.Text.displayName = 'Button.Text';
  Button.Group.displayName = 'Button.Group';
  Button.Spinner.displayName = 'Button.Spinner';

  return Button;
};
