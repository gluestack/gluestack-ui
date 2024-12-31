'use client';
import React, { forwardRef } from 'react';
import { View, TextInput } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { createPinInput } from '@gluestack-ui/pin-input';
import {
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const SCOPE = 'PIN_INPUT';

const PinInputRoot = createPinInput({
  Root: withStyleContext(View, SCOPE),
  Input: TextInput,
});

const PinInputStyle = tva({
  base: `flex flex-row gap-2.5 p-2 rounded-md bg-transparent items-center justify-center`,
  variants: {
    size: {
      sm: ``,
      md: ``,
      lg: ``,
      xl: ``,
    },
  },
});

const PinInputFieldStyle = tva({
  base: `flex w-10 h-10 p-0 rounded-md text-typography-950 text-base bg-background-50 text-center ios:leading-[0px] border border-background-200 data-[hover=true]:bg-background-100 data-[hover=true]:border-background-200 web:data-[focus=true]:outline web:data-[focus=true]:outline-blue-200 data-[focus=true]:bg-background-200`,
  parentVariants: {
    size: {
      xl: 'h-12 w-12 text-2xl',
      lg: 'h-11 w-11 text-xl',
      md: 'h-10 w-10 text-lg',
      sm: 'h-9 w-9 text-base',
    },
  },
});

type IPinInputProps = React.ComponentProps<typeof PinInputRoot> &
  VariantProps<typeof PinInputStyle> & { className?: string };

const PinInput = forwardRef<
  React.ElementRef<typeof PinInputRoot>,
  IPinInputProps
>(({ children, size = 'lg', className, ...props }, ref) => {
  return (
    <PinInputRoot
      ref={ref}
      className={PinInputStyle({
        class: className,
      })}
      {...props}
      context={{ size: size }}
    >
      {children}
    </PinInputRoot>
  );
});

type IPinInputFieldProps = React.ComponentProps<typeof PinInputRoot.Input> &
  VariantProps<typeof PinInputFieldStyle> & { className?: string };

const PinInputField = forwardRef<
  React.ElementRef<typeof PinInputRoot.Input>,
  IPinInputFieldProps
>(({ className, size, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);
  return (
    <PinInputRoot.Input
      ref={ref}
      className={PinInputFieldStyle({
        class: className,
        parentVariants: {
          size: size ?? parentSize,
        },
      })}
      {...props}
    />
  );
});

PinInput.displayName = 'PinInput';
PinInputField.displayName = 'PinInputField';

export { PinInput, PinInputField };
