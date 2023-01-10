import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { FormControl, Input, WarningIcon } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

const MyFormControlMeta: ComponentMeta<typeof FormControl> = {
  title: 'FORMS/FormControl',
  component: FormControl,
  argTypes: {
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isRequired: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isInvalid: true,
    isRequired: true,
    isDisabled: false,
  },
};

export default MyFormControlMeta;

type MyCustomFormControlStory = ComponentStory<typeof FormControl>;

export const Basic: MyCustomFormControlStory = ({ ...props }) => {
  return (
    <Wrapper>
      <FormControl {...props}>
        {/* Label Message */}
        <FormControl.Label>
          <FormControl.Label.Text>Password</FormControl.Label.Text>
        </FormControl.Label>

        <Input.Root>
          <Input type="password" defaultValue="12345" placeholder="password" />
        </Input.Root>

        {/* Helper Text */}
        <FormControl.Helper>
          <FormControl.Helper.Text>
            Must be atleast 6 characters.
          </FormControl.Helper.Text>
        </FormControl.Helper>

        {/* Error Message */}
        <FormControl.Error>
          <FormControl.Error.Icon>
            <WarningIcon
              sx={{ style: { color: '$red500', height: '$3', width: '$3' } }}
            />
          </FormControl.Error.Icon>
          <FormControl.Error.Text>
            Atleast 6 characters are required.
          </FormControl.Error.Text>
        </FormControl.Error>
      </FormControl>
    </Wrapper>
  );
};
