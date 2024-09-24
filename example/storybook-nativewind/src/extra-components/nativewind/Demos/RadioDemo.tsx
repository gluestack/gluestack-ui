import React from 'react';
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
  const [values, setValues] = React.useState('optionA');

  return (
    <RadioGroup value={values} onChange={setValues}>
      <VStack space="md">
        <Radio value="optionA">
          <RadioLabel>Option A</RadioLabel>
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
        </Radio>
        <Radio value="optionB">
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
