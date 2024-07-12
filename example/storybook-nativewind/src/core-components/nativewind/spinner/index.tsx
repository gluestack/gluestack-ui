'use client';
import { ActivityIndicator } from 'react-native';
import React from 'react';
import { createSpinner } from '@gluestack-ui/spinner';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from 'nativewind';

const UISpinner = createSpinner({ Root: ActivityIndicator });

cssInterop(UISpinner, {
  className: { target: 'style', nativeStyleToProp: { color: true } },
});

const spinnerStyle = tva({});
const Spinner = React.forwardRef(({ className, color, ...props }: any, ref) => {
  return (
    <UISpinner
      ref={ref}
      {...props}
      color={color}
      className={spinnerStyle({ class: className })}
    />
  );
});

Spinner.displayName = 'Spinner';

export { Spinner };
