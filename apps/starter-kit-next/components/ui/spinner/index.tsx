'use client';
import { ActivityIndicator } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { styled } from 'nativewind';

const StyledActivityIndicator = styled(ActivityIndicator, {
  className: { target: 'style', nativeStyleToProp: { color: true } },
});
const spinnerStyle = tva({});

const Spinner = React.forwardRef<
  React.ComponentRef<typeof StyledActivityIndicator>,
  React.ComponentProps<typeof StyledActivityIndicator>
>(function Spinner(
  {
    className,
    color,
    focusable = false,
    'aria-label': ariaLabel = 'loading',
    ...props
  },
  ref
) {
  return (
    <StyledActivityIndicator
      ref={ref}
      focusable={focusable}
      aria-label={ariaLabel}
      {...props}
      color={color}
      className={spinnerStyle({ class: className })}
    />
  );
});

Spinner.displayName = 'Spinner';

export { Spinner };
