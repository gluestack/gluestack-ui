import Root from './styled-components/Root';
import Badge from './styled-components/Badge';
import Group from './styled-components/Group';
import Image from './styled-components/Image';
import FallbackText from './styled-components/FallbackText';
import { createAvatar } from '@gluestack-ui/avatar';

export const Avatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});
