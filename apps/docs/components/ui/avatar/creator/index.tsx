import { Avatar as AvatarMain } from './Avatar';
import AvatarBadge from './AvatarBadge';
import AvatarGroup from './AvatarGroup';
import AvatarImage from './AvatarImage';
import { AvatarFallbackText } from './AvatarFallbackText';
import type React from 'react';
import type { IAvatarComponentType } from './types';

export function createAvatar<
  AvatarProps,
  BadgeProps,
  GroupProps,
  ImageProps,
  FallbackTextProps
>({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
}: {
  Root: React.ComponentType<AvatarProps>;
  Badge: React.ComponentType<BadgeProps>;
  Group: React.ComponentType<GroupProps>;
  Image: React.ComponentType<ImageProps>;
  FallbackText: React.ComponentType<FallbackTextProps>;
}) {
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

  return Avatar as IAvatarComponentType<
    AvatarProps,
    BadgeProps,
    GroupProps,
    ImageProps,
    FallbackTextProps
  >;
}
