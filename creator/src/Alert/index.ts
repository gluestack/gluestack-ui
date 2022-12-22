import { Alert as AlertMain } from './Alert';
import { AlertIcon } from './AlertIcon';
import { AlertText } from './AlertText';

export const createAlert = ({
  StyledAlert,
  StyledAlertIcon,
  StyledAlertText,
}: any) => {
  const AlertTemp = AlertMain(StyledAlert) as any;
  AlertTemp.Icon = AlertIcon(StyledAlertIcon);
  AlertTemp.Text = AlertText(StyledAlertText);
  const Alert = AlertTemp as any;
  return Alert;
};
