import React from 'react';
import { Box } from '@gluestack/design-system';
export const SectionWrapper = ({ children, ...props }: any) => {
  return (
    <Box mb={24} {...props}>
      {children}
    </Box>
  );
};
