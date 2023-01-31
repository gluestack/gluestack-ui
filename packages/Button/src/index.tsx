import type React from 'react';
import { Button as ButtonMain } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonText } from './ButtonText';
import { ButtonSpinner } from './ButtonSpinner';
import type { IButtonComponentType } from './types';

export function createButton<
  ButtonProps,
  TextProps,
  GroupProps,
  GroupSpacerProps,
  SpinnerProps
>({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
}: {
  Root: React.ComponentType<ButtonProps>;
  Text: React.ComponentType<TextProps>;
  Group: React.ComponentType<GroupProps>;
  GroupSpacer: React.ComponentType<GroupSpacerProps>;
  Spinner: React.ComponentType<SpinnerProps>;
}) {
  const Button = ButtonMain(Root) as any;
  Button.Text = ButtonText(Text);
  Button.Group = ButtonGroup(Group, GroupSpacer);
  Button.Spinner = ButtonSpinner(Spinner);

  Button.displayName = 'Button';
  Button.Text.displayName = 'Button.Text';
  Button.Group.displayName = 'Button.Group';
  Button.Spinner.displayName = 'Button.Spinner';

  return Button as IButtonComponentType<
    ButtonProps,
    GroupProps,
    SpinnerProps,
    TextProps
  >;
}
