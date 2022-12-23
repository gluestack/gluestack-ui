import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import React, { useState } from 'react';
import { Switch, Center } from '@gluestack/ui';
import Wrapper from '../Wrapper';

<<<<<<< HEAD
const SwitchMeta: ComponentMeta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
=======
const MySwitchMeta: ComponentMeta<typeof BasicExample> = {
  title: 'Switch',
  component: BasicExample,
>>>>>>> e5ade313a08989903ebe0a4c1193b000499430e9
  argTypes: {
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isDisabled: false,
  },
};

export default SwitchMeta;

type Switch = ComponentStory<typeof Switch>;

<<<<<<< HEAD
export const Basic: Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Wrapper>
      <Center sx={{ style: { flex: 1 } }}>
        <Switch value={isEnabled} onValueChange={(val) => setIsEnabled(val)} />
      </Center>
    </Wrapper>
  );
};
=======
export const Basic: BasicSwitch = (args) => <BasicExample {...args} />;
>>>>>>> e5ade313a08989903ebe0a4c1193b000499430e9
