import { styled } from '@gluestack-style/react';
import { Switch as RNSwitch } from 'react-native';
import { createSwitch } from '@gluestack-ui/switch';

const StyledRoot = styled(
  RNSwitch,
  {
    'props': {
      // todo: add support for this in style.gluestack.io
      // trackColor: { false: '$background300', true: '$primary600' },

      // hacky fix for the above
      //@ts-ignore
      trackColor: { false: '$background300', true: '$primary600' },
      thumbColor: '$background0',
      //@ts-ignore
      activeThumbColor: '$background0',

      // for ios specifically in unchecked state
      ios_backgroundColor: '$background300',
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
      'trackColor': { false: '$background300', true: '$primary600' },
      // for ios specifically in unchecked state
      'ios_backgroundColor': '$background300',
      ':hover': {
        props: {
          //@ts-ignore
          trackColor: { false: '$background300', true: '$primary600' },
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
        // trackColor: { false: '$background400', true: '$primary700' },

        // hacky fix for the above
        //@ts-ignore

        trackColor: { false: '$background400', true: '$primary700' },
        ios_backgroundColor: '$background400',
      },
      ':invalid': {
        props: {
          // todo: add support for this in style.gluestack.io
          // trackColor: { false: '$background400', true: '$primary700' },

          // hacky fix for the above
          //@ts-ignore

          trackColor: { false: '$background300', true: '$primary700' },
        },
      },
    },

    ':checked': {
      props: {
        //@ts-ignore
        thumbColor: '$background0',
      },
    },
  },
  {
    componentName: 'Switch',
    resolveProps: [
      'thumbColor',
      'trackColor',
      'activeThumbColor',
      'ios_backgroundColor',
    ],
  } as const,
  {
    propertyTokenMap: {
      trackColor: 'colors',
      thumbColor: 'colors',
      activeThumbColor: 'colors',
      ios_backgroundColor: 'colors',
    },
    propertyResolver: {
      trackColor: (rawValue: any, resolver: any) => {
        const resolveColor = {
          true: resolver(rawValue.true),
          false: resolver(rawValue.false),
        };
        return resolveColor;
      },
    },
  }
);

export const Switch = createSwitch({
  Root: StyledRoot,
});
