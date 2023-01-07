import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        px: '$2',
        py: '$1',
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
              color: '$text50',
            },
          },
          _icon: {
            style: {
              color: '$text50',
            },
          },
        },
      },
      'subtle': {
        style: {
          bg: '$muted100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$muted700',
            },
          },
          _icon: {
            style: {
              color: '$muted700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$muted300',
            },
          },
        },
      },
      'outline': {
        style: {
          borderWidth: 1,
          borderColor: '$muted600',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$muted600',
            },
          },
          _icon: {
            style: {
              color: '$muted600',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$muted300',
            },
            descendants: {
              _text: {
                style: {
                  color: '$muted300',
                },
              },
              _icon: {
                style: {
                  color: '$muted300',
                },
              },
            },
          },
        },
      },
      'success-solid': {
        style: {
          bg: '$success600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text50',
            },
          },
          _icon: {
            style: {
              color: '$text50',
            },
          },
        },
      },
      'success-subtle': {
        style: {
          bg: '$success100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$success900',
            },
          },
          _icon: {
            style: {
              color: '$success900',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$success300',
            },
          },
        },
      },
      'success-outline': {
        style: {
          borderWidth: 1,
          borderColor: '$success600',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$success600',
            },
          },
          _icon: {
            style: {
              color: '$success600',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$success300',
            },
            descendants: {
              _text: {
                style: {
                  color: '$success300',
                },
              },
              _icon: {
                style: {
                  color: '$success300',
                },
              },
            },
          },
        },
      },
      'danger-solid': {
        style: {
          bg: '$error600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text50',
            },
          },
          _icon: {
            style: {
              color: '$text50',
            },
          },
        },
      },
      'danger-subtle': {
        style: {
          bg: '$error100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$error900',
            },
          },
          _icon: {
            style: {
              color: '$error900',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$error300',
            },
          },
        },
      },
      'danger-outline': {
        style: {
          borderWidth: 1,
          borderColor: '$error600',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$error600',
            },
          },
          _icon: {
            style: {
              color: '$error600',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$error300',
            },
            descendants: {
              _text: {
                style: {
                  color: '$error300',
                },
              },
              _icon: {
                style: {
                  color: '$error300',
                },
              },
            },
          },
        },
      },
      'info-solid': {
        style: {
          bg: '$info600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text50',
            },
          },
          _icon: {
            style: {
              color: '$text50',
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
              color: '$info900',
            },
          },
          _icon: {
            style: {
              color: '$info900',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$info300',
            },
          },
        },
      },
      'info-outline': {
        style: {
          borderWidth: 1,
          borderColor: '$info600',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$info600',
            },
          },
          _icon: {
            style: {
              color: '$info600',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$info300',
            },
            descendants: {
              _text: {
                style: {
                  color: '$info300',
                },
              },
              _icon: {
                style: {
                  color: '$info300',
                },
              },
            },
          },
        },
      },
      'warning-solid': {
        style: {
          bg: '$warning600',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$text50',
            },
          },
          _icon: {
            style: {
              color: '$text50',
            },
          },
        },
      },
      'warning-subtle': {
        style: {
          bg: '$warning100',
          borderWidth: 1,
          borderColor: 'transparent',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$warning900',
            },
          },
          _icon: {
            style: {
              color: '$warning900',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$warning300',
            },
          },
        },
      },
      'warning-outline': {
        style: {
          borderWidth: 1,
          borderColor: '$warning600',
          borderRadius: 2,
        },
        descendants: {
          _text: {
            style: {
              color: '$warning600',
            },
          },
          _icon: {
            style: {
              color: '$warning600',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$warning300',
            },
            descendants: {
              _text: {
                style: {
                  color: '$warning300',
                },
              },
              _icon: {
                style: {
                  color: '$warning300',
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
