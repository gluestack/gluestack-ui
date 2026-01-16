import React from 'react';
import { LI } from '@expo/html-elements';
import { cssInterop } from 'nativewind';
import { tva } from '@gluestack-ui/core/nativewind-utils';

cssInterop(LI, { className: 'style' });

const LIStyle = tva({
  base: 'flex flex-row text-foreground text-md font-normal leading-6',
});

export const StyledLI = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <LI className={LIStyle({ class: className })} {...props} ref={ref} />
    );
  }
);
