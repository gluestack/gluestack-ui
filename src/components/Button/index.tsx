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

import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

export const AccessibleButton = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});

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
      // Todo: fix this typing
      // @ts-ignore
      colorScheme = 'primary',
      variant = 'solid',
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleButton
        colorScheme={colorScheme}
        variant={variant}
        {...resolvedPropForGluestack}
        ref={ref}
        isDisabled={isLoading || isDisabled}
      >
        {!isLoading &&
          (leftIcon ? (
            <AccessibleButton.Icon as={leftIcon} />
          ) : (
            startIcon && <AccessibleButton.Icon as={startIcon} />
          ))}
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
        {!isLoading &&
          (rightIcon ? (
            <AccessibleButton.Icon as={rightIcon} />
          ) : (
            endIcon && <AccessibleButton.Icon as={endIcon} />
          ))}
      </AccessibleButton>
    );
  }
);

const NewGroupButton = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleButton.Group {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleButton.Group>
  );
});

const ButtonTemp = NewButton as any;
ButtonTemp.Group = NewGroupButton;

export type IButtonComponentType<Button, Group> =
  GenericComponentType<Button> & {
    Group: GenericComponentType<Group>;
  };

export const Button = ButtonTemp as IButtonComponentType<
  typeof AccessibleButton,
  typeof AccessibleButton.Group
>;
