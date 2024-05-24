import React from 'react';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxGroup,
} from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';

const CheckboxGroupBasic = ({ ...props }: any) => {
  return (
    <Checkbox {...props}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
};
