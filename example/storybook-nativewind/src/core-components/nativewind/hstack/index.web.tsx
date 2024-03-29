import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { hstackStyle as hstackBaseStyle } from './index';
const hstackStyle = tva({
  extend: hstackBaseStyle,
  base: 'flex',
});

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
