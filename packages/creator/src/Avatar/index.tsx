import { Avatar as AvatarMain } from './Avatar';
import AvatarBadge from './AvatarBadge';
import AvatarGroup from './AvatarGroup';
import AvatarImage from './AvatarImage';
import { AvatarFallbackText } from './AvatarFallbackText';

export const createAvatar = ({
  StyledAvatar,
  StyledAvatarBadge,
  StyledAvatarGroup,
  StyledAvatarImage,
  StyledAvatarFallbackText,
}: any) => {
  const Avatar = AvatarMain(StyledAvatar) as any;
  Avatar.Badge = AvatarBadge(StyledAvatarBadge);
  Avatar.Group = AvatarGroup(StyledAvatarGroup);
  Avatar.Image = AvatarImage(StyledAvatarImage);
  Avatar.FallbackText = AvatarFallbackText(StyledAvatarFallbackText);

  Avatar.Badge.displayName = 'Avatar.Badge';
  Avatar.Group.displayName = 'Avatar.Group';
  Avatar.Image.displayName = 'Avatar.Image';
  Avatar.FallbackText.displayName = 'Avatar.FallbackText';

  return Avatar;
};
