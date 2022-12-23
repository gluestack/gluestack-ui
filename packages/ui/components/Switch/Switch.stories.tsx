import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import React, { useState } from 'react';
import { Switch, Center } from '@gluestack/ui';
import Wrapper from '../Wrapper';

const SwitchMeta: ComponentMeta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default SwitchMeta;

type Switch = ComponentStory<typeof Switch>;

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
