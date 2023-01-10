import { Alert as AlertMain } from './Alert';
import { AlertIcon } from './AlertIcon';
import { AlertText } from './AlertText';
import type { IAlertComponentType } from './types';

export const createAlert = <StyledAlert, StyledAlertIcon, StyledAlertText>({
  StyledAlert,
  StyledAlertIcon,
  StyledAlertText,
}: {
  StyledAlert: React.ComponentType<StyledAlert>;
  StyledAlertIcon: React.ComponentType<StyledAlertIcon>;
  StyledAlertText: React.ComponentType<StyledAlertText>;
}) => {
  const Alert = AlertMain(StyledAlert) as any;
  Alert.Icon = AlertIcon(StyledAlertIcon);
  Alert.Text = AlertText(StyledAlertText);

  Alert.displayName = 'Alert';
  Alert.Icon.displayName = 'Alert.Icon';
  Alert.Text.displayName = 'Alert.Text';

  return Alert as IAlertComponentType<
    StyledAlert,
    StyledAlertIcon,
    StyledAlertText
  >;
};
