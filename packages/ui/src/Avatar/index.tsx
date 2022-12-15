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
  AvatarTemp.Text = AvatarBadge(StyledAvatarBadge);
  AvatarTemp.Text = AvatarGroup(StyledAvatarGroup);
  AvatarTemp.Text = AvatarImage(StyledAvatarImage, StyledText);

  return AvatarTemp;
};
