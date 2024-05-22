import React from 'react';
import { centerStyle } from './styles';

const Center = ({ className, ...props }: any) => {
  return <div className={centerStyle({ class: className })} {...props} />;
};

Center.displayName = 'Center';

export { Center };
