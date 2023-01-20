import { View } from 'react-native';
import { styled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';

const Badge = styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        px: `${config?.tokens?.space[2]}`,
        py: `${config?.tokens?.space[1]}`,
      },
    },
    variants: {
      'solid': {
        style: {
          bg: '$muted600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
        },
      },
      'subtle': {
        style: {
          bg: `${config?.tokens?.colors.muted100}`,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.muted700}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.muted700}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: `${config?.tokens?.colors.muted300}`,
            },
          },
        },
      },
      'outline': {
        style: {
          borderWidth: 1,
          borderColor: `${config?.tokens?.colors.muted600}`,
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.muted600}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.muted600}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: `${config?.tokens?.colors.muted300}`,
            },
            descendants: {
              _text: {
                style: {
                  color: `${config?.tokens?.colors.muted300}`,
                },
              },
              _icon: {
                style: {
                  color: `${config?.tokens?.colors.muted300}`,
                },
              },
            },
          },
        },
      },
      'success-solid': {
        style: {
          bg: `${config?.tokens?.colors.success600}`,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
        },
      },
      'success-subtle': {
        style: {
          bg: `${config?.tokens?.colors.success100}`,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.success900}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.success900}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: `${config?.tokens?.colors.success300}`,
            },
          },
        },
      },
      'success-outline': {
        style: {
          borderWidth: 1,
          borderColor: `${config?.tokens?.colors.success600}`,
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.success600}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.success600}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: `${config?.tokens?.colors.success300}`,
            },
            descendants: {
              _text: {
                style: {
                  color: `${config?.tokens?.colors.success300}`,
                },
              },
              _icon: {
                style: {
                  color: `${config?.tokens?.colors.success300}`,
                },
              },
            },
          },
        },
      },
      'danger-solid': {
        style: {
          bg: `${config?.tokens?.colors.error600}`,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
        },
      },
      'danger-subtle': {
        style: {
          bg: `${config?.tokens?.colors.error100}`,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.error900}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.error900}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: `${config?.tokens?.colors.error300}`,
            },
          },
        },
      },
      'danger-outline': {
        style: {
          borderWidth: 1,
          borderColor: `${config?.tokens?.colors.error600}`,
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.error600}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.error600}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: `${config?.tokens?.colors.error300}`,
            },
            descendants: {
              _text: {
                style: {
                  color: `${config?.tokens?.colors.error300}`,
                },
              },
              _icon: {
                style: {
                  color: `${config?.tokens?.colors.error300}`,
                },
              },
            },
          },
        },
      },
      'info-solid': {
        style: {
          bg: `${config?.tokens?.colors.info600}`,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
        },
      },
      'info-subtle': {
        style: {
          bg: '$info100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.info900}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.info900}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: `${config?.tokens?.colors.info300}`,
            },
          },
        },
      },
      'info-outline': {
        style: {
          borderWidth: 1,
          borderColor: `${config?.tokens?.colors.info600}`,
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.info600}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.info600}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: `${config?.tokens?.colors.info300}`,
            },
            descendants: {
              _text: {
                style: {
                  color: `${config?.tokens?.colors.info300}`,
                },
              },
              _icon: {
                style: {
                  color: `${config?.tokens?.colors.info300}`,
                },
              },
            },
          },
        },
      },
      'warning-solid': {
        style: {
          bg: `${config?.tokens?.colors.warning600}`,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.text50}`,
            },
          },
        },
      },
      'warning-subtle': {
        style: {
          bg: `${config?.tokens?.colors.warning100}`,
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.warning900}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.warning900}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: `${config?.tokens?.colors.warning300}`,
            },
          },
        },
      },
      'warning-outline': {
        style: {
          borderWidth: 1,
          borderColor: `${config?.tokens?.colors.warning600}`,
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: `${config?.tokens?.colors.warning600}`,
            },
          },
          _icon: {
            style: {
              color: `${config?.tokens?.colors.warning600}`,
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: `${config?.tokens?.colors.warning300}`,
            },
            descendants: {
              _text: {
                style: {
                  color: `${config?.tokens?.colors.warning300}`,
                },
              },
              _icon: {
                style: {
                  color: `${config?.tokens?.colors.warning300}`,
                },
              },
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
