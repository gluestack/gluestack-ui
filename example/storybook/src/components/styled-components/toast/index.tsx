export { default as Root } from './Root';
export { default as Title } from './Title';
export { default as Description } from './Description';
import { createToastHook, createToast } from '@universa11y/toast';

export const useToast = createToastHook();

export const ToastComponent = createToast({
  // @ts-ignore
  Root,
  Title,
  Description,
});
