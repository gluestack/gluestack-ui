import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { centerStyle as centerBaseStyle } from './index';
const centerStyle = tva({
  extend: centerBaseStyle,
  base: 'flex flex-col',
});

const Center = ({ className, ...props }: any) => {
  return <div className={centerStyle({ class: className })} {...props} />;
};

Center.displayName = 'Center';

export { Center };
