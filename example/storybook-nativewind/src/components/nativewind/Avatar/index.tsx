import React from "react";
import { createAvatar } from '@gluestack-ui/avatar';

import { styled } from '@gluestack-style/react';
import { View, Text, Image } from 'react-native';
import {
  tva,
  withStyleContextAndStates,
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils';

const AccessbileAvatar = createAvatar({
  Root: withStyleContext(View),
  Badge: View,
  Group: View,
  Image: Image,
  FallbackText: Text,
});

const avatarStyle = tva({
  base: 'rounded-full justify-center items-center relative bg-primary-600',
  variants: {
    size: {
  //     'xs': {
  //       w: '$6',
  //       h: '$6',

  //       _badge: {
  //         w: '$2',
  //         h: '$2',
  //       },
  //       _image: {
  //         w: '$full',
  //         h: '$full',
  //       },

  //       _text: {
  //         props: { size: '2xs' },
  //       },
  //     },

  //     'xs': {
  //       w: '$6',
  //       h: '$6',

  //       _badge: {
  //         w: '$2',
  //         h: '$2',
  //       },
  //       _image: {
  //         w: '$full',
  //         h: '$full',
  //       },

  //       _text: {
  //         props: { size: '2xs' },
  //       },
  //     },

      'sm': 'w-8 h-8',
      'md': 'w-12 h-12',
      
      // 'md': {
      //   w: '$12',
      //   h: '$12',

      //   _badge: {
      //     w: '$3',
      //     h: '$3',
      //   },
      //   _image: {
      //     w: '$full',
      //     h: '$full',
      //   },

      //   _text: {
      //     props: { size: 'md' },
      //   },
      // },

  //     'lg': {
  //       w: '$16',
  //       h: '$16',

  //       _badge: {
  //         w: '$4',
  //         h: '$4',
  //       },
  //       _image: {
  //         w: '$full',
  //         h: '$full',
  //       },

  //       _text: {
  //         props: { size: 'xl' },
  //       },
  //     },

  //     'xl': {
  //       w: '$24',
  //       h: '$24',

  //       _badge: {
  //         w: '$6',
  //         h: '$6',
  //       },
  //       _image: {
  //         w: '$full',
  //         h: '$full',
  //       },

  //       _text: {
  //         props: { size: '3xl' },
  //       },
  //     },

  //     '2xl': {
  //       w: '$32',
  //       h: '$32',

  //       _badge: {
  //         w: '$8',
  //         h: '$8',
  //       },
  //       _image: {
  //         w: '$full',
  //         h: '$full',
  //       },

  //       _text: {
  //         props: { size: '5xl' },
  //       },
  //     },
    },
  },
});

const avatarFallbackTextStyle = tva({
  base: 'bg-primary-500',
});

const avatarGroupStyle = tva({
  base: 'bg-primary-500',
});

const avatarBadgeStyle = tva({
  base: 'w-5 h-5 bg-success-500 rounded-full absolute right-0 bottom-0 border-white border-2',
  parentVariants: {
    size: {
      'sm': 'w-2 h-2',
      'md': 'w-3 h-3',
    }
  }
});
const avatarImageStyle = tva({
  base: 'bg-primary-500',
});
const StyledRoot = styled(
  View,
  {
    borderRadius: '$full',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bg: '$primary600',
    variants: {
      size: {
        'xs': {
          w: '$6',
          h: '$6',

          _badge: {
            w: '$2',
            h: '$2',
          },
          _image: {
            w: '$full',
            h: '$full',
          },

          _text: {
            props: { size: '2xs' },
          },
        },

        'sm': {
          w: '$8',
          h: '$8',

          _badge: {
            w: '$2',
            h: '$2',
          },
          _image: {
            w: '$full',
            h: '$full',
          },

          _text: {
            props: { size: 'xs' },
          },
        },

        'md': {
          w: '$12',
          h: '$12',

          _badge: {
            w: '$3',
            h: '$3',
          },
          _image: {
            w: '$full',
            h: '$full',
          },

          _text: {
            props: { size: 'md' },
          },
        },

        'lg': {
          w: '$16',
          h: '$16',

          _badge: {
            w: '$4',
            h: '$4',
          },
          _image: {
            w: '$full',
            h: '$full',
          },

          _text: {
            props: { size: 'xl' },
          },
        },

        'xl': {
          w: '$24',
          h: '$24',

          _badge: {
            w: '$6',
            h: '$6',
          },
          _image: {
            w: '$full',
            h: '$full',
          },

          _text: {
            props: { size: '3xl' },
          },
        },

        '2xl': {
          w: '$32',
          h: '$32',

          _badge: {
            w: '$8',
            h: '$8',
          },
          _image: {
            w: '$full',
            h: '$full',
          },

          _text: {
            props: { size: '5xl' },
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_badge', '_text', '_image'],
    ancestorStyle: ['_avatar'],
  }
);

const StyledBadge = styled(
  View,
  {
    w: '$5',
    h: '$5',
    bg: '$success500',
    borderRadius: '$full',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderColor: 'white',
    borderWidth: 2,
  },
  {
    ancestorStyle: ['_badge'],
  }
);
const StyledGroup = styled(
  View,
  {
    flexDirection: 'row-reverse',
    position: 'relative',
    _avatar: {
      ml: -10,
    },
  },
  {
    descendantStyle: ['_avatar'],
  }
);

const StyledImage = styled(
  Image,
  { w: '$full', h: '$full', borderRadius: '$full', position: 'absolute' },
  {
    ancestorStyle: ['_image'],
  }
);
const StyledFallbackText = styled(
  Text,
  {
    color: '$text0',
    fontWeight: '$semibold',
    props: {
      size: 'xl',
    },
    overflow: 'hidden',
    textTransform: 'uppercase',
    _web: {
      cursor: 'default',
    },
  },
  {
    ancestorStyle: ['_text'],
  } as const
);



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
      <AccessbileAvatar
        ref={ref}
        {...props}
        className={avatarStyle({ variant, size, action, class: className })}
        context={{ variant, size, action }}
      />
    );
  }
);



// export const Avatar = AccessbileAvatar;
export const AvatarBadge =  React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext();

    return (
      <AccessbileAvatar.Badge
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
export const AvatarGroup = AccessbileAvatar.Group;
export const AvatarImage = AccessbileAvatar.Image;
export const AvatarFallbackText = AccessbileAvatar.FallbackText;
