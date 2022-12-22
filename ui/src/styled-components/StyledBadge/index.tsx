import { config } from '../ui.config';
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
        py: '$0.5',
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
              color: '$text900',
            },
          },
          _icon: {
            style: {
              color: '$text900',
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
              color: '$text600',
            },
          },
          _icon: {
            style: {
              color: '$text600',
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
              color: '$text900',
            },
          },
          _icon: {
            style: {
              color: '$text900',
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
              color: '$text600',
            },
          },
          _icon: {
            style: {
              color: '$text600',
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
              color: '$text900',
            },
          },
          _icon: {
            style: {
              color: '$text900',
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
              color: '$text600',
            },
          },
          _icon: {
            style: {
              color: '$text600',
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
              color: '$text900',
            },
          },
          _icon: {
            style: {
              color: '$text900',
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
              color: '$text600',
            },
          },
          _icon: {
            style: {
              color: '$text600',
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
              color: '$text900',
            },
          },
          _icon: {
            style: {
              color: '$text900',
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
              color: '$text600',
            },
          },
          _icon: {
            style: {
              color: '$text600',
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
    descendentStyle: ['_text', '_icon'],
  },
  config
);
