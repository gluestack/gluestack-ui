import { Avatar as AvatarMain } from './Avatar';
import AvatarBadge from './AvatarBadge';
import AvatarGroup from './AvatarGroup';
import AvatarImage from './AvatarImage';
import { AvatarFallbackText } from './AvatarFallbackText';

export const createAvatar = ({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
}: any) => {
  const Avatar = AvatarMain(Root) as any;
  Avatar.Badge = AvatarBadge(Badge);
  Avatar.Group = AvatarGroup(Group);
  Avatar.Image = AvatarImage(Image);
  Avatar.FallbackText = AvatarFallbackText(FallbackText);

  Avatar.displayName = 'Avatar';
  Avatar.Badge.displayName = 'Avatar.Badge';
  Avatar.Group.displayName = 'Avatar.Group';
  Avatar.Image.displayName = 'Avatar.Image';
  Avatar.FallbackText.displayName = 'Avatar.FallbackText';

  return Avatar;
};
