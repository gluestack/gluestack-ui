import { Image, Input } from '@gluestack/ui';
import React from 'react';

export const Example = ({ ...props }) => {
  let { variant, isInvalid, ...inputProps } = props;
  return (
    <>
      <Input.Root variant={variant} isInvalid={isInvalid}>
        <Input placeholder="placeholder..." {...inputProps} />
      </Input.Root>
    </>
  );
};
