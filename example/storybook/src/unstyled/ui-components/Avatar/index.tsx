import { createAvatar } from '@gluestack-ui/avatar';
import { Root, Badge, Group, Image, FallbackText } from './styled-components';

export const Avatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});
export const AvatarBadge = Avatar.Badge;
export const AvatarGroup = Avatar.Group;
export const AvatarImage = Avatar.Image;
export const AvatarFallbackText = Avatar.FallbackText;
