import { createAvatar } from '@gluestack-ui/avatar';
import { Root, Badge, Group, Image, FallbackText } from './styled-components';
import React, { Children, cloneElement, forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessibleAvatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});

const AvatarTemp = forwardRef(
  ({ children, source, size, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    const GuiChildren = Children.map(children, (child) => {
      if (typeof child === 'string') {
        return (
          <AccessibleAvatar.FallbackText>{child}</AccessibleAvatar.FallbackText>
        );
      } else {
        return child;
      }
    });
    return (
      <AccessibleAvatar size={size} {...resolvedPropForGluestack} ref={ref}>
        {GuiChildren}
        <AccessibleAvatar.Image source={source} />
      </AccessibleAvatar>
    );
  }
);

const AvatarGroupTemp = forwardRef(
  ({ children, max = -1, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
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
      <AccessibleAvatar.Group {...resolvedPropForGluestack} ref={ref}>
        {max && max < children.length && max > 0
          ? [...children.slice(0, max), remainingAvatar()].map(
              (child: any, index: any) => {
                return cloneElement(child, { key: index });
              }
            )
          : children}
      </AccessibleAvatar.Group>
    );
  }
);

const AvatarBadgeTemp = forwardRef((props: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return <AccessibleAvatar.Badge {...resolvedPropForGluestack} ref={ref} />;
});

const AvatarNew = AvatarTemp as any;
AvatarNew.Group = AvatarGroupTemp;
AvatarNew.Badge = AvatarBadgeTemp;

export type IAvatarComponentType<Avatar, Group, BadgeTemp> =
  GenericComponentType<
    Avatar,
    {
      source: React.ComponentProps<typeof AccessibleAvatar.Image>['source'];
    }
  > & {
    Group: GenericComponentType<Group, { max?: number }>;
    Badge: GenericComponentType<BadgeTemp>;
  };

export const Avatar = AvatarNew as IAvatarComponentType<
  typeof AccessibleAvatar,
  typeof AccessibleAvatar.Group,
  typeof AccessibleAvatar.Badge
>;
