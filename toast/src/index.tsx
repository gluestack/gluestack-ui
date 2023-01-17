import { useToast } from './Toast';
import { ToastComponent } from '../ToastComponent';
import { ToastTitle } from '../ToastTitle';
import { ToastDescription } from '../ToastDescription';
import type { IToastComponentType } from './types';

export const createToastHook = () => {
  return useToast;
};

export function createToastComponent<
  StyledToast,
  StyledToastTitle,
  StyledToastDescription
>({
  StyledToast,
  StyledToastTitle,
  StyledToastDescription,
}: {
  StyledToast: React.ComponentType<StyledToast>;
  StyledToastTitle: React.ComponentType<StyledToastTitle>;
  StyledToastDescription: React.ComponentType<StyledToastDescription>;
}) {
  const Toast = ToastComponent(StyledToast) as any;
  Toast.Title = ToastTitle(StyledToastTitle);
  Toast.Description = ToastDescription(StyledToastDescription);

  Toast.displayName = 'Toast';
  Toast.Title.displayName = 'Toast.Title';
  Toast.Description.displayName = 'Toast.Description';

  return Toast as IToastComponentType<
    StyledToast,
    StyledToastTitle,
    StyledToastDescription
  >;
}
