import { createAvatar } from '@gluestack-ui/avatar';
import { Root, Badge, Group, Image, FallbackText } from './styled-components';

export const AccessbileAvatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});

type IAccessbileAvatar = typeof AccessbileAvatar;

interface Avatar extends IAccessbileAvatar {
  /**
   * @deprecated Use AvatarBadge instead.
   */
  Badge: IAccessbileAvatar['Badge'];
  /**
   * @deprecated Use AvatarGroup instead.
   */
  Group: IAccessbileAvatar['Group'];
  /**
   * @deprecated Use AvatarImage instead.
   */
  Image: IAccessbileAvatar['Image'];
  /**
   * @deprecated Use AvatarFallbackText instead.
   */
  FallbackText: IAccessbileAvatar['FallbackText'];
}

export const Avatar = AccessbileAvatar as Avatar;

export const AvatarBadge = AccessbileAvatar.Badge;
export const AvatarGroup = AccessbileAvatar.Group;
export const AvatarImage = AccessbileAvatar.Image;
export const AvatarFallbackText = AccessbileAvatar.FallbackText;
