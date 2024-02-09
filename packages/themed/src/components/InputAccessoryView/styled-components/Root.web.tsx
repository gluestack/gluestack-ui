import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {},
  {
    componentName: 'InputAccessoryView',
    resolveProps: ['backgroundColor'],
  } as const,
  {
    propertyResolver: {
      backgroundColor: (rawValue: any, resolver: any) => {
        return resolver(rawValue);
      },
    },
  }
);
