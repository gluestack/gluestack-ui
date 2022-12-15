import React from 'react';
import { Button, Actionsheet, Text } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Wrapper>
      <Button onPress={() => setIsOpen(true)}>Open</Button>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Actionsheet.Content>
          <Actionsheet.DragIndicator />
          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <Text>Open</Text>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <Text>Edit</Text>
          </Actionsheet.Item>
          <Actionsheet.Item>
            <Text>Delete</Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
};
