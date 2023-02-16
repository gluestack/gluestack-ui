import Root from './styled-components/Root';
import Title from './styled-components/Title';
import Description from './styled-components/Description';
import { createToastHook, createToastComponent } from '@universa11y/toast';

export const useToast = createToastHook();

export const ToastComponent = createToastComponent({
  // @ts-ignore
  Root,
  Title,
  Description,
});
