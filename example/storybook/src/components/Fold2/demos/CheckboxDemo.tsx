import { CheckIcon, Checkbox, VStack } from '../../../ui-components';
import React from 'react';

const CheckboxDemo = () => {
  return (
    <VStack alignItems="center">
      <Checkbox value="Label 1" aria-label="Label 1">
        <Checkbox.Indicator mr="$2">
          <Checkbox.Icon as={CheckIcon} />
        </Checkbox.Indicator>
        <Checkbox.Label>Try Me!</Checkbox.Label>
      </Checkbox>
    </VStack>
  );
};

export default CheckboxDemo;
