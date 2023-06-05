import type React from 'react';
import { Button as ButtonMain } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonText } from './ButtonText';
import { ButtonSpinner } from './ButtonSpinner';
import { ButtonIcon } from './ButtonIcon';
import type { IButtonComponentType } from './types';
export function createButton<
  ButtonProps,
  TextProps,
  GroupProps,
  GroupHSpacerProps,
  GroupVSpacerProps,
  SpinnerProps,
  IconProps
>({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
}: {
  Root: React.ComponentType<ButtonProps>;
  Text: React.ComponentType<TextProps>;
  Group: React.ComponentType<GroupProps>;
  GroupHSpacer: React.ComponentType<GroupHSpacerProps>;
  GroupVSpacer: React.ComponentType<GroupVSpacerProps>;
  Spinner: React.ComponentType<SpinnerProps>;
  Icon: React.ComponentType<IconProps>;
}) {
  const Button = ButtonMain(Root) as any;
  Button.Text = ButtonText(Text);
  Button.Group = ButtonGroup(Group, GroupHSpacer, GroupVSpacer);
  Button.Spinner = ButtonSpinner(Spinner);
  Button.Icon = ButtonIcon(Icon);

  Button.displayName = 'Button';
  Button.Text.displayName = 'Button.Text';
  Button.Group.displayName = 'Button.Group';
  Button.Spinner.displayName = 'Button.Spinner';
  Button.Icon.displayName = 'Button.Icon';

  return Button as IButtonComponentType<
    ButtonProps,
    GroupProps,
    GroupHSpacerProps,
    GroupVSpacerProps,
    SpinnerProps,
    TextProps,
    IconProps
  >;
}
