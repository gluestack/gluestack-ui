import React from 'react';
import Wrapper from '../Wrapper';
import { Pressable, Text } from 'react-native';

import { createActionsheet } from '@gluestack-ui/actionsheet';
import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
} from '../styled-components/actionsheet';

export const Actionsheet = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
});

export function ActionsheetExample({ ...props }) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <Wrapper>
      {/* <Center> */}
      <Pressable onPress={handleClose}>
        <Text>Open</Text>
      </Pressable>
      {/* </Center> */}
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        <Actionsheet.Backdrop />
        {/* @ts-ignore */}
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>

          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Community</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Plugins</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Theme</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Settings</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Add account</Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
}

export default ActionsheetExample;

// export { Button, Center, Box } from '@gluestack/design-system';
