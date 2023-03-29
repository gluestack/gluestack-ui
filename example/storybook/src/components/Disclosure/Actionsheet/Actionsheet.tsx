import React from 'react';
import Wrapper from '../../Wrapper';
import { Actionsheet, Button } from '../../../ui-components';
import { useEffect } from 'react';
import { Motion } from '@legendapp/motion';
import { StyleSheet } from 'react-native';

export function ActionsheetExample({ ...props }) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <Wrapper>
      <Button onPress={handleClose}>
        <Button.Text>Open</Button.Text>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Share</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Play</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
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

export { Actionsheet, Button };
