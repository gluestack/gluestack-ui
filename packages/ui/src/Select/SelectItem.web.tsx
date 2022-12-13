import React from 'react';
import type { ISelectItemProps } from './types';

export const SelectItem = ({
  isDisabled,
  label,
  value,
  ..._props
}: ISelectItemProps) => {
  return (
    <option value={value} disabled={isDisabled}>
      {label}
    </option>
  );
};
