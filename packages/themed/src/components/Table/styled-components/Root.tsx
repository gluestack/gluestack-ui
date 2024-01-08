import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {},
  {
    componentName: 'TableContainer',
    descendantStyle: [
      '_dataText',
      '_data',
      '_headerText',
      '_head',
      '_body',
      '_footer',
      '_table',
      '_row',
    ],
  } as const,
  {}
);
