import React from 'react';
import { Box } from '../../primitives';
export const LayoutContent = ({ children, ...props }: any) => {
  return <Box {...props}>{children}</Box>;
};
