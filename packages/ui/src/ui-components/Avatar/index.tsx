import {
  StyledAvatar,
  StyledAvatarBadge,
  StyledAvatarGroup,
  StyledAvatarImage,
  StyledAvatarFallbackText,
} from '../../styled-components';
import { createAvatar } from '@gluestack/ui-creator';

export const Avatar = createAvatar({
  StyledAvatar,
  StyledAvatarBadge,
  StyledAvatarGroup,
  StyledAvatarImage,
  StyledAvatarFallbackText,
}) as any;
