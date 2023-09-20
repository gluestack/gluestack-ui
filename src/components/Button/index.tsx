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

type IButtonGroupProps = React.ComponentProps<typeof AccessibleButton.Group>;
type IButtonProps = React.ComponentProps<typeof AccessibleButton>;
type IOtherProps = {
  isLoading?: boolean;
  isLoadingText?: string;
  spinnerPlacement?: 'start' | 'end';
  leftIcon?: any;
  rightIcon?: any;
  startIcon?: any;
  endIcon?: any;
};

const NewButton = forwardRef(
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
    }: IButtonProps & IOtherProps,
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
        ) : children && typeof children === 'string' ? (
          <AccessibleButton.Text>{children}</AccessibleButton.Text>
        ) : (
          children && { children }
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

const NewGroupButton = forwardRef(
  ({ children, ...props }: IButtonGroupProps, ref?: any) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleButton.Group {...resolvedPropForGluestack} ref={ref}>
        {children}
      </AccessibleButton.Group>
    );
  }
);

export const Button = NewButton as typeof NewButton & {
  Group: typeof NewGroupButton;
};

Button.Group = NewGroupButton;
