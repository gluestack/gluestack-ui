import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Checkbox, CheckIcon, Text, Center } from '@gluestack/ui';
import Wrapper from '../Wrapper';

const MyCheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'FORMS/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    // value: {
    //   control: {
    //     type: 'check',
    //     options: ['Label 1', 'Label 2'],
    //   },
    // },
    isInvalid: {
      type: 'boolean',
    },
    isDisabled: {
      type: 'boolean',
    },
    isReadOnly: {
      type: 'boolean',
    },
  },
  args: {
    size: 'md',
    // value: ['Label 1'],
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
};

export default MyCheckboxMeta;

type MyCheckboxStory = ComponentStory<typeof Checkbox>;

export const Basic: MyCheckboxStory = ({
  size,
  isInvalid,
  isDisabled,
  isReadOnly,
  ...props
}) => {
  const [values, setValues] = React.useState([]);
  return (
    <Wrapper>
      <Center>
        <Text>{`(Selected: ${values.length})`}</Text>
        <Checkbox.Group
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          value={values}
          onChange={setValues}
          {...props}
        >
          <Checkbox
            size={size}
            isInvalid={isInvalid}
            isIndeterminate
            value="Label 1"
            aria-label="Label 1"
            accessibilityLabel="Checkbox"
            onChange={(isSelected: boolean) =>
              // eslint-disable-next-line no-console
              console.log(isSelected, '###')
            }
          >
            <Checkbox.Indicator>
              <Checkbox.Icon>
                <CheckIcon />
              </Checkbox.Icon>
            </Checkbox.Indicator>
            <Checkbox.Label>Label 1</Checkbox.Label>
          </Checkbox>
          <Checkbox
            isInvalid={isInvalid}
            size={size}
            aria-label="Label 2"
            value="Label 2"
            accessibilityLabel="Checkbox"
            onChange={(isSelected: boolean) =>
              // eslint-disable-next-line no-console
              console.log(isSelected, '###')
            }
          >
            <Checkbox.Indicator>
              <Checkbox.Icon>
                <CheckIcon />
              </Checkbox.Icon>
            </Checkbox.Indicator>
            <Checkbox.Label>Label 2</Checkbox.Label>
          </Checkbox>
        </Checkbox.Group>
      </Center>
    </Wrapper>
  );
};
