import React, { forwardRef } from 'react';
import { Pressable as AccessiblePressable } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const PressableTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedProps = usePropResolution(props);
  return (
    <AccessiblePressable {...resolvedProps} children={children} ref={ref} />
  );
});

export type IPressableComponentType<Pressable> =
  GenericComponentType<Pressable>;

export const Pressable = PressableTemp as IPressableComponentType<
  typeof AccessiblePressable
>;
