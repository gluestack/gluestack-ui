import React from 'react';
import { Pressable as AccessiblePressable } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';

export const Pressable = ({
  children,
  ...props
}: React.ComponentProps<typeof AccessiblePressable>) => {
  const resolvedProps = usePropResolution(props);
  return <AccessiblePressable {...resolvedProps} children={children} />;
};
