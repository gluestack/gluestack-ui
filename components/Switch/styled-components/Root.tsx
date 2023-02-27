import { styled } from '@dank-style/react';
import { Switch } from 'react-native';

export default styled(
  Switch,
  {
    'onthumbColor': '$backgroundLight50',
    'offThumbColor': '$backgroundLight50',
    'offTrackColor': '$backgroundLight300',
    'onTrackColor': '$primary600',

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
      offTrackColor: '$backgroundLight400',
      onTrackColor: '$primary700',
    },
  },
  {}
);
