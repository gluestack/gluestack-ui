// InputGrid.tsx

import React from 'react';
import {
  Input,
  InputField,
} from '../../../../core-components/nativewind/input';
const InputGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Default" />
      </Input>

      <Input
        variant="rounded"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Rounded" />
      </Input>

      <Input
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Underlined" />
      </Input>

      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={true}
        isReadOnly={false}
      >
        <InputField placeholder="Error" />
      </Input>
    </div>
  );
};

export default InputGrid;
