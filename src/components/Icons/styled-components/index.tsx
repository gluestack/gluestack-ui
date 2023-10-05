import React, { forwardRef } from 'react';
import { default as Root } from './Root';
import { createIcon } from '@gluestack-ui/icon';
import { usePropResolution } from '../../../hooks/usePropResolution';

type ParameterTypes = Omit<Parameters<typeof createIcon>[0], 'Root'>;

const createIconNB = (props: ParameterTypes) => {
  const Icon = createIcon({ Root, ...props });
  const CreatedIcon = forwardRef(
    ({ ...propsIcon }: React.ComponentProps<typeof Icon>, ref?: any) => {
      const resolvedProps = usePropResolution(propsIcon);
      return <Icon {...resolvedProps} ref={ref} />;
    }
  );
  return CreatedIcon;
};

export { createIconNB as createIcon };

export { default as Root } from './Root';
export { StyledIcon } from './Root';
