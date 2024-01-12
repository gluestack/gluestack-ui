import { createStyle } from '@gluestack-style/react';

export const Fab = createStyle({
  'bg': '$primary500',
  'rounded': '$full',
  'zIndex': 20,
  'p': 16,
  'flexDirection': 'row',
  'alignItems': 'center',
  'justifyContent': 'center',
  'position': 'absolute',

  ':hover': {
    bg: '$primary600',
  },

  ':active': {
    bg: '$primary700',
  },

  ':disabled': {
    opacity: 0.4,
    _web: {
      // @ts-ignore
      pointerEvents: 'all !important',
      cursor: 'not-allowed',
    },
  },

  '_text': {
    color: '$text50',
    fontWeight: '$normal',
  },

  '_icon': {
    'color': '$text50',

    ':hover': {
      color: '$text0',
    },

    ':active': {
      color: '$text0',
    },
  },

  '_web': {
    ':focusVisible': {
      outlineWidth: 2,
      outlineColor: '$primary700',
      outlineStyle: 'solid',
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
          props: {
            size: 'sm',
          },
        },
      },
      md: {
        px: '$3',
        py: '$3',
        _text: {
          fontSize: '$md',
        },
        _icon: {
          props: {
            size: 'md',
          },
        },
      },
      lg: {
        px: '$4',
        py: '$4',
        _text: {
          fontSize: '$lg',
        },
        _icon: {
          props: {
            size: 'md',
          },
        },
      },
    },

    placement: {
      'top right': {
        top: '$4',
        right: '$4',
      },

      'top left': {
        top: '$4',
        left: '$4',
      },

      'bottom right': {
        bottom: '$4',
        right: '$4',
      },

      'bottom left': {
        bottom: '$4',
        left: '$4',
      },

      'top center': {
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

      'bottom center': {
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
    placement: 'bottom right',
    size: 'md',
    hardShadow: '2',
  },
});
