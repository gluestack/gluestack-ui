import { StyledAlert, StyledAlertIcon } from '../../styled-components';
import { createAlert } from '@gluestack/ui-creator';

export const Alert = createAlert({
  StyledAlert,
  StyledAlertIcon,
}) as any;
