import { Image, Input } from '@gluestack/ui';
import React from 'react';

export const Example = ({ ...props }) => {
  let { variant, isInvalid, size, ...inputProps } = props;
  return (
    <>
      <Input.Root variant={variant} size={size} isInvalid={isInvalid}>
        <Input placeholder="placeholder..." {...inputProps} />
      </Input.Root>
    </>
  );
};
