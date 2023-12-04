import { createHStack } from '@gluestack-ui/hstack';
import { Root } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { Children, forwardRef } from 'react';
import { Text } from '../Text';
import { GenericComponentType } from '../../types';

const AccessibleHStack = createHStack({
  Root,
});

const HStackTemp = forwardRef(
  ({ children, divider, ...props }: any, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleHStack {...resolvedPropForGluestack} ref={ref}>
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
      </AccessibleHStack>
    );
  }
);

export type IHStackComponentType<HStack> = GenericComponentType<HStack>;

export const HStack = HStackTemp as IHStackComponentType<
  typeof AccessibleHStack
>;
