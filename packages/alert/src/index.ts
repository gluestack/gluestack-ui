import { Alert as AlertMain } from './Alert';
import { AlertIcon } from './AlertIcon';
import { AlertText } from './AlertText';
import type { IAlertComponentType } from './types';

export const createAlert = <
  StyledAlertProps,
  StyledAlertIconProps,
  StyledAlertTextProps
>({
  Root,
  Icon,
  Text,
}: {
  Root: React.ComponentType<StyledAlertProps>;
  Icon: React.ComponentType<StyledAlertIconProps>;
  Text: React.ComponentType<StyledAlertTextProps>;
}) => {
  const Alert = AlertMain(Root) as any;
  Alert.Icon = AlertIcon(Icon);
  Alert.Text = AlertText(Text);

  Alert.displayName = 'Alert';
  Alert.Icon.displayName = 'Alert.Icon';
  Alert.Text.displayName = 'Alert.Text';

  return Alert as IAlertComponentType<
    StyledAlertProps,
    StyledAlertIconProps,
    StyledAlertTextProps
  >;
};
