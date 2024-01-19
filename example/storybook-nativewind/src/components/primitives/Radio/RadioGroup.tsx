import React from 'react';
/* eslint-disable no-console */
import {
  CircleIcon,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@custom-ui/themed';

const RadioGroupBasic = ({
  size,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  ...props
}: any) => {
  const [values, setValues] = React.useState('Label 1');

  return (
    <RadioGroup
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
        aria-label="Label 1"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        {...props}
      >
        <RadioIndicator>
          <RadioIcon>
            <CircleIcon />
          </RadioIcon>
        </RadioIndicator>
        <RadioLabel>Label 1</RadioLabel>
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 2"
        aria-label="Label 2"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
      >
        <RadioIndicator>
          <RadioIcon>
            <CircleIcon />
          </RadioIcon>
        </RadioIndicator>
        <RadioLabel>Label 2</RadioLabel>
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 3"
        aria-label="Label 3"
        onChange={(isSelected: boolean) =>
          console.log(isSelected, 'isSelected')
        }
      >
        <RadioIndicator>
          <RadioIcon>
            <CircleIcon />
          </RadioIcon>
        </RadioIndicator>
        <RadioLabel>Label 3</RadioLabel>
      </Radio>
    </RadioGroup>
  );
};

RadioGroupBasic.description =
  'This is a basic RadioGroup component example. RadioGroups are form elements that allow users to select one option from a set.';

export default RadioGroupBasic;
