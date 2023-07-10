import React from 'react';

import {
  Center,
  Text,
  CheckIcon,
  Icon,
  HStack,
  Checkbox,
  Heading,
  VStack,
  RemoveIcon,
  Box,
  FormControl,
} from '../../../ui-components';

export const CheckboxStory = ({ ...props }: any) => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <Center>
      <Text>{`(Selected: ${values.length})`}</Text>
      <Checkbox.Group
        accessibilityLabel="Checkbox Group"
        isDisabled={props.isDisabled}
        isReadOnly={props.isReadOnly}
        value={values}
        onChange={setValues}
        {...props}
        nativeID="checkbox-group"
      >
        <Checkbox
          size={props.size}
          isInvalid={props.isInvalid}
          isIndeterminate
          value="Label 1"
          aria-label="Label 1"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) =>
            // eslint-disable-next-line no-console
            console.log(isSelected, '###')
          }
          nativeID="checkbox-1"
        >
          <Checkbox.Indicator mr="$2">
            <Checkbox.Icon as={CheckIcon} />
          </Checkbox.Indicator>
          <Checkbox.Label>Label 1</Checkbox.Label>
        </Checkbox>
        <Checkbox
          isInvalid={props.isInvalid}
          size={props.size}
          aria-label="Label 2"
          value="Label 2"
          accessibilityLabel="Checkbox"
          onChange={(isSelected: boolean) =>
            // eslint-disable-next-line no-console
            console.log(isSelected, '###')
          }
          nativeID="checkbox-2"
        >
          <Checkbox.Indicator mr="$2">
            <Checkbox.Icon as={CheckIcon} />
          </Checkbox.Indicator>
          <Checkbox.Label>Label 2</Checkbox.Label>
        </Checkbox>
      </Checkbox.Group>
    </Center>
  );
};
export {
  Center,
  Text,
  CheckIcon,
  Checkbox,
  VStack,
  Icon,
  HStack,
  RemoveIcon,
  Heading,
  Box,
  FormControl,
};
