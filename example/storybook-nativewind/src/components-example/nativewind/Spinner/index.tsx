import { ActivityIndicator } from 'react-native';
import { createSpinner } from '@gluestack-ui/spinner';

import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

export const UISpinner = createSpinner({ Root: ActivityIndicator });

const spinnerStyle = tva({});
export const Spinner = React.forwardRef(
  ({ className, color = 'red', ...props }: any, ref) => {
    return (
      <UISpinner
        ref={ref}
        {...props}
        color={color}
        className={spinnerStyle({ class: className })}
      />
    );
  }
);

// const StyledRoot = styled(
//   ActivityIndicator,
//   {
//     props: {
//       color: '$primary500',
//     },
//   },
//   {
//     resolveProps: ['color'],
//   },
//   {
//     propertyTokenMap: {
//       size: 'size',
//     },
//   }
// );
