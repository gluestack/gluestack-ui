import { styled } from '@gluestack-style/react';
import { createLink } from '@gluestack-ui/link';
import { Pressable, Text } from 'react-native';

const StyledRoot = styled(
  Pressable,
  {
    _web: {
      'outlineWidth': 0,
      ':disabled': {
        cursor: 'not-allowed',
      },
      ':focusVisible': {
        outlineWidth: 2,
        outlineColor: '$primary700',
        outlineStyle: 'solid',
      },
    },
    _text: {
      ':hover': {
        color: '$info600',
        textDecorationLine: 'none',
      },

      ':active': {
        color: '$info700',
      },

      ':disabled': {
        opacity: 0.4,
      },
    },
  },
  {
    componentName: 'Link',
  } as const
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

const StyledLinkText = styled(
  StyledText,
  {
    textDecorationLine: 'underline',
    color: '$info700',
  },
  {
    ancestorStyle: ['_text'],
  } as const
);

export const Link = createLink({
  Root: StyledRoot,
  Text: StyledLinkText,
});
export const LinkText = Link.Text;
