import React from 'react';
/* eslint-disable no-console */
import { CircleIcon, Radio } from '../../../ui-components';

const RadioGroup = ({
  size,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  ...props
}: any) => {
  const [values, setValues] = React.useState('Label 1');

  return (
    <Radio.Group
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      value={values}
      onChange={setValues}
    >
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 1"
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
      >
        <Radio.Indicator>
          <Radio.Icon>
            <CircleIcon />
          </Radio.Icon>
        </Radio.Indicator>
        <Radio.Label>Label 1</Radio.Label>
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 2"
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
      >
        <Radio.Indicator>
          <Radio.Icon>
            <CircleIcon />
          </Radio.Icon>
        </Radio.Indicator>
        <Radio.Label>Label 2</Radio.Label>
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 3"
        accessibilityLabel="Radio"
        onChange={(isSelected: boolean) =>
          console.log(isSelected, 'isSelected')
        }
      >
        <Radio.Indicator>
          <Radio.Icon>
            <CircleIcon />
          </Radio.Icon>
        </Radio.Indicator>
        <Radio.Label>Label 3</Radio.Label>
      </Radio>
    </Radio.Group>
  );
};

export default RadioGroup;
