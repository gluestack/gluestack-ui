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
  const Toast = ToastComponent(StyledToast) as any;
  Toast.Title = ToastTitle(StyledToastTitle);
  Toast.Description = ToastDescription(StyledToastDescription);

  Toast.displayName = 'Toast';
  Toast.Title.displayName = 'Toast.Title';
  Toast.Description.displayName = 'Toast.Description';

  return Toast;
};
