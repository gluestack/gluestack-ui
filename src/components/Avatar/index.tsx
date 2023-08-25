import { createAvatar } from '@gluestack-ui/avatar';
import { Root, Badge, Group, Image, FallbackText } from './styled-components';
import React, { cloneElement } from 'react';

export const AccessibleAvatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});
export const Avatar = AccessibleAvatar;
export const AvatarBadge = AccessibleAvatar.Badge;
// export const AvatarGroup = AccessibleAvatar.Group;
export const AvatarImage = AccessibleAvatar.Image;
export const AvatarFallbackText = AccessibleAvatar.FallbackText;

export const AvatarGroup = ({ children, max, props }: any) => {
  const remainingAvatar = () => {
    const remainingAvatarNumber = children.length - max;
    return (
      <AccessibleAvatar>
        <AccessibleAvatar.FallbackText>
          {`+ ${remainingAvatarNumber}`}
        </AccessibleAvatar.FallbackText>
      </AccessibleAvatar>
    );
  };
  return (
    <AccessibleAvatar.Group {...props}>
      {max && max < children.length
        ? [...children.slice(0, max), remainingAvatar()].map(
            (child: any, index: any) => {
              return cloneElement(child, { key: index });
            }
          )
        : children}
    </AccessibleAvatar.Group>
  );
};

Avatar.Group = AccessibleAvatar.Group;
