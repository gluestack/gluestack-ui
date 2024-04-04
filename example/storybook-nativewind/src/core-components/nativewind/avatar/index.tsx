'use client';
import React from 'react';
import { createAvatar } from '@gluestack-ui/avatar';

import { View, Text, Image } from 'react-native';

import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
const SCOPE = 'AVATAR';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const UIAvatar = createAvatar({
  Root: withStyleContext(View, SCOPE),
  Badge: View,
  Group: View,
  Image: Image,
  FallbackText: Text,
});

cssInterop(UIAvatar, { className: 'style' });
cssInterop(UIAvatar.Badge, { className: 'style' });
cssInterop(UIAvatar.Group, { className: 'style' });
cssInterop(UIAvatar.Image, { className: 'style' });
cssInterop(UIAvatar.FallbackText, { className: 'style' });

const avatarStyle = tva({
  base: 'rounded-full justify-center items-center relative bg-primary-600 group-[.avatar-group]/avatar-group:-ml-2.5',
  variants: {
    size: {
      'xs': 'w-6 h-6',
      'sm': 'w-8 h-8',
      'md': 'w-12 h-12',
      'lg': 'w-16 h-16',
      'xl': 'w-24 h-24',
      '2xl': 'w-32 h-32',
    },
  },
});

const avatarFallbackTextStyle = tva({
  base: 'text-typography-0 font-semibold overflow-hidden text-transform:uppercase web:cursor-default',

  parentVariants: {
    size: {
      'xs': 'text-2xs',
      'sm': 'text-xs',
      'md': 'text-base',
      'lg': 'text-xl',
      'xl': 'text-3xl',
      '2xl': 'text-5xl',
    },
  },
});

const avatarGroupStyle = tva({
  base: 'group/avatar-group flex-row-reverse relative avatar-group',
});

const avatarBadgeStyle = tva({
  base: 'w-5 h-5 bg-success-500 rounded-full absolute right-0 bottom-0 border-white border-2',
  parentVariants: {
    size: {
      'xs': 'w-2 h-2',
      'sm': 'w-2 h-2',
      'md': 'w-3 h-3',
      'lg': 'w-4 h-4',
      'xl': 'w-6 h-6',
      '2xl': 'w-8 h-8',
    },
  },
});

const avatarImageStyle = tva({
  base: 'h-full w-full rounded-full absolute',
});

type IAvatarProps = Omit<React.ComponentProps<typeof UIAvatar>, 'context'> &
  VariantProps<typeof avatarStyle>;
export const Avatar = React.forwardRef(
  (
    { className, size = 'md', ...props }: { className?: string } & IAvatarProps,
    ref?: any
  ) => {
    return (
      <UIAvatar
        ref={ref}
        {...props}
        className={avatarStyle({ size, class: className })}
        context={{ size }}
      />
    );
  }
);

type IAvatarBadgeProps = React.ComponentProps<typeof UIAvatar.Badge> &
  VariantProps<typeof avatarBadgeStyle>;
export const AvatarBadge = React.forwardRef(
  (
    { className, size, ...props }: { className?: string } & IAvatarBadgeProps,
    ref?: any
  ) => {
    const { size: parentSize } = useStyleContext(SCOPE);

    return (
      <UIAvatar.Badge
        ref={ref}
        {...props}
        className={avatarBadgeStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
      />
    );
  }
);

type IAvatarFallbackTextProps = React.ComponentProps<
  typeof UIAvatar.FallbackText
> &
  VariantProps<typeof avatarFallbackTextStyle>;
export const AvatarFallbackText = React.forwardRef(
  (
    {
      className,
      size,
      ...props
    }: { className?: string } & IAvatarFallbackTextProps,
    ref?: any
  ) => {
    const { size: parentSize } = useStyleContext(SCOPE);

    return (
      <UIAvatar.FallbackText
        ref={ref}
        {...props}
        className={avatarFallbackTextStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
      />
    );
  }
);

type IAvatarImageProps = React.ComponentProps<typeof UIAvatar.Image> &
  VariantProps<typeof avatarImageStyle>;
export const AvatarImage = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAvatarImageProps,
    ref?: any
  ) => {
    return (
      <UIAvatar.Image
        ref={ref}
        {...props}
        className={avatarImageStyle({
          class: className,
        })}
      />
    );
  }
);

type IAvatarGroupProps = React.ComponentProps<typeof UIAvatar.Group> &
  VariantProps<typeof avatarGroupStyle>;
export const AvatarGroup = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAvatarGroupProps,
    ref?: any
  ) => {
    return (
      <UIAvatar.Group
        ref={ref}
        {...props}
        className={avatarGroupStyle({
          class: className,
        })}
      />
    );
  }
);
