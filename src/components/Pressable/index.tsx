import React, { forwardRef } from 'react';
import { Root } from './styled-components';
import { createPressable } from '@gluestack-ui/pressable';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessiblePressable = createPressable({ Root });

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
