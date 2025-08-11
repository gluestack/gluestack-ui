'use client';
import React from 'react';
import { Switch as RNSwitch } from 'react-native';
import { createSwitch } from '@gluestack-ui/core/switch/creator';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

const UISwitch = createSwitch({
  Root: withStyleContext(RNSwitch),
});

const switchStyle = tva({
  base: 'data-[focus=true]:outline-0 data-[focus=true]:ring-2 data-[focus=true]:ring-indicator-primary web:cursor-pointer disabled:cursor-not-allowed data-[disabled=true]:opacity-40 data-[invalid=true]:border-error-700 data-[invalid=true]:rounded-xl data-[invalid=true]:border-2',

  variants: {
    size: {
      sm: 'scale-75',
      md: '',
      lg: 'scale-125',
    },
  },
});

type ISwitchProps = React.ComponentProps<typeof UISwitch> &
  VariantProps<typeof switchStyle>;
const Switch = React.forwardRef<
  React.ComponentRef<typeof UISwitch>,
  ISwitchProps
>(function Switch({ className, size = 'md', ...props }, ref) {
  return (
    <UISwitch
      ref={ref}
      {...props}
      className={switchStyle({ size, class: className })}
    />
  );
});

Switch.displayName = 'Switch';
export { Switch };
