import React from 'react';
import { Actionsheet } from '@gluestack/ui-compiled';
import { Button } from '@gluestack/ui-compiled';
import { Center } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';
import { useState } from 'react';

export function ActionsheetExample({ ...props }) {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <Wrapper>
      <Center>
        <Button onPress={handleClose}>
          <Button.Text>Open</Button.Text>
        </Button>
      </Center>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        <Actionsheet.Backdrop />
        {/* @ts-ignore */}
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>

          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Share</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}} isDisabled>
            <Actionsheet.ItemText>Play</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
}

export default ActionsheetExample;

export { Actionsheet };
export { Button, Center, Box } from '@gluestack/ui-compiled';
