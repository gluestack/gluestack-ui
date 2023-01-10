import {
  StyledAlert,
  StyledAlertIcon,
  StyledAlertText,
} from '../../styled-components';
import { createAlert } from '@gluestack/ui-creator';

export const Alert = createAlert({
  StyledAlert,
  StyledAlertIcon,
  StyledAlertText,
}) as any;
