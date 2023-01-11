import React from 'react';
import { Box } from '@gluestack/design-system';
export const Page = ({ children, ...props }: any) => {
  return (
    <Box mb={56} {...props}>
      {children}
    </Box>
  );
};
