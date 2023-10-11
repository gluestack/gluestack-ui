import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { ColorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexShrink: 1,
    borderRadius: '$sm',
    p: '$3',

    variants: {
      variant: {
        'solid': {},
        'left-accent': {},
        'top-accent': {},
        'outline': {},
        'subtle': {},
        'outline-light': {},
      },
    },

    defaultProps: {
      variant: 'subtle',
    },
  },
  {
    descendantStyle: ['_icon', '_text'],
    DEBUG: 'STYLED_ALERT',
  },
  {
    plugins: [new ColorSchemeResolver(colorSchemeResolveFn)],
  }
);

function colorSchemeResolveFn({ ...props }: any) {
  let value = {};
  if (props.colorScheme) {
    const color = props.colorScheme;
    const variant = props.variant;
    switch (variant) {
      case 'solid':
        value = {
          bg: `$${color}.700`,
          _dark: {
            bg: `$${color}.600`,
          },
          _icon: { color: `$muted.50` },
        };
        break;
      case 'outline-light':
        value = {
          borderWidth: 1,
          _icon: { color: `$${color}.700` },
          borderColor: `$${color}.700.alpha0.4`,
          _dark: {
            _icon: { color: `$${color}.600` },
            borderColor: `$${color}.600.alpha0.4`,
          },
        };
        break;
      case 'subtle':
        value = {
          bg: `$${color}.200`,
          _icon: { color: `$${color}.700` },
          _dark: {
            bg: `$${color}.200`,
            _icon: { color: `$${color}.600` },
          },
        };
        break;
      case 'outline':
        value = {
          borderWidth: 1,
          _icon: { color: `$${color}.700` },
          borderColor: `$${color}.700`,
          _dark: {
            _icon: { color: `$${color}.600` },
            borderColor: `$${color}.600`,
          },
        };
        break;
      case 'top-accent':
        value = {
          borderTopWidth: 4,
          bg: `$${color}.200`,
          _icon: { color: `$${color}.700` },
          borderColor: `$${color}.700`,
          _dark: {
            bg: `$${color}.200`,
            _icon: { color: `$${color}.600` },
            borderColor: `$${color}.600`,
          },
        };
        break;
      case 'left-accent':
        value = {
          borderLeftWidth: 4,
          bg: `$${color}.200`,
          _icon: { color: `$${color}.700` },
          borderColor: `$${color}.700`,
          _dark: {
            bg: `$${color}.200`,
            _icon: { color: `$${color}.600` },
            borderColor: `$${color}.600`,
          },
        };
        break;
      default:
        value = {};
    }
  }
  return value;
}
