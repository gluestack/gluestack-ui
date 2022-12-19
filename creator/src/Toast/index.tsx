import { useToast } from './Toast';
import { ToastComponent } from './ToastComponent';
import { ToastTitle } from './ToastTitle';
import { ToastDescription } from './ToastDescription';

export const createToastHook = () => {
  return useToast;
};

export const createToastComponent = ({
  StyledToast,
  StyledToastTitle,
  StyledToastDescription,
}: any) => {
  const ToastTemp = ToastComponent(StyledToast) as any;
  ToastTemp.Title = ToastTitle(StyledToastTitle);
  ToastTemp.Description = ToastDescription(StyledToastDescription);
  const Toast = ToastTemp as any;
  return Toast;
};
