import { FlatList as RNFlatList } from 'react-native';
import { styled, useStyled, propertyTokenMap } from '@gluestack-style/react';

export const FlatList = styled(
  RNFlatList,
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
          if (Object.hasOwn(aliases, key)) {
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
