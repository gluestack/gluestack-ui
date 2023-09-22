import { createAvatar } from '@gluestack-ui/avatar';
import { Root, Badge, Group, Image, FallbackText } from './styled-components';
import React, { Children, cloneElement } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessibleAvatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});

const AvatarTemp = ({
  children,
  source,
  size,
  ...props
}: React.ComponentProps<typeof AccessibleAvatar> & {
  source: React.ComponentProps<typeof AccessibleAvatar.Image>['source'];
}) => {
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
    <AccessibleAvatar size={size} {...resolvedPropForGluestack}>
      {GuiChildren}
      <AccessibleAvatar.Image source={source} />
    </AccessibleAvatar>
  );
};

const AvatarGroupTemp = ({
  children,
  max = -1,
  ...props
}: React.ComponentProps<typeof AccessibleAvatar.Group> & { max?: number }) => {
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
    <AccessibleAvatar.Group {...resolvedPropForGluestack}>
      {max && max < children.length && max > 0
        ? [...children.slice(0, max), remainingAvatar()].map(
            (child: any, index: any) => {
              return cloneElement(child, { key: index });
            }
          )
        : children}
    </AccessibleAvatar.Group>
  );
};

const AvatarBadgeTemp = (
  props: React.ComponentProps<typeof AccessibleAvatar.Badge>
) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return <AccessibleAvatar.Badge {...resolvedPropForGluestack} />;
};

const AvatarNew = AvatarTemp as any;
AvatarNew.Group = AvatarGroupTemp;
AvatarNew.Badge = AvatarBadgeTemp;

export type IAvatarComponentType<Avatar, Group, BadgeTemp> =
  GenericComponentType<Avatar> & {
    Group: GenericComponentType<Group>;
    Badge: GenericComponentType<BadgeTemp>;
  };

export const Avatar = AvatarNew as IAvatarComponentType<
  typeof AvatarTemp,
  typeof AvatarGroupTemp,
  typeof AvatarBadgeTemp
>;
