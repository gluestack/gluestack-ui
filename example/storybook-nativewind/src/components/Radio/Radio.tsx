/* eslint-disable no-console */
import React from 'react';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';

const RadioBasic = ({ ...props }: any) => {
  const [values, setValues] = React.useState('Label 1');

  return (
    <RadioGroup value={values} onChange={setValues}>
      <Radio
        {...props}
        value="Label 1"
        aria-label="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
      >
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label 1</RadioLabel>
      </Radio>
      <Radio
        {...props}
        value="Label 2"
        aria-label="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
      >
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label 2</RadioLabel>
      </Radio>
    </RadioGroup>
  );
};

RadioBasic.description =
  'This is a basic Radio component example. Radio buttons are used to select a single option from a list of options.';

export default RadioBasic;

export { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel, CircleIcon };
