import Avatar from './Avatar';
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
  const AvatarTemp = Avatar(StyledAvatar) as any;
  AvatarTemp.Badge = AvatarBadge(StyledAvatarBadge);
  AvatarTemp.Group = AvatarGroup(StyledAvatarGroup);
  AvatarTemp.Image = AvatarImage(StyledAvatarImage);
  AvatarTemp.FallbackText = AvatarFallbackText(StyledAvatarFallbackText);

  return AvatarTemp;
};
