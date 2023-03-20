import { styled } from '@gluestack-ui/styled';
import { Switch } from 'react-native';

export default styled(
  Switch,
  {
    'props': {
      // @ts-ignore
      activeThumbColor: '$backgroundLight50',
      thumbColor: '$backgroundLight50',
      trackColor: '$backgroundLight300',
      activeTrackColor: '$primary600',
    },
    'borderRadius': '$full',
    'variants': {
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
    //@ts-ignore
    ':disabled': {
      opacity: 0.4,
    },
    //@ts-ignore
    ':invalid': {
      borderColor: '$error600',
      borderWidth: 2,
      borderRadius: 12,
    },
    //@ts-ignore
    ':hover': {
      //@ts-ignore
      trackColor: '$backgroundLight400',
      activeTrackColor: '$primary700',
    },
  },
  {
    resolveProps: [
      'activeThumbColor',
      'thumbColor',
      'trackColor',
      'activeTrackColor',
    ],
  },
  {
    propertyTokenMap: {
      activeThumbColor: 'colors',
      thumbColor: 'colors',
      trackColor: 'colors',
      activeTrackColor: 'colors',
    },
    aliases: {
      thumbColor: 'thumbColor',
      activeThumbColor: 'activeThumbColor',
      activeTrackColor: 'activeTrackColor',
      trackColor: 'trackColor',
    },
  }
);
