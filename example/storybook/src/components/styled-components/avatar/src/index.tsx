import Root from './Root';
import Badge from './Badge';
import Group from './Group';
import Image from './Image';
import FallbackText from './FallbackText';
import { createAvatar } from '@universa11y/avatar';

export const Avatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});
