import { View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { colorSchemeResolver } from '../../../plugins/colorScheme/colorScheme';

export default styled(
  View,
  {},
  {
    descendantStyle: ['_text'],
  },
  {
    plugins: [
      new colorSchemeResolver((colorScheme: any) => {
        return { bg: `$${colorScheme}.400` };
      }),
    ],
  }
);
