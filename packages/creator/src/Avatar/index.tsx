import Avatar from './Avatar';
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
  const AvatarTemp = Avatar(StyledAvatar) as any;
  AvatarTemp.Badge = AvatarBadge(StyledAvatarBadge);
  AvatarTemp.Group = AvatarGroup(StyledAvatarGroup);
  AvatarTemp.Image = AvatarImage(StyledAvatarImage, StyledText);

  return AvatarTemp;
};
