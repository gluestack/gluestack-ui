import { styled } from '@gluestack-style/react';
import { Switch } from 'react-native';

export default styled(
  Switch,
  {},
  {
    componentName: 'Switch',
    resolveProps: [
      'thumbColor',
      'trackColor',
      'activeThumbColor',
      'ios_backgroundColor',
    ],
  } as const,
  {
    propertyTokenMap: {
      trackColor: 'colors',
      thumbColor: 'colors',
      activeThumbColor: 'colors',
      ios_backgroundColor: 'colors',
    },
    propertyResolver: {
      trackColor: (rawValue: any, resolver: any) => {
        const resolveColor = {
          true: resolver(rawValue.true),
          false: resolver(rawValue.false),
        };
        return resolveColor;
      },
    },
    // @ts-ignore
    aliases: {
      thumbColor: 'thumbColor',
      activeThumbColor: 'activeThumbColor',
      activeTrackColor: 'activeTrackColor',
      trackColor: 'trackColor',
      ios_backgroundColor: 'ios_backgroundColor',
    },
  }
);
