import React, { memo } from 'react';
import { CodeBlock } from '../CodeBlock';

export const Code = memo(({ children, ...props }: any) => {
  return <CodeBlock code={`${children}`} {...props} />;
});
