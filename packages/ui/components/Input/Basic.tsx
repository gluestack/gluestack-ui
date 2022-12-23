import { Input } from '@gluestack/ui';
import React from 'react';

export const Example = ({ ...props }) => {
  let { variant, isInvalid, isDisabled, size, ...inputProps } = props;
  return (
    <>
      <Input.Root
        variant={variant}
        size={size}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
      >
        <Input placeholder="Write something..." {...inputProps} />
      </Input.Root>
    </>
  );
};
