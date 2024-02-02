import { createStyle } from '@gluestack-style/react';

export const Card = createStyle({
  variants: {
    size: {
      sm: {
        p: '$3',
        borderRadius: '$sm',
      },
      md: {
        p: '$4',
        borderRadius: '$md',
      },
      lg: {
        p: '$6',
        borderRadius: '$xl',
      },
    },
    variant: {
      classic: {
        bg: '$white',
        shadowColor: '$backgroundLight800',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        _dark: {
          bg: '$backgroundDark950',
        },
      },
      outline: {
        borderWidth: 1,
        borderColor: '$borderLight200',
        _dark: {
          borderColor: '$borderDark800',
        },
      },
      ghost: {
        borderRadius: 'none',
      },
      // We can add a filled variant
    },
  },
  defaultProps: {
    theme: 'light',
    size: 'md',
    variant: 'classic',
  },
});
