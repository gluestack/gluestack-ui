import { styled } from '@gluestack/ui-styled';
import { Switch } from 'react-native';

export default styled(
  Switch,
  {
    baseStyle: {
      style: {
        // @ts-ignore
        onthumbColor: '$muted50',
        offThumbColor: '$muted50',
        offTrackColor: '$muted300',
        onTrackColor: `$primary600`,
      },
      state: {
        disabled: {
          // @ts-ignore
          opacity: 0.4,
        },
        invalid: {
          style: {
            borderColor: '$error600',
            borderWidth: 2,
            borderRadius: 12,
          },
        },
        hover: {
          style: {
            // @ts-ignore
            offTrackColor: '$muted400',
            onTrackColor: `$primary700`,
          },
        },
      },
    },
    sizes: {
      sm: {
        style: {
          transform: [{ scale: 0.75 }],
        },
      },
      md: {},
      lg: {
        style: {
          transform: [{ scale: 1.25 }],
          margin: 1,
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {}
);
