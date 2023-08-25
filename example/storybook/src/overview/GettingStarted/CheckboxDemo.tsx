import {
  CheckIcon,
  Checkbox,
  CheckboxIndicator,
  VStack,
  CheckboxIcon,
  CheckboxLabel,
} from '@gluestack-ui/themed';
import React from 'react';

const CheckboxDemo = () => {
  return (
    <VStack alignItems="center">
      <Checkbox value="Label 1" aria-label="Label 1">
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Try Me!</CheckboxLabel>
      </Checkbox>
    </VStack>
  );
};

export default CheckboxDemo;
