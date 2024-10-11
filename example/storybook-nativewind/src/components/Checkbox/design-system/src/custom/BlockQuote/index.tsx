import React, { memo } from 'react';
import { StyledBlockQuote } from '../../styled-components';
export const BlockQuote = memo(({ ...props }: any) => {
  return <StyledBlockQuote {...props} />;
});
