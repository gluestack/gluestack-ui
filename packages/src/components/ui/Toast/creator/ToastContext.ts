import { createContext } from 'react';
import type { IToastContext, IToastInfo } from './types';

export const ToastContext = createContext<IToastContext>({
  toastInfo: {} as IToastInfo,
  setToastInfo: () => {},
  setToast: () => '',
  removeToast: () => {},
  hideAll: () => {},
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {},
  hideToast: () => {},
  AnimationWrapper: { current: null },
  AnimatePresence: { current: null },
});
