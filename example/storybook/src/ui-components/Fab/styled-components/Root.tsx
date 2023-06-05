import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    'bg': '$primary500',
    'rounded': '$full',
    'zIndex': 20,
    'p': 16,
    'flexDirection': 'row',

    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'absolute',
    'shadowColor': '$backgroundLight800',
    //@ts-ignore
    'shadowOffset': {
      width: 0,
      height: 1,
    },
    'shadowOpacity': 0.2,
    'shadowRadius': 1.41,
    'elevation': 2,
    ':hover': {
      bg: '$primary600',
    },

    ':active': {
      bg: '$primary700',
    },

    ':disabled': {
      opacity: 0.4,
      _web: {
        cursor: 'not-allowed',
      },
    },

    '_text': {
      color: '$textLight50',
      fontWeight: '$normal',
      _dark: {
        _text: {
          color: '$textDark50',
        },
      },
    },

    '_icon': {
      'color': '$textLight50',
      ':hover': {
        color: '$textLight0',
      },
      ':active': {
        color: '$textLight0',
      },
      '_dark': {
        _icon: {
          'color': '$textDark0',
          ':hover': {
            color: '$textDark0',
          },
          ':active': {
            color: '$textDark0',
          },
        },
      },
    },

    '_dark': {
      'bg': '$primary400',
      ':hover': {
        bg: '$primary500',
      },
      ':active': {
        bg: '$prinary600',
      },
      ':disabled': {
        opacity: 0.4,
        _web: {
          cursor: 'not-allowed',
        },
      },
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: 2,
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary300',
        },
      },
    },

    'variants': {
      size: {
        sm: {
          px: '$2.5',
          py: '$2.5',
          _text: {
            fontSize: '$sm',
          },
          _icon: {
            h: 16,
            w: 16,
          },
        },
        md: {
          px: '$3',
          py: '$3',
          _text: {
            fontSize: '$md',
          },
          _icon: {
            h: 18,
            w: 18,
          },
        },
        lg: {
          px: '$4',
          py: '$4',
          _text: {
            fontSize: '$lg',
          },
          _icon: {
            h: 18,
            w: 18,
          },
        },
      },

      placement: {
        'top-right': {
          top: '$4',
          right: '$4',
        },

        'top-left': {
          top: '$4',
          left: '$4',
        },

        'bottom-right': {
          bottom: '$4',
          right: '$4',
        },

        'bottom-left': {
          bottom: '$4',
          left: '$4',
        },

        'top-center': {
          top: '$4',
          alignSelf: 'center',
          // TODO: fix this, this is correct way, but React Native doesn't support this on Native
          // left: '50%',
          // transform: [
          //   {
          //     // @ts-ignore
          //     translateX: '-50%',
          //   },
          // ],
        },

        'bottom-center': {
          bottom: '$4',
          alignSelf: 'center',
          // TODO: fix this, this is correct way, but React Native doesn't support this on Native
          // left: '50%',
          // transform: [
          //   {
          //     // @ts-ignore
          //     translateX: '-50%',
          //   },
          // ],
        },
      },
    },
    'defaultProps': {
      placement: 'bottom-right',
      size: 'md',
    },
  },
  {
    descendantStyle: ['_text', '_icon'],
  }
);
