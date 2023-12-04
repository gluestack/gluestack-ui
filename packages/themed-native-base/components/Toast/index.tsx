import { Root, Title, Description } from './styled-components';
import { createToast } from '@gluestack-ui/toast';
export * from './hook';

export const Toast = createToast({
  Root,
  Title,
  Description,
});
