import React, { forwardRef } from 'react';
import { createAlert } from '@gluestack-ui/alert';
import { Root, Text, Icon } from './styled-components';

const AccessibleAlert = createAlert({
  Root,
  Text,
  Icon,
});

type IStatus = { status?: 'info' | 'success' | 'warning' | 'error' };

const AlertNewIcon = forwardRef(
  (
    { ...props }: React.ComponentProps<typeof AccessibleAlert.Icon>,
    ref?: any
  ) => {
    return <AccessibleAlert.Icon {...props} ref={ref} />;
  }
);

const AlertNew = forwardRef(
  (
    {
      status: statusProp,
      // Todo: fix this typing
      // @ts-ignore
      colorScheme: colorSchemeProp = 'info',
      children,
      ...props
    }: React.ComponentProps<typeof AccessibleAlert> & IStatus,
    ref?: any
  ) => {
    let status = {};
    if (colorSchemeProp) status = { colorScheme: colorSchemeProp };
    if (statusProp) status = { colorScheme: statusProp };
    return (
      <AccessibleAlert {...props} ref={ref} {...status}>
        {children}
      </AccessibleAlert>
    );
  }
);

export const Alert = AlertNew as typeof AlertNew & {
  Icon: typeof AlertNewIcon;
};

Alert.Icon = AlertNewIcon;
