import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '../../../core-components/nativewind';
import React from 'react';

export const CheckboxDemo = () => {
  return (
    <Checkbox>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
};
