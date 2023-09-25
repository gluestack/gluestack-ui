import { ScrollView } from 'react-native';
import { styled, useStyled } from '@gluestack-style/react';
// @ts-ignore
import { propertyTokenMap } from '@gluestack-style/react/lib/module/propertyTokenMap';

export default styled(
  ScrollView,
  {},
  {
    componentName: 'ScrollView',
    resolveProps: ['contentContainerStyle'],
  } as const,
  {
    propertyTokenMap: {
      contentContainerStyle: 'colors',
    },
    propertyResolver: {
      contentContainerStyle: (rawValue, resolver) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const aliases = useStyled()?.config?.aliases;
        const newValue = {} as Record<any, string>;
        Object.entries(rawValue).forEach(([key, value]) => {
          if (Object.hasOwn(aliases, key)) {
            newValue[`${aliases[key]}`] = resolver(
              value,
              propertyTokenMap[aliases[key]]
            );
          } else {
            newValue[`${key}`] = resolver(value, propertyTokenMap[key]);
          }
        });
        rawValue = newValue;
        return rawValue;
      },
    },
  }
);
