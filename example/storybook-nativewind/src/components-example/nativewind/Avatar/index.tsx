import React from 'react';
import { createAvatar } from '@gluestack-ui/avatar';

import { View, Text, Image } from 'react-native';
import {
  tva,
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils';
import { cssInterop } from 'nativewind';

const UIAvatar = createAvatar({
  Root: withStyleContext(View),
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
  base: 'rounded-full justify-center items-center relative bg-primary-600',
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
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
    },
  },
});

const avatarGroupStyle = tva({
  base: 'flex-row-reverse relative',
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

export const Avatar = React.forwardRef(
  (
    {
      className,
      variant = 'solid',
      size = 'md',
      action = 'primary',
      ...props
    }: any,
    ref
  ) => {
    return (
      <UIAvatar
        ref={ref}
        {...props}
        className={avatarStyle({ variant, size, action, class: className })}
        context={{ variant, size, action }}
      />
    );
  }
);

export const AvatarBadge = React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext();

    return (
      <UIAvatar.Badge
        ref={ref}
        {...props}
        className={avatarBadgeStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
            action: parentAction,
          },
          variant,
          size,
          action,
          class: className,
        })}
      />
    );
  }
);
export const AvatarFallbackText = React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext();

    return (
      <UIAvatar.FallbackText
        ref={ref}
        {...props}
        className={avatarFallbackTextStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
            action: parentAction,
          },
          variant,
          size,
          action,
          class: className,
        })}
      />
    );
  }
);

export const AvatarImage = React.forwardRef(
  ({ className, ...props }: any, ref) => {
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

export const AvatarGroup = React.forwardRef(
  ({ className, ...props }: any, ref) => {
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
