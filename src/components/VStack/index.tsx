import { createVStack } from '@gluestack-ui/vstack';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { Children, forwardRef } from 'react';
import { GenericComponentType } from '../../types';
import { Text } from '../Text';

const AccessibleVStack = createVStack({
  Root,
});

const VStackTemp = forwardRef(
  ({ children, divider, space, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleVStack space={space} {...resolvedPropForGluestack} ref={ref}>
        {Children.map(children, (child, index) => {
          if (index !== 0)
            return (
              <>
                {divider && divider}
                {typeof child === 'string' ? <Text>{child}</Text> : child}
              </>
            );
          return <>{child}</>;
        })}
      </AccessibleVStack>
    );
  }
);

export type IVStackComponentType<VStack> = GenericComponentType<VStack>;

export const VStack = VStackTemp as IVStackComponentType<
  typeof AccessibleVStack
>;
