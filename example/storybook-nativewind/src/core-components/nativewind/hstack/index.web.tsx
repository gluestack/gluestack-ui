import React from 'react';
import { hstackStyle } from './styles';

const HStack = ({ className, space, reversed, ...props }: any) => {
  return (
    <div
      className={hstackStyle({ space, reversed, class: className })}
      {...props}
    />
  );
};

HStack.displayName = 'HStack';

export { HStack };
