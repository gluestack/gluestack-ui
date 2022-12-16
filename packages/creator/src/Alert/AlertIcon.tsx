import React, { forwardRef } from 'react';
import type { ViewProps } from 'react-native';
import { useAlert } from './AlertContext';
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  WarningTwoIcon,
} from '../Icon/Icons';

export const AlertIcon = (StyledAlertIcon: any) =>
  forwardRef(({ children, ...props }: ViewProps) => {
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
    return (
      <StyledAlertIcon {...props}>{children || getIcon()}</StyledAlertIcon>
    );
  });
