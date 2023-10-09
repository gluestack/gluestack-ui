import React, { Children, cloneElement, forwardRef } from 'react';
import { createInput } from '@gluestack-ui/input';
import {
  Root,
  Icon,
  Slot,
  StyledInput,
  AccessibleInputGroup,
  AccessibleInputLeftAddon,
  AccessibleInputRightAddon,
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
    <AccessibleInputGroup {...props} ref={ref}>
      {ChildrenStyled}
    </AccessibleInputGroup>
  );
});

export type IInputGroupComponentType<InputGroup> =
  GenericComponentType<InputGroup>;

export const InputGroup = InputGroupTemp as IInputGroupComponentType<
  typeof AccessibleInputGroup
>;

const InputLeftAddonTemp = forwardRef(
  ({ children, ...props }: any, ref?: any) => (
    <AccessibleInputLeftAddon {...props} ref={ref}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </AccessibleInputLeftAddon>
  )
);

export type IInputLeftAddonComponentType<InputLeftAddon> =
  GenericComponentType<InputLeftAddon>;

export const InputLeftAddon =
  InputLeftAddonTemp as IInputLeftAddonComponentType<
    typeof AccessibleInputLeftAddon
  >;

const InputRightAddonTemp = forwardRef(
  ({ children, ...props }: any, ref?: any) => (
    <AccessibleInputRightAddon {...props} ref={ref}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </AccessibleInputRightAddon>
  )
);

export type IInputRightAddonComponentType<InputRightAddon> =
  GenericComponentType<InputRightAddon>;

export const InputRightAddon =
  InputRightAddonTemp as IInputRightAddonComponentType<
    typeof AccessibleInputRightAddon
  >;
