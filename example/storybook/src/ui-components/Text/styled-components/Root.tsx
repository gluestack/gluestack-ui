import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight700',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    letterSpacing: '$md',

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

    defaultProps: {
      size: 'md',
    },

    _dark: {
      color: '$textDark200',
    },
  },
  {}
);
