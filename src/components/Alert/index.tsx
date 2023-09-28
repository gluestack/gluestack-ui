import React, { forwardRef } from 'react';
import { createAlert } from '@gluestack-ui/alert';
import { Root, Text, Icon } from './styled-components';
import { GenericComponentType, IColorSchemes } from '../../types';
import { usePropResolution } from '../../hooks/usePropResolution';

const AccessibleAlert = createAlert({
  Root,
  Text,
  Icon,
});

type IAlertProps = {
  status?: 'info' | 'success' | 'warning' | 'error';
  colorScheme?: IColorSchemes;
};

const AlertNewIcon = forwardRef(({ as, ...props }: any, ref?: any) => {
  const resolvedProps = usePropResolution(props);
  return <AccessibleAlert.Icon {...resolvedProps} as={as} ref={ref} />;
});

const AlertNew = forwardRef(
  (
    {
      status: statusProp,
      colorScheme: colorSchemeProp = 'info',
      variant = 'subtle',
      children,
      ...props
    }: any,
    ref?: any
  ) => {
    let status = {};
    if (colorSchemeProp) status = { colorScheme: colorSchemeProp };
    if (statusProp) status = { colorScheme: statusProp };
    return (
      <AccessibleAlert {...props} ref={ref} {...status} variant={variant}>
        {children}
      </AccessibleAlert>
    );
  }
);

const AlertTemp = AlertNew as any;
AlertTemp.Icon = AlertNewIcon;

export type IAlertComponentType<Alert, Icon> = GenericComponentType<
  Alert,
  IAlertProps
> & {
  Icon: GenericComponentType<Icon>;
};

export const Alert = AlertTemp as IAlertComponentType<
  typeof AccessibleAlert,
  typeof AccessibleAlert.Icon
>;
