import { styled } from '../../styled';
import { Switch } from 'react-native';

export default styled(
  Switch,
  {
    'props': {
      // todo: add support for this in style.gluestack.io
      // trackColor: { false: '$backgroundLight300', true: '$primary600' },

      // hacky fix for the above
      //@ts-ignore
      trackColor: { false: '$backgroundLight300', true: '$primary600' },
      thumbColor: '$backgroundLight50',
      activeThumbColor: '$backgroundLight50',

      // for ios specifically in unchecked state
      ios_backgroundColor: '$backgroundLight300',
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
          margin: 1,
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },
    ':disabled': {
      opacity: 0.4,
      //@ts-ignore
      trackColor: { false: 'backgroundLight300', true: '$primary600' },
      // for ios specifically in unchecked state
      ios_backgroundColor: '$backgroundLight300',
    },
    ':invalid': {
      borderColor: '$error600',
      borderWidth: 2,
      borderRadius: 12,
    },
    ':hover': {
      props: {
        // todo: add support for this in style.gluestack.io
        // trackColor: { false: '$backgroundLight400', true: '$primary700' },

        // hacky fix for the above
        //@ts-ignore

        trackColor: { false: '$backgroundLight400', true: '$primary700' },
        ios_backgroundColor: '$backgroundLight400',
      },
    },
    ':checked': {
      props: {
        thumbColor: 'backgroundLight50',
      },
    },
  },
  {
    resolveProps: [
      'thumbColor',
      'trackColor',
      'activeThumbColor',
      'ios_backgroundColor',
    ],
  },
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
    aliases: {
      thumbColor: 'thumbColor',
      activeThumbColor: 'activeThumbColor',
      activeTrackColor: 'activeTrackColor',
      trackColor: 'trackColor',
      ios_backgroundColor: 'ios_backgroundColor',
    },
  }
);
