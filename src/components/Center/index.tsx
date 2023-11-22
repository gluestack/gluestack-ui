import React, { Children, forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { Root as AccessibleCenter } from './styled-components';
import { GenericComponentType } from '../../types';
import { Text } from '../Text';

const CenterTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  const GUIChildren = Children.map(children, (child) => {
    if (typeof child === 'string') return <Text>{child}</Text>;
    return child;
  });
  return (
    <AccessibleCenter {...resolvedPropForGluestack} ref={ref}>
      {GUIChildren}
    </AccessibleCenter>
  );
});

export type ICenterComponentType<Center> = GenericComponentType<Center>;

export const Center = CenterTemp as ICenterComponentType<
  typeof AccessibleCenter
>;
