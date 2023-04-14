import { Root, Title, Description } from './styled-components';
import { createToast, createToastHook } from '@gluestack-ui/toast';

export const useToast = createToastHook();

export const Toast = createToast({
  Root,
  Title,
  Description,
});
