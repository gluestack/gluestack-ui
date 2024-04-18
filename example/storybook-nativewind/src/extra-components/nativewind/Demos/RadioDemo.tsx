import React, { useState } from 'react';
import {
  CircleIcon,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  VStack,
} from '../../../core-components/nativewind';

const RadioDemo = () => {
  const [values, setValues] = useState('Monday');
  return (
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="md">
        <Radio value="Monday">
          <RadioLabel>Option A</RadioLabel>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
        </Radio>
        <Radio value="Tuesday">
          <RadioLabel>Option B</RadioLabel>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
        </Radio>
      </VStack>
    </RadioGroup>
  );
};

export default RadioDemo;
