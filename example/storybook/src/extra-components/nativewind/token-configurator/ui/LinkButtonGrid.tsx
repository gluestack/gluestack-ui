// LinkButtonGrid.tsx

import React from 'react';
import {
  Button,
  ButtonText,
} from '../../../../core-components/nativewind/button';

const LinkButtonGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 my-4">
      <Button
        size="lg"
        variant="link"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Primary</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="link"
        action="secondary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Secondary</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="link"
        action="positive"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Positive</ButtonText>
      </Button>

      <Button
        size="lg"
        variant="link"
        action="negative"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Negative</ButtonText>
      </Button>
    </div>
  );
};

export default LinkButtonGrid;
