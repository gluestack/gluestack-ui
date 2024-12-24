import type { ComponentStory } from '@storybook/react-native';
import { Button, ButtonGroup, ButtonText } from '../../../ui-components';

import React from 'react';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonGroupStory: MyButtonStory = ({ ...props }) => {
  return (
    // @ts-ignore
    <ButtonGroup {...props}>
      <Button>
        <ButtonText>Button 1</ButtonText>
      </Button>
      <Button>
        <ButtonText>Button 2</ButtonText>
      </Button>
      <Button>
        <ButtonText>Button 3</ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonGroupStory;
