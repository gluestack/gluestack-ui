import { styled } from '../../styled';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
export default styled(H3, {
  color: '$textLight900',
  letterSpacing: '$sm',
  fontWeight: '$bold',
  fontFamily: '$heading',

  // Overrides expo-html default styling
  marginVertical: 0,
  _dark: {
    color: '$textDark50',
  },
  variants: {
    size: {
      '5xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$6xl',
        lineHeight: '$7xl',
      },
      '4xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$5xl',
        lineHeight: '$6xl',
      },

      '3xl': {
        //@ts-ignore
        props: { as: H1 },
        fontSize: '$4xl',
        lineHeight: '$5xl',
      },

      '2xl': {
        //@ts-ignore
        props: { as: H2 },
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },

      'xl': {
        //@ts-ignore
        props: { as: H3 },
        fontSize: '$2xl',
        lineHeight: '$3xl',
      },

      'lg': {
        //@ts-ignore
        props: { as: H4 },
        fontSize: '$xl',
        lineHeight: '$2xl',
      },

      'md': {
        //@ts-ignore
        props: { as: H5 },
        fontSize: '$lg',
        lineHeight: '$lg',
      },

      'sm': {
        //@ts-ignore
        props: { as: H6 },
        fontSize: '$md',
        lineHeight: '$lg',
      },

      'xs': {
        //@ts-ignore
        props: { as: H6 },
        fontSize: '$sm',
        lineHeight: '$xs',
      },
    },
  },

  defaultProps: {
    size: 'lg',
  },
});
