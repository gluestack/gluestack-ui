'use client';
import { createAvatar } from '@gluestack-ui/core/avatar/creator';
import React from 'react';
import { Image, Text, View } from 'react-native';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { tva, withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
const SCOPE = 'AVATAR';

const AvatarSizeContext = React.createContext<'sm' | 'md' | 'lg'>('md');

const UIAvatar = createAvatar({
  Root: withStyleContext(View, SCOPE),
  Badge: View,
  Group: View,
  Image: Image,
  FallbackText: Text,
});

const avatarStyle = tva({
  base: 'relative flex shrink-0 rounded-full bg-muted items-center justify-center group-[.avatar-group]/avatar-group:-ml-2.5',
  variants: {
    size: {
      sm: 'h-8 w-8',
      md: 'h-12 w-12',
      lg: 'h-16 w-16',
    },
  },
});

const avatarFallbackTextStyle = tva({
  base: 'text-foreground font-medium text-transform:uppercase',
  parentVariants: {
    size: {
      sm: 'text-2xs',
      md: 'text-xs',
      lg: 'text-sm',
    },
  },
});

const avatarGroupStyle = tva({
  base: 'group/avatar-group flex-row-reverse relative avatar-group',
});

const avatarBadgeStyle = tva({
  base: 'absolute rounded-full border-2 border-background right-0 bottom-0 bg-green-500',
  parentVariants: {
    size: {
      sm: 'h-1.5 w-1.5',
      md: 'h-3 w-3',
      lg: 'h-3.5 w-3.5',
    },
  },
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
>(function Avatar({ className, size = 'md', children, ...props }, ref) {
  return (
    <AvatarSizeContext.Provider value={size}>
      <UIAvatar
        ref={ref}
        {...props}
        className={avatarStyle({ size, class: className })}
        context={{}}
      >
        {children}
      </UIAvatar>
    </AvatarSizeContext.Provider>
  );
});

type IAvatarBadgeProps = React.ComponentPropsWithoutRef<typeof UIAvatar.Badge> &
  VariantProps<typeof avatarBadgeStyle>;

const AvatarBadge = React.forwardRef<
  React.ComponentRef<typeof UIAvatar.Badge>,
  IAvatarBadgeProps
>(function AvatarBadge({ className, ...props }, ref) {
  const size = React.useContext(AvatarSizeContext);
  return (
    <UIAvatar.Badge
      ref={ref}
      {...props}
      className={avatarBadgeStyle({
        parentVariants: { size },
        class: className,
      })}
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
  const size = React.useContext(AvatarSizeContext);
  return (
    <UIAvatar.FallbackText
      ref={ref}
      {...props}
      className={avatarFallbackTextStyle({
        parentVariants: { size },
        class: className,
      })}
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
  AvatarFallback,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
};
