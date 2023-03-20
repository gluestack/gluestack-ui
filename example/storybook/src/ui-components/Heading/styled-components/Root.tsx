import { styled } from '@gluestack-ui/styled';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
export default styled(H3, {
  color: '$textLight900',
  letterSpacing: '$sm',
  fontWeight: 'bold',
  fontFamily: '$heading',
  variants: {
    size: {
      '5xl': {
        props: { as: H1 },
        fontSize: '$7xl',
        lineHeight: '$7xl',
      },
      '4xl': {
        props: { as: H1 },
        fontSize: '$5xl',
        lineHeight: '$5xl',
      },

      '3xl': {
        props: { as: H1 },
        fontSize: '$4xl',
        lineHeight: '$5xl',
      },

      '2xl': {
        props: { as: H2 },
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },

      'xl': {
        props: { as: H3 },
        fontSize: '$2xl',
        lineHeight: '$3xl',
      },

      'lg': {
        props: { as: H4 },
        fontSize: '$xl',
        lineHeight: '$2xl',
      },

      'md': {
        props: { as: H5 },
        fontSize: '$lg',
        lineHeight: '$md',
      },

      'sm': {
        props: { as: H6 },
        fontSize: '$md',
        lineHeight: '$lg',
      },

      'xs': {
        props: { as: H6 },
        fontSize: '$sm',
        lineHeight: '$xs',
      },
    },
  },

  defaultProps: {
    size: 'lg',
  },

  //@ts-ignore
  _dark: {
    color: '$textDark50',
  },
});
