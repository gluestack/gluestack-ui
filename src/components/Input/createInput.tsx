import { createInput } from '@gluestack-ui/input';
import { Root, Icon, StyledInput } from './styled-components';
import { usePropResolution } from '../../hooks/usePropResolution';
import React, { forwardRef } from 'react';

const AccessibleInput = createInput({
  Root,
  Icon,
  Input: StyledInput,
});

type InputProps = Parameters<typeof AccessibleInput>[0] &
  Parameters<typeof AccessibleInput.Input>[0] & {
    InputLeftElement?: any;
    InputRightElement?: any;
  };

export const Input = forwardRef(
  (
    {
      //@ts-ignore
      size,
      variant,
      isInvalid,
      isDisabled,
      isFocused,
      isFullWidth,
      isTVSelectable,
      isHovered,
      isReadOnly,
      isRequired,
      InputLeftElement,
      InputRightElement,
      placeholder,
      ...props
    }: InputProps,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    // const stateProps = {};
    return (
      <AccessibleInput
        size={size}
        variant={variant}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isFullWidth={isFullWidth}
        isTVSelectable={isTVSelectable}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        isHovered={isHovered}
        ref={ref}
        {...resolvedProps}
      >
        {InputLeftElement && (
          <AccessibleInput.Icon ml="0.5rem">
            <Icon as={InputLeftElement} />
          </AccessibleInput.Icon>
        )}
        <AccessibleInput.Input placeholder={placeholder} />
        {InputRightElement && (
          <AccessibleInput.Icon mr="0.5rem">
            <Icon as={InputRightElement} />
          </AccessibleInput.Icon>
        )}
      </AccessibleInput>
    );
  }
);
