import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import React, { useState } from 'react';
import { Switch, Center } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

const SwitchMeta: ComponentMeta<typeof Switch> = {
  title: 'FORMS/Switch',
  component: Switch,
  argTypes: {
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isEnabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isDisabled: false,
    isEnabled: false,
  },
};

export default SwitchMeta;

type Switch = ComponentStory<typeof Switch>;

export const Basic: Switch = ({
  isDisabled,
  isEnabled: isEnabledProp,
  ...props
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  React.useEffect(() => {
    if (!isDisabled) setIsEnabled(isEnabledProp);
  }, [isEnabledProp, isDisabled]);
  return (
    <Wrapper>
      <Center sx={{ style: { flex: 1 } }}>
        <Switch
          value={isEnabled}
          onValueChange={(val: any) => setIsEnabled(val)}
          isDisabled={isDisabled}
          {...props}
        />
      </Center>
    </Wrapper>
  );
};
