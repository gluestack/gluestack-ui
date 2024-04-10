import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@gluestack-ui/themed';
import React from 'react';

export const CheckboxDemo = () => {
  return (
    <Checkbox
      size="md"
      isInvalid={false}
      isDisabled={false}
      value="Label 1"
      aria-label="Label 1"
    >
      <CheckboxIndicator mr="$2">
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Try me!</CheckboxLabel>
    </Checkbox>
  );
};
