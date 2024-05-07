// OutlineButtonGrid.tsx
import React from 'react';
import {
  Button,
  ButtonText,
} from '../../../../core-components/nativewind/button';

const OutlineButtonGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
      <Button
        size="lg"
        variant="outline"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Primary</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="outline"
        action="secondary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Secondary</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="outline"
        action="positive"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Positive</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="outline"
        action="negative"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Negative</ButtonText>
      </Button>
    </div>
  );
};

export default OutlineButtonGrid;
