import React, { useContext } from 'react';
import { UIContext } from '../UIProvider';
import type { ViewProps } from 'react-native';
import { useAlert } from './AlertContext';

export default function BadgeEndIcon({ children, ...props }: ViewProps) {
  const { StyledAlertIcon } = useContext(UIContext);
  const { status }: any = useAlert('AlertContext');

  // eslint-disable-next-line no-console
  console.log('status', status);
  const getIcon = () => {
    switch (status) {
      // case 'error':
      //   return <WarningTwoIcon {...props} />;
      // case 'warning':
      //   return <WarningIcon {...props} />;
      // case 'success':
      //   return <CheckCircleIcon {...props} />;
      // default:
      //   return <InfoIcon {...props} />;
      default:
        return <div>helloe</div>;
    }
  };

  return <StyledAlertIcon {...props}>{children || getIcon()}</StyledAlertIcon>;
}
