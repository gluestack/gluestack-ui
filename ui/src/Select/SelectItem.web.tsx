import React, { forwardRef, memo } from 'react';
import type { ISelectItemProps } from './types';

export const SelectItem = ({
  isDisabled,
  label,
  value,
  ...props
}: ISelectItemProps) => {
  return (
    <option value={value} disabled={isDisabled}>
      {label}
    </option>
  );
};
