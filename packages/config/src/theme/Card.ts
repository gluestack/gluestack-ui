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
      elevated: {
        bg: '$backgroundLight0',
        shadowColor: '$backgroundLight800',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        _dark: {
          bg: '$backgroundDark900',
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
      filled: {
        bg: '$backgroundLight50',
        _dark: {
          bg: '$backgroundDark900',
        },
      },
    },
  },
  defaultProps: {
    theme: 'light',
    size: 'md',
    variant: 'elevated',
  },
});
