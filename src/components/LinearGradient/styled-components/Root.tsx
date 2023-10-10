import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { styled } from '@gluestack-style/react';

export default styled(
  ExpoLinearGradient,
  {},
  {
    componentName: 'LinearGradient',
    descendantStyle: ['_text'],
    resolveProps: ['colors'],
  } as const,
  {
    propertyTokenMap: {
      colors: 'colors',
    },
    propertyResolver: {
      colors: (rawValue: any, resolver: any) => {
        rawValue.forEach((color: any, index: number) => {
          rawValue[index] = resolver(`$${color}`);
        });
        return rawValue;
      },
    },
  }
);
