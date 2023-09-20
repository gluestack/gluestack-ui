//@ts-nocheck
import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    px: '$4',
    py: '$3',
    borderRadius: '$sm',
    flexDirection: 'row',
    variants: {
      action: {
        error: {
          bg: '$backgroundLight.Error',
          borderColor: '$error.300',
          _icon: {
            color: '$error.500',
          },
          _dark: {
            bg: '$backgroundDark.Error',
            borderColor: '$error.700',
            _icon: {
              color: '$error.500',
            },
          },
        },
        warning: {
          bg: '$backgroundLight.Warning',
          borderColor: '$warning.300',
          _icon: {
            color: '$warning.500',
          },
          _dark: {
            bg: '$backgroundDark.Warning',
            borderColor: '$warning.700',
            _icon: {
              color: '$warning.500',
            },
          },
        },
        success: {
          bg: '$backgroundLight.Success',
          borderColor: '$success.300',
          _icon: {
            color: '$success.500',
          },
          _dark: {
            bg: '$backgroundDark.Success',
            borderColor: '$success.700',
            _icon: {
              color: '$warning.500',
            },
          },
        },
        info: {
          bg: '$backgroundLight.Info',
          borderColor: '$info.300',
          _icon: {
            color: '$info.500',
          },
          _dark: {
            bg: '$backgroundDark.Info',
            borderColor: '$info.700',
            _icon: {
              color: '$info.500',
            },
          },
        },
        attention: {
          bg: '$backgroundLight.Muted',
          borderColor: '$secondary.300',
          _icon: {
            color: '$secondary.600',
          },
          _dark: {
            bg: '$backgroundDark.Muted',
            borderColor: '$secondary.700',
            _icon: {
              color: '$secondary.400',
            },
          },
        },
      },

      variant: {
        solid: {},
        outline: {
          borderWidth: '$1',
          bg: '$white',
          _dark: {
            bg: '$black',
          },
        },
        accent: {
          borderLeftWidth: '$4',
        },
      },
    },
    m: '$3',

    _web: {
      props: {
        pointerEvents: 'auto',
      },
    },
    defaultProps: {
      hardShadow: '5',
      variant: 'solid',
      action: 'attention',
    },
  },
  { descendantStyle: ['_icon', '_text'] }
);
