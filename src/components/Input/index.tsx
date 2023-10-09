import React, { Children, cloneElement, forwardRef } from 'react';
import { createInput } from '@gluestack-ui/input';
import {
  Root,
  Icon,
  Slot,
  Input as StyledInput,
  Group as StyledInputGroup,
  LeftAddon as StyledInputLeftAddon,
  RightAddon as StyledInputRightAddon,
} from './styled-components';
import { Text } from '../Text';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';

const AccessibleInput = createInput({
  Root,
  Icon,
  Slot,
  Input: StyledInput,
});

type InputProps = {
  InputLeftElement?: any;
  InputRightElement?: any;
  placeholder?: string;
};

const InputTemp = forwardRef(
  (
    { InputLeftElement, InputRightElement, placeholder, ...props }: any,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    // const stateProps = {};
    return (
      <AccessibleInput ref={ref} {...resolvedProps}>
        {InputLeftElement && InputLeftElement}
        <AccessibleInput.Input placeholder={placeholder} />
        {InputRightElement && InputRightElement}
      </AccessibleInput>
    );
  }
);

export type IInputComponentType<Input> = GenericComponentType<
  Input,
  InputProps
>;

export const Input = InputTemp as IInputComponentType<typeof AccessibleInput>;

const InputGroupTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const ChildrenStyled = Children.map(children, (child, index) => {
    if (index === 0)
      return cloneElement(child, {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      });
    if (index === Children.count(children) - 1)
      return cloneElement(child, {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      });

    return cloneElement(child, {
      borderRadius: 0,
    });
  });
  return (
    <StyledInputGroup {...props} ref={ref}>
      {ChildrenStyled}
    </StyledInputGroup>
  );
});

export type IInputGroupComponentType<InputGroup> =
  GenericComponentType<InputGroup>;

export const InputGroup = InputGroupTemp as IInputGroupComponentType<
  typeof StyledInputGroup
>;

const InputLeftAddonTemp = forwardRef(
  ({ children, ...props }: any, ref?: any) => (
    <StyledInputLeftAddon {...props} ref={ref}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </StyledInputLeftAddon>
  )
);

export type IInputLeftAddonComponentType<InputLeftAddon> =
  GenericComponentType<InputLeftAddon>;

export const InputLeftAddon =
  InputLeftAddonTemp as IInputLeftAddonComponentType<
    typeof StyledInputLeftAddon
  >;

const InputRightAddonTemp = forwardRef(
  ({ children, ...props }: any, ref?: any) => (
    <StyledInputRightAddon {...props} ref={ref}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </StyledInputRightAddon>
  )
);

export type IInputRightAddonComponentType<InputRightAddon> =
  GenericComponentType<InputRightAddon>;

export const InputRightAddon =
  InputRightAddonTemp as IInputRightAddonComponentType<
    typeof StyledInputRightAddon
  >;
