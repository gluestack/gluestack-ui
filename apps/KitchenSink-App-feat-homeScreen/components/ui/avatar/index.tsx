'use client';
import React from 'react';
import { createAvatar } from '@gluestack-ui/core/avatar/creator';

import { View, Text, Image, Platform } from 'react-native';

import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
const SCOPE = 'AVATAR';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

const UIAvatar = createAvatar({
  Root: withStyleContext(View, SCOPE),
  Badge: View,
  Group: View,
  Image: Image,
  FallbackText: Text,
});

const avatarStyle = tva({
  base: 'relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full  bg-muted items-center justify-center',
});

const avatarFallbackTextStyle = tva({
  base: 'text-foreground text-xs font-medium',
});

const avatarGroupStyle = tva({
  base: 'flex-row items-center gap-2',
});

const avatarBadgeStyle = tva({
  base: 'absolute h-3 w-3 rounded-full border-2 border-background right-0 bottom-0',
});

const avatarImageStyle = tva({
  base: 'h-full w-full rounded-full absolute',
});

type IAvatarProps = Omit<
  React.ComponentPropsWithoutRef<typeof UIAvatar>,
  'context'
> &
  VariantProps<typeof avatarStyle>;

const Avatar = React.forwardRef<
  React.ComponentRef<typeof UIAvatar>,
  IAvatarProps
>(function Avatar({ className, ...props }, ref) {
  return (
    <UIAvatar
      ref={ref}
      {...props}
      className={avatarStyle({ class: className })}
      context={{}}
    />
  );
});

type IAvatarBadgeProps = React.ComponentPropsWithoutRef<typeof UIAvatar.Badge> &
  VariantProps<typeof avatarBadgeStyle>;

const AvatarBadge = React.forwardRef<
  React.ComponentRef<typeof UIAvatar.Badge>,
  IAvatarBadgeProps
>(function AvatarBadge({ className, ...props }, ref) {
  return (
    <UIAvatar.Badge
      ref={ref}
      {...props}
      className={avatarBadgeStyle({ class: className })}
    />
  );
});

type IAvatarFallbackTextProps = React.ComponentPropsWithoutRef<
  typeof UIAvatar.FallbackText
> &
  VariantProps<typeof avatarFallbackTextStyle>;
const AvatarFallbackText = React.forwardRef<
  React.ComponentRef<typeof UIAvatar.FallbackText>,
  IAvatarFallbackTextProps
>(function AvatarFallbackText({ className, ...props }, ref) {
  return (
    <UIAvatar.FallbackText
      ref={ref}
      {...props}
      className={avatarFallbackTextStyle({ class: className })}
    />
  );
});

type IAvatarImageProps = React.ComponentPropsWithoutRef<typeof UIAvatar.Image> &
  VariantProps<typeof avatarImageStyle>;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof UIAvatar.Image>,
  IAvatarImageProps
>(function AvatarImage({ className, ...props }, ref) {
  return (
    <UIAvatar.Image
      ref={ref}
      {...props}
      className={avatarImageStyle({
        class: className,
      })}
      // @ts-expect-error - resizeMode is React Native specific
      resizeMode="cover"
    />
  );
});

type IAvatarGroupProps = React.ComponentPropsWithoutRef<typeof UIAvatar.Group> &
  VariantProps<typeof avatarGroupStyle>;

const AvatarGroup = React.forwardRef<
  React.ComponentRef<typeof UIAvatar.Group>,
  IAvatarGroupProps
>(function AvatarGroup({ className, ...props }, ref) {
  return (
    <UIAvatar.Group
      ref={ref}
      {...props}
      className={avatarGroupStyle({
        class: className,
      })}
    />
  );
});

// Alias for shadcn compatibility
const AvatarFallback = AvatarFallbackText;

export {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
};
