import type { ComponentStory } from '@storybook/react-native';
import { Center } from '../../../ui-components';
import React from 'react';
import Wrapper from '../../Wrapper';

import { Button } from '../../../ui-components';

type MyButtonStory = ComponentStory<typeof Button>;

export const ButtonStory: MyButtonStory = ({
  text = 'Button',
  ...props
}: any) => {
  return (
    <Wrapper>
      <Center>
        <Button {...props}>
          <Button.Text>{text}</Button.Text>
        </Button>
      </Center>
    </Wrapper>
  );
};

// export { InfoIcon, AddIcon } from '@gluestack/design-system';
export { Button };
