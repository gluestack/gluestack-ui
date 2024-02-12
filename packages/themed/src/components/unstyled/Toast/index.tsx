import {
  Root,
  Title,
  Description,
  AnimationWrapper,
} from './styled-components';
import { createToast, createToastHook } from '@gluestack-ui/toast';
import { AnimatePresence } from '@gluestack-style/animation-resolver';
export const useToast = createToastHook(AnimationWrapper, AnimatePresence);

export const Toast = createToast({
  Root,
  Title,
  Description,
});
export const ToastTitle = Toast.Title;
export const ToastDescription = Toast.Description;
