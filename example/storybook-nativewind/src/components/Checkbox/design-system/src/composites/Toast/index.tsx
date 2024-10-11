import Root from './styled-components/Root';
import Title from './styled-components/Title';
import Description from './styled-components/Description';
import { createToastHook, createToast } from '@gluestack-ui/toast';

export const useToast = createToastHook();

export const ToastComponent = createToast({
  Root,
  Title,
  Description,
});
