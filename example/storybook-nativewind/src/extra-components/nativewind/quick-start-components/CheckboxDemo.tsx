import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import React from 'react';

const CheckboxDemo = () => {
  return (
    <Checkbox value="label">
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
};

export default CheckboxDemo;
