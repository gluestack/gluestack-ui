import { createAvatar } from '@gluestack-ui/avatar';
import { Root, Badge, Group, Image, FallbackText } from './styled-components';
import React, { Children, cloneElement } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';

export const AccessibleAvatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});
// export const Avatar = AccessibleAvatar;
// export const AvatarBadge = AccessibleAvatar.Badge;
// export const AvatarGroup = AccessibleAvatar.Group;
// export const AvatarImage = AccessibleAvatar.Image;
// export const AvatarFallbackText = AccessibleAvatar.FallbackText;

export const Avatar = ({ children, source, size, props }: any) => {
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
      {/* {typeof children !== 'string' ? (
        children[0] ? (
          children.map(({ child, index }: any) => {
            return typeof child !== 'string'
              ? child
              : typeof child === 'string' && (
                  <AccessibleAvatar.FallbackText key={index}>
                    {child}
                  </AccessibleAvatar.FallbackText>
                );
          })
        ) : (
          children
        )
      ) : (
        <AccessibleAvatar.FallbackText>
          {children}
        </AccessibleAvatar.FallbackText>
      )} */}
      {GuiChildren}
      <AccessibleAvatar.Image source={source} />
    </AccessibleAvatar>
  );
};

export const AvatarGroup = ({ children, max, props }: any) => {
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

export const AvatarBadge = (props: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return <AccessibleAvatar.Badge {...resolvedPropForGluestack} />;
};

Avatar.Group = AvatarGroup;
Avatar.Badge = AvatarBadge;
