import React from 'react';
import type { ViewProps } from 'react-native';
import { useAlert } from './AlertContext';
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  WarningTwoIcon,
} from '../Icon/Icons';

const AlertIcon = (StyledAlertIcon: any) => {
  const { status } = useAlert('Alert');
  ({ children, ...props }: ViewProps) => {
    const getIcon = () => {
      switch (status) {
        case 'error':
          return <WarningTwoIcon {...props} />;
        case 'warning':
          return <WarningIcon {...props} />;
        case 'success':
          return <CheckCircleIcon {...props} />;
        default:
          return <InfoIcon {...props} />;
      }
    };

    return (
      <StyledAlertIcon {...props}>{children || getIcon()}</StyledAlertIcon>
    );
  };
};

export default AlertIcon;
