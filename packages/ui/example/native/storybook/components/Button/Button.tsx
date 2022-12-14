import { Button, HStack } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      <HStack space="sm">
        <Button>
          <Button.Text>Solid</Button.Text>
        </Button>
        <Button variant="subtle">
          <Button.Text>Subtle</Button.Text>
        </Button>
        <Button variant="outline">
          <Button.Text>Outline</Button.Text>
        </Button>
        <Button variant="ghost">
          <Button.Text>Ghost</Button.Text>
        </Button>
      </HStack>
    </Wrapper>
  );
};
