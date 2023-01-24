import { verboseStyled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';
import { View } from 'react-native';

const Checkbox = verboseStyled(
  View,
  {
    baseStyle: {
      style: {
        p: 8,
        // bg: '$blue900',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      state: {
        disabled: {
          style: { opacity: 0.6 },
        },
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            cursor: 'pointer',
          },
        },
      },
    },
    variants: {
      size: {
        lg: {
          descendants: {
            _icon: {
              style: {
                height: `${config?.tokens?.space[5]}`,
                width: `${config?.tokens?.space[5]}`,
              },
            },
            //@ts-ignore
            _text: { style: { fontSize: `${config?.tokens?.fontSizes.xl}` } },
            _indicator: {
              style: {
                h: `${config?.tokens?.space[6]}`,
                w: `${config?.tokens?.space[6]}`,
              },
            },
          },
        },
        md: {
          descendants: {
            _icon: {
              style: {
                height: `${config?.tokens?.space[4]}`,
                width: `${config?.tokens?.space[4]}`,
              },
            },
            //@ts-ignore
            _text: { style: { fontSize: `${config?.tokens?.fontSizes.lg}` } },
            _indicator: {
              style: {
                h: `${config?.tokens?.space[5]}`,
                w: `${config?.tokens?.space[5]}`,
              },
            },
          },
        },
        sm: {
          descendants: {
            _icon: {
              style: {
                height: `${config?.tokens?.space[3]}`,
                width: `${config?.tokens?.space[3]}`,
              },
            },
            //@ts-ignore
            _text: { style: { fontSize: `${config?.tokens?.fontSizes.md}` } },
            _indicator: {
              style: {
                h: `${config?.tokens?.space[4]}`,
                w: `${config?.tokens?.space[4]}`,
              },
            },
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_icon', '_text', '_indicator'],
    DEBUG: 'CHECKBOX',
  }
);
export { default as Group } from './Group';
export { default as Icon } from './Icon';
export { default as Indicator } from './Indicator';
export { default as Label } from './Label';
export { Checkbox as Root };
