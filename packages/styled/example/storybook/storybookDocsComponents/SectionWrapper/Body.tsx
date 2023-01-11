import React from 'react';
import { Box } from '@gluestack/design-system';
export const Body = ({ children, ...props }: any) => {
  return (
    <Box mt={36} {...props}>
      {children}
    </Box>
  );
};
