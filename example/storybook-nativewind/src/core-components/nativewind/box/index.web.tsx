import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';

const boxStyle = tva({
  base: '',
});
const Box = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <div ref={ref} className={boxStyle({ class: className })} {...props} />
  );
});

Box.displayName = 'Box';
export { Box };
