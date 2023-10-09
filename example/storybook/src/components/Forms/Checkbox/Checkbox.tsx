import React from 'react';
import {
  Center,
  Text,
  CheckIcon,
  Icon,
  HStack,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Heading,
  VStack,
  RemoveIcon,
  Box,
  FormControl,
} from '@gluestack-ui/themed';

const CheckboxGroupBasic = ({ ...props }: any) => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <CheckboxGroup
      accessibilityLabel="Checkbox Group"
      value={values}
      onChange={setValues}
      nativeID="checkbox-group"
    >
      <Checkbox
        m="$2"
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
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label 1</CheckboxLabel>
      </Checkbox>
      <Checkbox
        m="$2"
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
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label 2</CheckboxLabel>
      </Checkbox>
    </CheckboxGroup>
  );
};

const FigmaCheckboxStory = ({ ...props }: any) => {
  const iconSize: any = {
    sm: '2xs',
    md: 'sm',
    lg: 'md',
  };

  return (
    <Checkbox {...props} nativeID="checkbox-1">
      <CheckboxIndicator mr="$2">
        <CheckboxIcon
          as={CheckIcon}
          // @ts-ignore
          dataSet={{
            'component-props': JSON.stringify({
              'instance': true,
              'instance-name': 'Icon',
              'name': 'CheckIcon',
              'size': iconSize[props.size],
            }),
          }}
        />
      </CheckboxIndicator>
      <CheckboxLabel
        // @ts-ignore
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': props.size,
          }),
        }}
      >
        Label 1
      </CheckboxLabel>
    </Checkbox>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export {
  FigmaCheckboxStory,
  Center,
  Text,
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  VStack,
  Icon,
  HStack,
  RemoveIcon,
  Heading,
  Box,
  FormControl,
};
