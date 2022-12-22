import { Alert as AlertMain } from './Alert';
import { AlertIcon } from './AlertIcon';
import { AlertText } from './AlertText';

export const createAlert = ({
  StyledAlert,
  StyledAlertIcon,
  StyledAlertText,
}: any) => {
  const Alert = AlertMain(StyledAlert) as any;
  Alert.Icon = AlertIcon(StyledAlertIcon);
  Alert.Text = AlertText(StyledAlertText);

  Alert.displayName = 'Alert';
  Alert.Icon.displayName = 'Alert.Icon';
  Alert.Text.displayName = 'Alert.Text';

  return Alert;
};
