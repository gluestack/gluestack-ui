import React from 'react';
import { boxStyle } from './styles';

const Box = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <div ref={ref} className={boxStyle({ class: className })} {...props} />
  );
});

Box.displayName = 'Box';
export { Box };
