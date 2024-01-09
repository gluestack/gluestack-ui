import { FlatList } from 'react-native';
import { styled, useStyled, propertyTokenMap } from '@gluestack-style/react';

export default styled(
  FlatList,
  {},
  {
    componentName: 'FlatList',
    resolveProps: ['contentContainerStyle'],
  } as const,
  {
    propertyResolver: {
      contentContainerStyle: (rawValue, resolver) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const aliases: any = useStyled()?.config?.aliases;
        const newValue = {} as Record<any, string>;
        Object.entries(rawValue).forEach(([key, value]: any) => {
          if (aliases?.hasOwnProperty(key)) {
            newValue[`${aliases[key]}`] = resolver(
              value,
              //@ts-ignore
              propertyTokenMap[aliases[key]]
            );
          } else {
            //@ts-ignore
            newValue[`${key}`] = resolver(value, propertyTokenMap[key]);
          }
        });
        rawValue = newValue;
        return rawValue;
      },
    },
  }
);
