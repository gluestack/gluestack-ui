import React from 'react';
import { UIContext } from '../UIProvider';
import type { InputProps } from './types';
import { useInput } from './input-content';

export function Input({
  children,
  //   isDisabled,
  //   isInvalid,
  //   isReadOnly,
  //   isRequired,
  onKeyPress,
  type = 'text',
  ...props
}: InputProps) {
  const { StyledInput } = React.useContext(UIContext);
  const { isDisabled, isReadOnly, handleFocus } = useInput('InputContext');

  return (
    <StyledInput
      secureTextEntry={type === 'password'}
      accessible
      editable={isDisabled || isReadOnly ? false : true}
      onKeyPress={(e: any) => {
        e.persist();
        onKeyPress && onKeyPress(e);
      }}
      onFocus={(e: any) => {
        handleFocus(true, props?.onFocus ? () => props?.onFocus(e) : () => {});
      }}
      onBlur={(e: any) => {
        handleFocus(false, props?.onBlur ? () => props?.onBlur(e) : () => {});
      }}
      {...props}
      //   ref={inputRef}
    >
      {children}
    </StyledInput>
  );
}
