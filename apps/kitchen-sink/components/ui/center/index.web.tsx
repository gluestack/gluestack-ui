import React from 'react';
import { centerStyle } from './styles';

import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

type ICenterProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof centerStyle> & { testID?: string };

const Center = React.forwardRef<HTMLDivElement, ICenterProps>(function Center(
  { className, testID, ...props },
  ref
) {
  return (
    <div className={centerStyle({ class: className })} {...props} ref={ref} data-testid={testID}/>
  );
});

Center.displayName = 'Center';

export { Center };
