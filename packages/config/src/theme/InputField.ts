import { createStyle } from '@gluestack-style/react';

export const InputField = createStyle({
  flex: 1,
  color: '$textLight900',
  props: {
    placeholderTextColor: '$textLight500',
  },
  _dark: {
    color: '$textDark50',
    props: {
      placeholderTextColor: '$textDark400',
    },
  },
  _web: {
    'cursor': 'text',
    ':disabled': {
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      '2xs': {
        fontSize: '$2xs',
        lineHeight: '$2xs',
      },
      'xs': {
        fontSize: '$xs',
        lineHeight: '$sm',
      },

      'sm': {
        fontSize: '$sm',
        lineHeight: '$sm',
      },

      'md': {
        fontSize: '$md',
        lineHeight: '$md',
      },

      'lg': {
        fontSize: '$lg',
        lineHeight: '$xl',
      },

      'xl': {
        fontSize: '$xl',
        lineHeight: '$xl',
      },

      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },

      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },

      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },

      '5xl': {
        fontSize: '$5xl',
        lineHeight: '$6xl',
      },

      '6xl': {
        fontSize: '$6xl',
        lineHeight: '$7xl',
      },
    },
  },
});
