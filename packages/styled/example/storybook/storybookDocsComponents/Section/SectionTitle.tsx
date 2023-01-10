import React from 'react';
import { Heading } from '@gluestack/design-system';
export const SectionTitle = ({ children, ...props }: any) => {
  return (
    <Heading fontWeight={700} fontSize={20} m={0} {...props}>
      {children}
    </Heading>
  );
};
