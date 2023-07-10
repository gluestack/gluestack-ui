import React from 'react';
/* eslint-disable no-console */
// @ts-ignore
import { CircleIcon } from '../../../ui-components';
import {
  Center,
  Radio,
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  FormControl,
} from '../../../ui-components';

const RadioStory = ({
  size,
  isDisabled,
  isInvalid,
  isReadOnly,
  ...props
}: any) => {
  const [values, setValues] = React.useState();

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
          <Radio.Icon as={CircleIcon} />
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
          <Radio.Icon as={CircleIcon} />
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
          <Radio.Icon as={CircleIcon} />
        </Radio.Indicator>
        <Radio.Label>Label 3</Radio.Label>
      </Radio>
    </Radio.Group>
  );
};

export default RadioStory;

export {
  Radio,
  CircleIcon,
  Center,
  VStack,
  HStack,
  Box,
  Heading,
  Text,
  FormControl,
};
