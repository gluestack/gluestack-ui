import React, { memo } from 'react';
import { StyledInlineCode } from '../../styled-components';

export const InlineCode = memo(({ ...props }: any) => {
  return <StyledInlineCode {...props} />;
});
