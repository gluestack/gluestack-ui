import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mb: '$1',
  },
  {
    componentName: 'FormControlLabel',
    descendantStyle: ['_labelText'],
  } as const
);
