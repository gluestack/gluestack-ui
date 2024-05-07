import {
  Button,
  ButtonText,
} from '../../../../core-components/nativewind/button';
import React from 'react';

const SolidButtonGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <Button
        size="lg"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Primary</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="solid"
        action="secondary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Secondary</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="solid"
        action="positive"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Positive</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="solid"
        action="negative"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Negative</ButtonText>
      </Button>
    </div>
  );
};

export default SolidButtonGrid;
