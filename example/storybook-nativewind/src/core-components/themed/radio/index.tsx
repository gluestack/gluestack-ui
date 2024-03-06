import { createRadio } from '@gluestack-ui/radio';
import { Pressable, View, Platform, Text } from 'react-native';
import { styled, AsForwarder } from '@gluestack-style/react';

const StyledRoot = styled(
  // @ts-ignore
  Platform.OS === 'web' ? View : Pressable,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    variants: {
      size: {
        lg: {
          _text: {
            props: {
              size: 'lg',
            },
          },
          _icon: {
            props: {
              size: 'md',
            },
          },
          _indicator: {
            p: 2,
            h: '$6',
            w: '$6',
          },
        },
        md: {
          _text: {
            props: {
              size: 'md',
            },
          },
          _icon: {
            props: {
              size: 'sm',
            },
          },
          _indicator: {
            p: 1.5,
            h: '$5',
            w: '$5',
          },
        },
        sm: {
          _text: {
            props: {
              size: 'sm',
            },
          },
          _icon: {
            props: {
              size: '2xs',
            },
          },
          _indicator: {
            p: 1,
            h: '$4',
            w: '$4',
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
    _web: {
      'cursor': 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    descendantStyle: ['_icon', '_text', '_indicator'],
    ancestorStyle: ['_radio'],
  }
);

const StyledGroup = styled(View, {}, { descendantStyle: ['_radio'] });

const StyledIcon = styled(
  AsForwarder,
  {
    'color': '$background800',

    // defaultProps: {
    //   size: 'md',
    // },
    'variants': {
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
    'borderRadius': '$full',

    ':checked': {
      'color': '$primary600',
      ':hover': {
        'color': '$primary700',
        ':disabled': {
          color: '$primary600',
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
    resolveProps: ['color'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);

const StyledIndicator = styled(
  View,
  {
    'justifyContent': 'center',
    'alignItems': 'center',
    'bg': 'transparent',
    'borderColor': '$border400',
    'borderWidth': 2,
    'borderRadius': 999,

    '_web': {
      ':focusVisible': {
        outlineWidth: 2,
        outlineColor: '$primary700',
        outlineStyle: 'solid',
      },
    },

    ':checked': {
      borderColor: '$primary600',
      bg: 'transparent',
    },

    ':hover': {
      'borderColor': '$border500',
      'bg': 'transparent',

      ':checked': {
        bg: 'transparent',
        borderColor: '$primary700',
      },
      ':invalid': {
        borderColor: '$error700',
      },
      ':disabled': {
        ':invalid': {
          borderColor: '$error400',
          opacity: 0.4,
        },
        'borderColor': '$border400',
        'opacity': 0.4,
      },
    },

    ':active': {
      bg: 'transparent',
      borderColor: '$primary800',
    },

    ':invalid': {
      borderColor: '$error700',
    },

    ':disabled': {
      'opacity': 0.4,
      ':checked': {
        borderColor: '$border400',
        bg: 'transparent',
      },
      ':invalid': {
        borderColor: '$error400',
      },
    },
  },
  { ancestorStyle: ['_indicator'] }
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

const StyledLabel = styled(
  StyledText,
  {
    'color': '$text600',

    ':checked': {
      color: '$text900',
    },

    ':hover': {
      'color': '$text900',
      ':checked': {
        color: '$text900',
      },
      ':disabled': {
        'color': '$text600',
        ':checked': {
          color: '$text900',
        },
      },
    },

    ':active': {
      'color': '$text900',
      ':checked': {
        color: '$text900',
      },
    },

    ':disabled': {
      opacity: 0.4,
    },

    '_web': {
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
    },
  },
  { ancestorStyle: ['_text'] }
);

export const Radio = createRadio({
  Root: StyledRoot,
  Group: StyledGroup,
  Icon: StyledIcon,
  Indicator: StyledIndicator,
  Label: StyledLabel,
});
export const RadioGroup = Radio.Group;
export const RadioIcon = Radio.Icon;
export const RadioIndicator = Radio.Indicator;
export const RadioLabel = Radio.Label;
