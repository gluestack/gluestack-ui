import { Button as ButtonMain } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonText } from './ButtonText';
import { ButtonSpinner } from './ButtonSpinner';

export const createButton = ({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
}: any) => {
  const Button = ButtonMain(Root) as any;
  Button.Text = ButtonText(Text);
  Button.Group = ButtonGroup(Group, GroupSpacer);
  Button.Spinner = ButtonSpinner(Spinner);

  Button.displayName = 'Button';
  Button.Text.displayName = 'Button.Text';
  Button.Group.displayName = 'Button.Group';
  Button.Spinner.displayName = 'Button.Spinner';

  return Button;
};
