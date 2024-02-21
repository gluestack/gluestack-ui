import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export const LinearGradient = styled(
  View,
  {},
  {
    componentName: 'LinearGradient',
    resolveProps: ['colors'],
  } as const,
  {
    propertyTokenMap: {
      colors: 'colors',
    },
    propertyResolver: {
      colors: (rawValue: any, resolver: any) => {
        rawValue.forEach((color: any, index: number) => {
          rawValue[index] = resolver(color);
        });
        return rawValue;
      },
    },
  }
);
