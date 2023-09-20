// @ts-nocheck
import { View } from 'react-native';
import { styled } from '../../styled';
import { colorScheme } from '../../../utils';

const colorSchemes = Object.fromEntries(
  colorScheme.map((color) => [color, {}])
);

const compoundVariants = colorScheme
  .map((color) => [
    {
      colorScheme: color,
      variant: 'solid',
      value: {
        bg: `$${color}.700`,
        _dark: {
          bg: `$${color}.600`,
        },
        _icon: { color: `$muted.50` },
      },
    },
    {
      colorScheme: color,
      variant: 'left-accent',
      value: {
        borderLeftWidth: 4,
        bg: `$${color}.200`,
        _icon: { color: `$${color}.700` },
        borderColor: `$${color}.700`,
        _dark: {
          bg: `$${color}.200`,
          _icon: { color: `$${color}.600` },
          borderColor: `$${color}.600`,
        },
      },
    },
    {
      colorScheme: color,
      variant: 'top-accent',
      value: {
        borderTopWidth: 4,
        bg: `4${color}.200`,
        _icon: { color: `$${color}.700` },
        borderColor: `$${color}.700`,
        _dark: {
          bg: `$${color}.200`,
          _icon: { color: `$${color}.600` },
          borderColor: `$${color}.600`,
        },
      },
    },
    {
      colorScheme: color,
      variant: 'outline',
      value: {
        borderWidth: 1,
        _icon: { color: `$${color}.700` },
        borderColor: `$${color}.700`,
        _dark: {
          _icon: { color: `$${color}.600` },
          borderColor: `$${color}.600`,
        },
      },
    },
    {
      colorScheme: color,
      variant: 'subtle',
      value: {
        bg: `$${color}.200`,
        _icon: { color: `$${color}.700` },
        _dark: {
          bg: `$${color}.200`,
          _icon: { color: `$${color}.600` },
        },
      },
    },
    {
      colorScheme: color,
      variant: 'outline-light',
      value: {
        borderWidth: 1,
        _icon: { color: `$${color}.700` },
        borderColor: `$${color}.700.alpha0.4`,
        _dark: {
          _icon: { color: `$${color}.600` },
          borderColor: `$${color}.600.alpha0.4`,
        },
      },
    },
  ])
  .flat();

export default styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexShrink: 1,
    borderRadius: '$sm',
    // alignItems: 'center',
    p: '$3',
    _icon: {
      props: {
        size: 'md',
      },
    },

    variants: {
      colorScheme: colorSchemes,
      variant: {
        'solid': {},
        'left-accent': {},
        'top-accent': {},
        'outline': {},
        'subtle': {},
        'outline-light': {},
      },
    },

    compoundVariants: compoundVariants,

    defaultProps: {
      variant: 'subtle',
      colorScheme: 'info',
    },
  },
  { descendantStyle: ['_icon', '_text'], DEBUG: 'STYLED_ALERT' }
);
