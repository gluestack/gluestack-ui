import { Avatar as AvatarMain } from './Avatar';
import AvatarBadge from './AvatarBadge';
import AvatarGroup from './AvatarGroup';
import AvatarImage from './AvatarImage';

export const createAvatar = ({
  StyledAvatar,
  StyledAvatarBadge,
  StyledAvatarGroup,
  StyledAvatarImage,
  StyledText,
}: any) => {
  const Avatar = AvatarMain(StyledAvatar) as any;
  Avatar.Badge = AvatarBadge(StyledAvatarBadge);
  Avatar.Group = AvatarGroup(StyledAvatarGroup);
  Avatar.Image = AvatarImage(StyledAvatarImage, StyledText);

  Avatar.Badge.displayName = 'Avatar.Badge';
  Avatar.Group.displayName = 'Avatar.Group';
  Avatar.Image.displayName = 'Avatar.Image';

  return Avatar;
};
