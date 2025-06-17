import { getToastHook } from './Toast';
import { ToastComponent } from './ToastComponent';
import { ToastTitle } from './ToastTitle';
import { ToastDescription } from './ToastDescription';
import type { IToastComponentType } from './types';

export const createToastHook = (
  AnimationWrapper: any,
  AnimatePresence: any
) => {
  return getToastHook(AnimationWrapper, AnimatePresence);
};

export function createToast<Root, Title, Description>({
  Root,
  Title,
  Description,
}: {
  Root: React.ComponentType<Root>;
  Title: React.ComponentType<Title>;
  Description: React.ComponentType<Description>;
}) {
  const Toast = ToastComponent(Root) as any;
  Toast.Title = ToastTitle(Title);
  Toast.Description = ToastDescription(Description);

  Toast.displayName = 'Toast';
  Toast.Title.displayName = 'Toast.Title';
  Toast.Description.displayName = 'Toast.Description';

  return Toast as IToastComponentType<Root, Title, Description>;
}

export { ToastProvider } from './Toast';
