import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    ':invalid': {
      borderColor: '$error.500',
    },
    // @ts-ignore
    'borderWidth': 2,
    // @ts-ignore
    'borderRadius': '$full',
    // @ts-ignore
    'p': '$1',
    // @ts-ignore
    'bg': '$muted.50',
    'borderColor': '$muted.400',
    'my': '0.25rem',
  },
  {
    componentName: 'RadioIndicator',
    ancestorStyle: ['_indicator'],
    descendantStyle: ['_icon'],
  } as const
);
