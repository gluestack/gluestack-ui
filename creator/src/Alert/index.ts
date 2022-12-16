import { Alert as AlertMain } from './Alert';
import { AlertIcon } from './AlertIcon';

export const createAlert = ({ StyledAlert, StyledAlertIcon }: any) => {
  const AlertTemp = AlertMain(StyledAlert) as any;
  AlertTemp.Icon = AlertIcon(StyledAlertIcon);
  const Alert = AlertTemp as any;
  return Alert;
};
