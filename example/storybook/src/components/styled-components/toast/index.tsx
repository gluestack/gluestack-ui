import Root from './Root';
import Title from './Title';
import Description from './Description';
import { createToastHook, createToastComponent } from '@universa11y/toast';

export const useToast = createToastHook();

export const ToastComponent = createToastComponent({
  // @ts-ignore
  Root,
  Title,
  Description,
});
