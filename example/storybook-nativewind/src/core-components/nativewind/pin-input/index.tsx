'use client';
import React, { forwardRef } from 'react';
import { View, TextInput } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { createPinInput } from '@gluestack-ui/pin-input';

const PinInputRoot = createPinInput({
  Root: View,
  Input: TextInput,
});

const PinInputStyle = tva({
  base: `flex flex-row gap-2.5 p-2 rounded-md bg-transparent items-center justify-center`,
  variants: {
    size: {
      sm: ``,
      md: ``,
      lg: ``,
    },
  },
});

const PinInputFieldStyle = tva({
  base: `flex w-10 h-10 p-0 rounded-md text-lg bg-background-50 text-center justify-center items-center border border-background-200 data-[hover=true]:bg-background-100 data-[hover=true]:border-background-200 web:data-[focus=true]:outline web:data-[focus=true]:outline-blue-200 data-[focus=true]:bg-background-200`,
  parentVariants: {
    size: {
      sm: `text-base w-8 h-8`,
      md: `text-lg w-10 h-10`,
      lg: `text-xl w-12 h-12`,
    },
  },
});

const PinInput = forwardRef<
  React.ElementRef<typeof PinInputRoot>,
  React.ComponentProps<typeof PinInputRoot> & { className?: string }
>(({ children, className, ...props }, ref) => {
  return (
    <PinInputRoot
      // @ts-ignore
      ref={ref}
      className={PinInputStyle({
        class: className,
      })}
      {...props}
    >
      {children}
    </PinInputRoot>
  );
});

const PinInputField = forwardRef<
  React.ElementRef<typeof PinInputRoot.Input>,
  React.ComponentProps<typeof PinInputRoot.Input> & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <PinInputRoot.Input
      // @ts-ignore
      ref={ref}
      className={PinInputFieldStyle({
        class: className,
        size: 'sm',
      })}
      {...props}
    />
  );
});

PinInput.displayName = 'PinInput';
PinInputField.displayName = 'PinInputField';

export { PinInput, PinInputField };
