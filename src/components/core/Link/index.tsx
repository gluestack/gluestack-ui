import { Root, Text } from './styled-components';
import { createLink } from '@gluestack-ui/link';

export const Link = createLink({
  Root,
  Text,
});
export const LinkText = Link.Text;
