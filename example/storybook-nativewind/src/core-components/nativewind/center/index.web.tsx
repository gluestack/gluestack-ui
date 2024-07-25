import React from 'react';
import { centerStyle } from './styles';

import type { VariantProps } from '@gluestack-ui/nativewind-utils';
type ICenterProps = VariantProps<typeof centerStyle> &
  React.HTMLAttributes<HTMLDivElement>;

const Center = ({ className, ...props }: ICenterProps) => {
  return <div className={centerStyle({ class: className })} {...props} />;
};

Center.displayName = 'Center';

export { Center };
