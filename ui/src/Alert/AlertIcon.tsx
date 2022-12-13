import React, { useContext } from 'react';
import { UIContext } from '../UIProvider';
import type { ViewProps } from 'react-native';
import { useAlert } from './AlertContext';
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  WarningTwoIcon,
} from '../Icon/Icons';

export default function BadgeEndIcon({ children, ...props }: ViewProps) {
  const { StyledAlertIcon } = useContext(UIContext);
  const { status } = useAlert('Alert');

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

  return <StyledAlertIcon {...props}>{children || getIcon()}</StyledAlertIcon>;
}
