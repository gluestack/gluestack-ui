import { createContext } from 'react';
import type { IToastContext } from './types';

export const ToastContext = createContext<IToastContext>({
  toastInfo: {},
  setToastInfo: () => {},
  setToast: () => {},
  removeToast: () => {},
  hideAll: () => {},
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {},
  hideToast: () => {},
  AnimationWrapper: null,
  AnimatePresence: null,
});
