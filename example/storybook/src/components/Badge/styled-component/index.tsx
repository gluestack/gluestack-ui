import { View } from 'react-native';
import { styled } from '@dank-style/react';

const Badge = styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    px: `$2`,
    py: `$1`,
    variants: {
      variant: {
        'solid': {
          bg: '$muted600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$text50',
          },
          _icon: {
            color: '$text50',
          },
        },
        'subtle': {
          bg: '$muted100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$muted700',
          },
          _icon: {
            color: '$muted700',
          },
          _dark: {
            bg: '$muted300',
          },
        },
        'outline': {
          borderWidth: 1,
          borderColor: '$muted600',
          borderRadius: 2,
          _text: {
            color: '$muted600',
          },
          _icon: {
            color: '$muted600',
          },
          _dark: {
            borderColor: '$muted300',
            _text: {
              color: '$muted300',
            },
            _icon: {
              color: '$muted300',
            },
          },
        },
        'success-solid': {
          bg: '$success600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$text50',
          },
          _icon: {
            color: '$text50',
          },
        },
        'success-subtle': {
          bg: '$success100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$success900',
          },
          _icon: {
            color: '$success900',
          },
          _dark: {
            bg: '$success300',
          },
        },
        'success-outline': {
          borderWidth: 1,
          borderColor: '$success600',
          borderRadius: 2,
          _text: {
            color: '$success600',
          },
          _icon: {
            color: '$success600',
          },
          _dark: {
            borderColor: '$success300',
            _text: {
              color: '$success300',
            },
            _icon: {
              color: '$success300',
            },
          },
        },
        'danger-solid': {
          bg: '$error600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$text50',
          },
          _icon: {
            color: '$text50',
          },
        },
        'danger-subtle': {
          bg: '$error100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$error900',
          },
          _icon: {
            color: '$error900',
          },
          _dark: {
            bg: '$error300',
          },
        },
        'danger-outline': {
          borderWidth: 1,
          borderColor: '$error600',
          borderRadius: 2,
          _text: {
            color: '$error600',
          },
          _icon: {
            color: '$error600',
          },
          dark: {
            borderColor: '$error300',
            descendants: {
              _text: {
                color: '$error300',
              },
              _icon: {
                color: '$error300',
              },
            },
          },
        },
        'info-solid': {
          bg: '$info600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$text50',
          },
          _icon: {
            color: '$text50',
          },
        },
        'info-subtle': {
          bg: '$info100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$info900',
          },
          _icon: {
            color: '$info900',
          },
          _dark: {
            bg: '$info300',
          },
        },
        'info-outline': {
          borderWidth: 1,
          borderColor: '$info600',
          borderRadius: 2,
          _text: {
            color: '$info600',
          },
          _icon: {
            color: '$info600',
          },
          _dark: {
            borderColor: '$info300',
            _text: {
              color: '$info300',
            },
            _icon: {
              color: '$info300',
            },
          },
        },
        'warning-solid': {
          bg: '$warning600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$text50',
          },
          _icon: {
            color: '$text50',
          },
        },
        'warning-subtle': {
          bg: '$warning100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
          _text: {
            color: '$warning900',
          },
          _icon: {
            color: '$warning900',
          },
          _dark: {
            bg: '$warning300',
          },
        },
        'warning-outline': {
          borderWidth: 1,
          borderColor: '$warning600',
          borderRadius: 2,
          _text: {
            color: '$warning600',
          },
          _icon: {
            color: '$warning600',
          },
          _dark: {
            borderColor: '$warning300',
            _text: {
              color: '$warning300',
            },
            _icon: {
              color: '$warning300',
            },
          },
        },
      },
    },
    defaultProps: {
      variant: 'subtle',
    },
  },
  {
    descendantStyle: ['_text', '_icon'],
  }
);

export { default as Text } from './Text';
export { default as Icon } from './Icon';
export { Badge as Root };
