import { createAvatar } from '@gluestack-ui/avatar';

import { styled } from '@gluestack-style/react';
import { View, Text, Image } from 'react-native';
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

const StyledText = styled(
  Text,
  {
    color: '$text700',
    flex: 1,
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',

    variants: {
      isTruncated: {
        true: {
          props: {
            // @ts-ignore
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
        },
      },
      bold: {
        true: {
          fontWeight: '$bold',
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
      size: {
        '2xs': {
          fontSize: '$2xs',
        },
        'xs': {
          fontSize: '$xs',
        },

        'sm': {
          fontSize: '$sm',
        },

        'md': {
          fontSize: '$md',
        },

        'lg': {
          fontSize: '$lg',
        },

        'xl': {
          fontSize: '$xl',
        },

        '2xl': {
          fontSize: '$2xl',
        },

        '3xl': {
          fontSize: '$3xl',
        },

        '4xl': {
          fontSize: '$4xl',
        },

        '5xl': {
          fontSize: '$5xl',
        },

        '6xl': {
          fontSize: '$6xl',
        },
      },
      sub: {
        true: {
          fontSize: '$xs',
        },
      },
      italic: {
        true: {
          fontStyle: 'italic',
        },
      },
      highlight: {
        true: {
          bg: '$yellow500',
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);
const StyledFallbackText = styled(
  StyledText,
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

const AccessbileAvatar = createAvatar({
  Root: StyledRoot,
  Badge: StyledBadge,
  Group: StyledGroup,
  Image: StyledImage,
  FallbackText: StyledFallbackText,
});

export const Avatar = AccessbileAvatar;
export const AvatarBadge = AccessbileAvatar.Badge;
export const AvatarGroup = AccessbileAvatar.Group;
export const AvatarImage = AccessbileAvatar.Image;
export const AvatarFallbackText = AccessbileAvatar.FallbackText;
