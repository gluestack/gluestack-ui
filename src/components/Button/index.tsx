// import React, { useEffect, useState } from 'react';
import React, { forwardRef } from 'react';
import { createButton } from '@gluestack-ui/button';
import {
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
} from './styled-components';
// import { useStyled } from '@gluestack-style/react';
import { usePropResolution } from '../../hooks/usePropResolution';

export const AccessibleButton = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});

export const Button = forwardRef(
  (
    {
      children,
      isLoading,
      isDisabled,
      isLoadingText,
      spinnerPlacement,
      leftIcon,
      rightIcon,
      startIcon,
      endIcon,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);

    return (
      <AccessibleButton
        {...resolvedPropForGluestack}
        ref={ref}
        isDisabled={isLoading || isDisabled}
      >
        {leftIcon ? (
          <AccessibleButton.Icon as={leftIcon} />
        ) : (
          startIcon && <AccessibleButton.Icon as={startIcon} />
        )}
        {isLoading && spinnerPlacement === 'start' && (
          <AccessibleButton.Spinner />
        )}
        {isLoading ? (
          isLoadingText && (
            <AccessibleButton.Text>{isLoadingText}</AccessibleButton.Text>
          )
        ) : typeof children === 'string' ? (
          <AccessibleButton.Text>{children}</AccessibleButton.Text>
        ) : (
          { children }
        )}
        {isLoading && spinnerPlacement === 'end' && (
          <AccessibleButton.Spinner />
        )}
        {rightIcon ? (
          <AccessibleButton.Icon as={rightIcon} />
        ) : (
          endIcon && <AccessibleButton.Icon as={endIcon} />
        )}
      </AccessibleButton>
    );
  }
);

// export const ButtonText = forwardRef(
//   ({ children, ...props }: any, ref?: any) => {
//     return (
//       <AccessibleButton.Text {...props} ref={ref}>
//         {children}
//       </AccessibleButton.Text>
//     );
//   }
// );

//@ts-ignore
Button.Group = AccessibleButton.Group;
