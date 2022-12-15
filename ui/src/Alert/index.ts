import AlertMain from './Alert';
import AlertIcon from './AlertIcon';

export const createAlert = ({ StyledAlert, StyledAlertIcon }: any) => {
  const AlertTemp = AlertMain(StyledAlert) as any;
  AlertTemp.Icon = AlertIcon(StyledAlertIcon);

  return AlertTemp;
};
