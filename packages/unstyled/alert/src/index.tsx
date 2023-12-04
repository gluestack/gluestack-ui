import { Alert as AlertMain } from './Alert';
import { AlertText } from './AlertText';
import { AlertIcon } from './AlertIcon';
import type { IAlertComponentType } from './types';

export function createAlert<Alert, AlertText, AlertIcon>({
  Root,
  Text,
  Icon,
}: {
  Root: React.ComponentType<Alert>;
  Text: React.ComponentType<AlertText>;
  Icon: React.ComponentType<AlertIcon>;
  AnimatePresence?: React.ComponentType<any>;
}) {
  const Alert: any = AlertMain(Root);
  Alert.Text = AlertText(Text);
  Alert.Icon = AlertIcon(Icon);

  Alert.displayName = 'Alert';
  Alert.Text.displayName = 'Alert.Text';
  Alert.Icon.displayName = 'Alert.Icon';

  return Alert as IAlertComponentType<Alert, AlertText, AlertIcon>;
}
