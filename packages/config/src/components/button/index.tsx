import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { createButton } from '@gluestack-ui/button';
import { AsForwarder, styled } from '@gluestack-style/react';

const StyledRoot = styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'backgroundColor': '$primary500',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',

    '_text': {
      color: '$text0',
      fontWeight: '$semibold',
    },

    '_icon': {
      color: '$text0',
    },

    '_spinner': {
      props: {
        color: '$background0',
      },
    },

    'variants': {
      action: {
        primary: {
          'bg': '$primary500',
          'borderColor': '$primary300',

          ':hover': {
            bg: '$primary600',
            borderColor: '$primary400',
          },

          ':active': {
            bg: '$primary700',
            borderColor: '$primary700',
          },

          '_text': {
            'color': '$primary600',
            ':hover': {
              color: '$primary600',
            },
            ':active': {
              color: '$primary700',
            },
          },

          '_icon': {
            'color': '$primary600',
            ':hover': {
              color: '$primary600',
            },
            ':active': {
              color: '$primary700',
            },
          },

          '_spinner': {
            'props': {
              color: '$primary600',
            },
            ':hover': {
              props: {
                color: '$primary600',
              },
            },
            ':active': {
              props: {
                color: '$primary700',
              },
            },
          },
        },
        secondary: {
          'bg': '$secondary500',
          'borderColor': '$secondary300',

          ':hover': {
            bg: '$secondary600',
            borderColor: '$secondary400',
          },

          ':active': {
            bg: '$secondary700',
            borderColor: '$secondary700',
          },

          '_text': {
            'color': '$secondary600',
            ':hover': {
              color: '$secondary600',
            },
            ':active': {
              color: '$secondary700',
            },
          },

          '_icon': {
            'color': '$secondary600',
            ':hover': {
              color: '$secondary600',
            },
            ':active': {
              color: '$secondary700',
            },
          },

          '_spinner': {
            'props': {
              color: '$secondary600',
            },
            ':hover': {
              props: { color: '$secondary600' },
            },
            ':active': {
              props: { color: '$secondary700' },
            },
          },
        },
        positive: {
          'bg': '$success500',
          'borderColor': '$success300',

          ':hover': {
            bg: '$success600',
            borderColor: '$success400',
          },

          ':active': {
            bg: '$success700',
            borderColor: '$success700',
          },

          '_text': {
            'color': '$success600',
            ':hover': {
              color: '$success600',
            },
            ':active': {
              color: '$success700',
            },
          },

          '_icon': {
            'color': '$success600',
            ':hover': {
              color: '$success600',
            },
            ':active': {
              color: '$success700',
            },
          },

          '_spinner': {
            'props': {
              color: '$success600',
            },
            ':hover': {
              props: { color: '$success600' },
            },
            ':active': {
              props: { color: '$success700' },
            },
          },
        },
        negative: {
          'bg': '$error500',
          'borderColor': '$error300',

          ':hover': {
            bg: '$error600',
            borderColor: '$error400',
          },

          ':active': {
            bg: '$error700',
            borderColor: '$error700',
          },

          '_text': {
            'color': '$error600',
            ':hover': {
              color: '$error600',
            },
            ':active': {
              color: '$error700',
            },
          },

          '_icon': {
            'color': '$error600',
            ':hover': {
              color: '$error600',
            },
            ':active': {
              color: '$error700',
            },
          },

          '_spinner': {
            'props': {
              color: '$error600',
            },
            ':hover': {
              props: { color: '$error600' },
            },
            ':active': {
              props: { color: '$error700' },
            },
          },
        },

        default: {
          'bg': '$transparent',

          ':hover': {
            bg: '$background50',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },

      variant: {
        link: {
          'px': '$0',
          ':hover': {
            _text: {
              textDecorationLine: 'underline',
            },
          },
          ':active': {
            _text: {
              textDecorationLine: 'underline',
            },
          },
        },
        outline: {
          'bg': 'transparent',
          'borderWidth': '$1',

          ':hover': {
            bg: '$background50',
          },

          ':active': {
            bg: 'transparent',
          },
        },
        solid: {
          _text: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
          },

          _spinner: {
            'props': { color: '$text0' },
            ':hover': {
              props: { color: '$text0' },
            },
            ':active': {
              props: { color: '$text0' },
            },
          },

          _icon: {
            'props': { color: '$text0' },
            ':hover': {
              props: { color: '$text0' },
            },
            ':active': {
              props: { color: '$text0' },
            },
          },
        },
      },

      size: {
        xs: {
          px: '$3.5',
          h: '$8',
          _icon: {
            props: {
              size: '2xs',
            },
          },
          _text: {
            props: {
              size: 'xs',
            },
          },
        },
        sm: {
          px: '$4',
          h: '$9',
          _icon: {
            props: {
              size: 'sm',
            },
          },
          _text: {
            props: {
              size: 'sm',
            },
          },
        },
        md: {
          px: '$5',
          h: '$10',
          _icon: {
            props: {
              size: 'md',
            },
          },
          _text: {
            props: {
              size: 'md',
            },
          },
        },
        lg: {
          px: '$6',
          h: '$11',
          _icon: {
            props: {
              size: 'md',
            },
          },
          _text: {
            props: {
              size: 'lg',
            },
          },
        },
        xl: {
          px: '$7',
          h: '$12',
          _icon: {
            props: {
              size: 'lg',
            },
          },
          _text: {
            props: {
              size: 'xl',
            },
          },
        },
      },
    },
    'compoundVariants': [
      {
        action: 'primary',
        variant: 'link',
        value: {
          'px': '$0',
          'bg': 'transparent',

          ':hover': {
            bg: 'transparent',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },
      {
        action: 'secondary',
        variant: 'link',
        value: {
          'px': '$0',
          'bg': 'transparent',

          ':hover': {
            bg: 'transparent',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },
      {
        action: 'positive',
        variant: 'link',
        value: {
          'px': '$0',
          'bg': 'transparent',

          ':hover': {
            bg: 'transparent',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },
      {
        action: 'negative',
        variant: 'link',
        value: {
          'px': '$0',
          'bg': 'transparent',

          ':hover': {
            bg: 'transparent',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },
      {
        action: 'primary',
        variant: 'outline',
        value: {
          'bg': 'transparent',

          ':hover': {
            bg: '$background50',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },
      {
        action: 'secondary',
        variant: 'outline',
        value: {
          'bg': 'transparent',

          ':hover': {
            bg: '$background50',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },
      {
        action: 'positive',
        variant: 'outline',
        value: {
          'bg': 'transparent',

          ':hover': {
            bg: '$background50',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },
      {
        action: 'negative',
        variant: 'outline',
        value: {
          'bg': 'transparent',

          ':hover': {
            bg: '$background50',
          },

          ':active': {
            bg: 'transparent',
          },
        },
      },
      {
        action: 'primary',
        variant: 'solid',
        value: {
          _text: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
          },

          _icon: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
          },

          _spinner: {
            'props': { color: '$text0' },
            ':hover': {
              props: { color: '$text0' },
            },
            ':active': {
              props: { color: '$text0' },
            },
          },
        },
      },
      {
        action: 'secondary',
        variant: 'solid',
        value: {
          _text: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
          },

          _icon: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
          },

          _spinner: {
            'props': { color: '$text0' },
            ':hover': {
              props: { color: '$text0' },
            },
            ':active': {
              props: { color: '$text0' },
            },
          },
        },
      },
      {
        action: 'positive',
        variant: 'solid',
        value: {
          _text: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
          },

          _icon: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
            'props': { color: '$text0' },
          },

          _spinner: {
            'props': { color: '$text0' },
            ':hover': {
              props: { color: '$text0' },
            },
            ':active': {
              props: { color: '$text0' },
            },
          },
        },
      },
      {
        action: 'negative',
        variant: 'solid',
        value: {
          _text: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
          },

          _icon: {
            'color': '$text0',
            ':hover': {
              color: '$text0',
            },
            ':active': {
              color: '$text0',
            },
          },

          _spinner: {
            'props': { color: '$text0' },
            ':hover': {
              props: { color: '$text0' },
            },
            ':active': {
              props: { color: '$text0' },
            },
          },
        },
      },
    ],

    'props': {
      size: 'md',
      variant: 'solid',
      action: 'primary',
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: '$0.5',
        outlineColor: '$primary700',
        outlineStyle: 'solid',
      },
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    descendantStyle: ['_text', '_spinner', '_icon'],
    ancestorStyle: ['_button'],
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

const StyledButtonText = styled(
  StyledText,
  {
    color: '$textLight0',
    _web: {
      userSelect: 'none',
    },
  },
  {
    ancestorStyle: ['_text'],
  }
);
const StyledGroup = styled(
  View,
  {
    variants: {
      size: {
        xs: {
          _button: {
            props: {
              size: 'xs',
            },
          },
        },
        sm: {
          _button: {
            props: {
              size: 'sm',
            },
          },
        },
        md: {
          _button: {
            props: {
              size: 'md',
            },
          },
        },
        lg: {
          _button: {
            props: {
              size: 'lg',
            },
          },
        },
        xl: {
          _button: {
            _button: {
              props: {
                size: 'xl',
              },
            },
          },
        },
      },
      space: {
        'xs': {
          gap: '$1',
        },
        'sm': {
          gap: '$2',
        },
        'md': {
          gap: '$3',
        },
        'lg': {
          gap: '$4',
        },
        'xl': {
          gap: '$5',
        },
        '2xl': {
          gap: '$6',
        },
        '3xl': {
          gap: '$7',
        },
        '4xl': {
          gap: '$8',
        },
      },
      isAttached: {
        true: {
          gap: 0,
        },
      },
    },
    defaultProps: {
      size: 'md',
      space: 'sm',
    },
  },
  {
    descendantStyle: ['_button'],
  }
);

const StyledSpinner = styled(
  ActivityIndicator,
  {},
  {
    ancestorStyle: ['_spinner'],
    resolveProps: ['color'],
  }
);

const StyledIcon = styled(
  AsForwarder,
  {
    color: '$background800',
    variants: {
      size: {
        '2xs': {
          h: '$3',
          w: '$3',
          props: {
            // @ts-ignore
            size: 12,
          },
        },
        'xs': {
          h: '$3.5',
          w: '$3.5',
          props: {
            //@ts-ignore
            size: 14,
          },
        },
        'sm': {
          h: '$4',
          w: '$4',
          props: {
            //@ts-ignore
            size: 16,
          },
        },
        'md': {
          h: '$4.5',
          w: '$4.5',
          props: {
            //@ts-ignore
            size: 18,
          },
        },
        'lg': {
          h: '$5',
          w: '$5',
          props: {
            //@ts-ignore
            size: 20,
          },
        },
        'xl': {
          h: '$6',
          w: '$6',
          props: {
            //@ts-ignore
            size: 24,
          },
        },
      },
    },
    props: {
      size: 'md',
    },
  },
  {
    resolveProps: ['stroke', 'fill'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);
const UIButton = createButton({
  Root: StyledRoot,
  Text: StyledButtonText,
  Group: StyledGroup,
  Spinner: StyledSpinner,
  Icon: StyledIcon,
});

export const Button = UIButton;
export const ButtonText = UIButton.Text;
export const ButtonGroup = UIButton.Group;
export const ButtonSpinner = UIButton.Spinner;
export const ButtonIcon = UIButton.Icon;
