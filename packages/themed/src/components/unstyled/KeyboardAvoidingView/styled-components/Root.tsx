import { KeyboardAvoidingView } from 'react-native';
import { styled, useStyled } from '@gluestack-style/react';
import { propertyTokenMap } from '@gluestack-style/react';

export default styled(
  KeyboardAvoidingView,
  {},
  {
    componentName: 'KeyboardAvoidingView',
    resolveProps: ['contentContainerStyle'],
  } as const,
  {
    propertyResolver: {
      contentContainerStyle: (rawValue, resolver) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const aliases = useStyled()?.config?.aliases;
        const newValue = {} as Record<any, string>;
        Object.entries(rawValue).forEach(([key, value]) => {
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
