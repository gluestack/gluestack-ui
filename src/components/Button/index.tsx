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
import { GenericComponentType, IColorSchemes } from '../../types';

const AccessibleButton = createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon,
});

type IButtonProps = {
  leftIcon?: any;
  rightIcon?: any;
  startIcon?: any;
  endIcon?: any;
  colorScheme?: IColorSchemes;
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

export type IButtonComponentType<Button, Group> = GenericComponentType<
  Button,
  IButtonProps
> & {
  Group: GenericComponentType<Group>;
};

export const Button = ButtonTemp as IButtonComponentType<
  typeof AccessibleButton,
  typeof AccessibleButton.Group
>;
