import {
  StyledAvatar,
  StyledAvatarBadge,
  StyledAvatarGroup,
  StyledAvatarImage,
  StyledText,
} from '../../styled-components';
import { createAvatar } from '@gluestack/ui-creator';

export const Avatar = createAvatar({
  StyledAvatar,
  StyledAvatarBadge,
  StyledAvatarGroup,
  StyledAvatarImage,
  StyledText,
}) as any;
