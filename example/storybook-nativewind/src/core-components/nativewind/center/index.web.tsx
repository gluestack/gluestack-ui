import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
const centerStyle = tva({
  base: 'flex flex-col justify-center items-center',
});

const Center = ({ className, ...props }: any) => {
  return <div className={centerStyle({ class: className })} {...props} />;
};

Center.displayName = 'Center';

export { Center };
