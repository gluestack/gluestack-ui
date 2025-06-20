import React from 'react';
import { Code } from '@expo/html-elements';
import { cssInterop } from 'nativewind';
import { tva } from '@/utils/gluestack-utils/nativewind/utils/tva';
cssInterop(Code, { className: 'style' });
const inlineStyle = tva({
  base: 'text-typography-900 text-md font-medium leading-6 px-[6px] py-[2px] bg-typography-50 font-space-mono rounded-sm',
});
export const InlineCode = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <Code
        className={inlineStyle({ class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);
