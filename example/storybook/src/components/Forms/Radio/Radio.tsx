import React from 'react';
/* eslint-disable no-console */
// @ts-ignore
import { CircleIcon } from '@gluestack-ui/themed';
import {
  Center,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  FormControl,
} from '@gluestack-ui/themed';

const RadioStory = ({
  size,
  isDisabled,
  isInvalid,
  isReadOnly,
  ...props
}: any) => {
  const [values, setValues] = React.useState();

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
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        mb="$2"
        {...props}
      >
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel ml="$2">Label 1</RadioLabel>
      </Radio>
      <Radio
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        size={size}
        value="Label 2"
        accessibilityLabel="Radio"
        onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        mb="$2"
      >
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel ml="$2">Label 2</RadioLabel>
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
        mb="$2"
      >
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel ml="$2">Label 3</RadioLabel>
      </Radio>
    </RadioGroup>
  );
};

export default RadioStory;

export {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  CircleIcon,
  Center,
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  FormControl,
};
