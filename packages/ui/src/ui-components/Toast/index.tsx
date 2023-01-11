import {
  StyledToast,
  StyledToastDescription,
  StyledToastTitle,
} from '../../styled-components';
import { createToastHook, createToastComponent } from '@gluestack/ui-creator';

export const useToast = createToastHook();

export const ToastComponent = createToastComponent({
  StyledToast,
  StyledToastTitle,
  StyledToastDescription,
});
