import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    variants: {
      space: {
        xs: {
          h: '$1',
        },
        sm: {
          h: '$1.5',
        },
        md: {
          h: '$2',
        },
        lg: {
          h: '$3',
        },
        xl: {
          h: '$4',
        },
      },
    },
  },
  {
    componentName: 'ButtonGroupVSpacer',
    ancestorStyle: ['_groupVSpacer'],
  } as const
);
