import { StatusBar } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  StatusBar,
  {},
  {
    componentName: 'StatusBar',
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
