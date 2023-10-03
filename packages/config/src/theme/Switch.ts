import { createStyle } from '@gluestack-style/react';

export const Switch = createStyle({
  'props': {
    // todo: add support for this in style.gluestack.io
    // trackColor: { false: '$backgroundLight300', true: '$primary600' },

    // hacky fix for the above
    //@ts-ignore
    trackColor: { false: '$backgroundLight300', true: '$primary600' },
    thumbColor: '$backgroundLight0',
    //@ts-ignore
    activeThumbColor: '$backgroundLight0',

    // for ios specifically in unchecked state
    ios_backgroundColor: '$backgroundLight300',
  },
  'borderRadius': '$full',
  'variants': {
    //@ts-ignore

    size: {
      sm: {
        transform: [
          {
            scale: 0.75,
          },
        ],
      },
      md: {},
      lg: {
        transform: [
          {
            scale: 1.25,
          },
        ],
      },
    },
  },
  '_web': {
    ':focus': {
      outlineWidth: 0,
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      _dark: {
        // @ts-ignore
        outlineColor: '$primary600',
        outlineWidth: 0,
        outlineStyle: 'solid',
      },
    },
  },

  'defaultProps': {
    size: 'md',
  },
  ':disabled': {
    '_web': {
      'cursor': 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
    'opacity': 0.4,
    //@ts-ignore
    'trackColor': { false: '$backgroundLight300', true: '$primary600' },
    // for ios specifically in unchecked state
    'ios_backgroundColor': '$backgroundLight300',
    ':hover': {
      props: {
        //@ts-ignore
        trackColor: { false: '$backgroundLight300', true: '$primary600' },
      },
    },
  },
  ':invalid': {
    borderColor: '$error700',
    borderRadius: 12,
    borderWidth: 2,
  },
  ':hover': {
    'props': {
      // todo: add support for this in style.gluestack.io
      // trackColor: { false: '$backgroundLight400', true: '$primary700' },

      // hacky fix for the above
      //@ts-ignore

      trackColor: { false: '$backgroundLight400', true: '$primary700' },
      ios_backgroundColor: '$backgroundLight400',
    },
    ':invalid': {
      props: {
        // todo: add support for this in style.gluestack.io
        // trackColor: { false: '$backgroundLight400', true: '$primary700' },

        // hacky fix for the above
        //@ts-ignore

        trackColor: { false: '$backgroundLight300', true: '$primary700' },
      },
    },
  },
  ':checked': {
    props: {
      //@ts-ignore
      thumbColor: '$backgroundLight0',
    },
  },
  '_dark': {
    'props': {
      //@ts-ignore
      trackColor: { false: '$backgroundDark700', true: '$primary500' },
      thumbColor: '$backgroundDark0',
      //@ts-ignore
      activeThumbColor: '$backgroundDark0',
    },
    ':invalid': {
      borderColor: '$error400',
      borderRadius: 12,
      borderWidth: 2,
    },
    ':hover': {
      'props': {
        //@ts-ignore
        trackColor: { false: '$backgroundDark600', true: '$primary600' },
        ios_backgroundColor: '$backgroundLight400',
      },
      ':invalid': {
        props: {
          // todo: add support for this in style.gluestack.io
          // trackColor: { false: '$backgroundLight400', true: '$primary700' },

          // hacky fix for the above
          //@ts-ignore

          trackColor: { false: '$backgroundDark700', true: '$primary600' },
        },
      },
    },
    ':disabled': {
      '_web': {
        'cursor': 'pointer',
        ':disabled': {
          cursor: 'not-allowed',
        },
      },
      'opacity': 0.4,
      //@ts-ignore
      'trackColor': { false: '$backgroundLight300', true: '$primary500' },
      // for ios specifically in unchecked state
      'ios_backgroundColor': '$backgroundLight300',
      ':hover': {
        props: {
          //@ts-ignore
          trackColor: { false: '$backgroundDark700', true: '$primary500' },
        },
      },
    },
  },
});
