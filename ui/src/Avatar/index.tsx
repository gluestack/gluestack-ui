import Avatar from './Avatar';
import AvatarBadge from './AvatarBadge';
import AvatarGroup from './AvatarGroup';
import AvatarImage from './AvatarImage';

const AvatarTemp = Avatar as any;
AvatarTemp.Badge = AvatarBadge;
AvatarTemp.Group = AvatarGroup;
AvatarTemp.Image = AvatarImage;

export { AvatarTemp as Avatar };
