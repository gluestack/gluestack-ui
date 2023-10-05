import React, { forwardRef, createContext, useContext } from 'react';
import { createAlert } from '@gluestack-ui/alert';
import { Root, Text, Icon } from './styled-components';
import { GenericComponentType, IColorSchemes } from '../../types';
import { usePropResolution } from '../../hooks/usePropResolution';
import {
  CheckCircleIcon,
  InfoIcon,
  WarningTwoIcon,
  WarningIcon,
} from '../Icons';

const AccessibleAlert = createAlert({
  Root,
  Text,
  Icon,
});

type IAlertProps = {
  status?: 'info' | 'success' | 'warning' | 'error';
  colorScheme?: IColorSchemes;
};

const AlertContext = createContext({ status: '' });

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
    let contextValue = { status: '' };
    if (colorSchemeProp) status = { colorScheme: colorSchemeProp };
    if (statusProp) {
      status = { colorScheme: statusProp };
      contextValue = { status: statusProp };
    }
    return (
      <AlertContext.Provider value={contextValue}>
        <AccessibleAlert {...props} ref={ref} {...status} variant={variant}>
          {children}
        </AccessibleAlert>
      </AlertContext.Provider>
    );
  }
);

const AlertNewIcon = forwardRef(({ as, ...props }: any, ref?: any) => {
  let asIcon;
  const resolvedProps = usePropResolution(props);
  const { status } = useContext(AlertContext);
  if (as) {
    asIcon = as;
  } else if (status) {
    if (status === 'info') asIcon = InfoIcon;
    if (status === 'success') asIcon = CheckCircleIcon;
    if (status === 'warning') asIcon = WarningIcon;
    if (status === 'error') asIcon = WarningTwoIcon;
  }
  return <AccessibleAlert.Icon {...resolvedProps} as={asIcon} ref={ref} />;
});

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
