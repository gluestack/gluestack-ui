import { createCheckbox } from '@gluestack-ui/checkbox';
import { View, Pressable, Text } from 'react-native';

import { Platform } from 'react-native';

import { Check } from 'lucide-react-native';
import { styled } from '@gluestack-style/react';

const StyledRoot = styled(
  // @ts-ignore
  Platform.OS === 'web' ? View : Pressable,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$2',
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
            borderWidth: 3,
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
            borderWidth: 2,
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
            borderWidth: 2,
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
  { descendantStyle: ['_icon', '_text', '_indicator'] }
);

const StyledIndicator = styled(
  View,
  {
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderColor': '$border400',
    'bg': '$transparent',
    'borderRadius': 4,

    '_web': {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary700',
        outlineStyle: 'solid',
      },
    },

    ':checked': {
      borderColor: '$primary600',
      bg: '$primary600',
    },

    ':hover': {
      'borderColor': '$border500',
      'bg': 'transparent',
      ':invalid': {
        borderColor: '$error700',
      },
      ':checked': {
        'bg': '$primary700',
        'borderColor': '$primary700',
        ':disabled': {
          'borderColor': '$primary600',
          'bg': '$primary600',
          'opacity': 0.4,
          ':invalid': {
            borderColor: '$error700',
          },
        },
      },
      ':disabled': {
        'borderColor': '$border400',
        ':invalid': {
          borderColor: '$error700',
        },
      },
    },

    ':active': {
      ':checked': {
        bg: '$primary800',
        borderColor: '$primary800',
      },
    },

    ':invalid': {
      borderColor: '$error700',
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  { ancestorStyle: ['_indicator'] }
);
const StyledIcon = styled(
  Check,
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

    ':checked': {
      color: '$background0',
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    resolveProps: ['stroke', 'fill'],
    ancestorStyle: ['_icon'],
  },
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
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
        'color': '$text900',
        ':disabled': {
          color: '$text900',
        },
      },
      ':disabled': {
        color: '$text600',
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
const StyledGroup = styled(View, {});

const UICheckbox = createCheckbox({
  Root: StyledRoot,
  Indicator: StyledIndicator,
  Icon: StyledIcon,
  Label: StyledLabel,
  Group: StyledGroup,
});

export const Checkbox = UICheckbox;
export const CheckboxIndicator = UICheckbox.Indicator;
export const CheckboxLabel = UICheckbox.Label;
export const CheckboxIcon = UICheckbox.Icon;
export const CheckboxGroup = UICheckbox.Group;
