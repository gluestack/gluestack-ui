import React, { useState } from 'react';
import {
  Actionsheet,
  Button,
  VStack,
  HStack,
  Icon,
  Box,
  FormControl,
  Input,
  AddIcon,
  Image,
  Text,
  Center,
} from '../../../ui-components';

function ActionsheetStory({ ...props }: any) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = () => setShowActionsheet(false);

  return (
    <Center>
      <Button
        onPress={() => {
          setShowActionsheet((prev) => !prev);
        }}
      >
        <Button.Text>Open</Button.Text>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Actionsheet.Item onPress={handleClose} isDisabled>
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
    </Center>
  );
}

function FigmaActionsheetStory({ ...props }: any) {
  return (
    <Center w={900} h={400}>
      <Actionsheet.Content {...props}>
        <Actionsheet.DragIndicatorWrapper>
          <Actionsheet.DragIndicator />
        </Actionsheet.DragIndicatorWrapper>
        <Actionsheet.Item>
          <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Actionsheet.ItemText>Share</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Actionsheet.ItemText>Play</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Center>
  );
}

export default FigmaActionsheetStory;

export {
  ActionsheetStory,
  Actionsheet,
  Button,
  VStack,
  HStack,
  Icon,
  Box,
  FormControl,
  Input,
  AddIcon,
  Image,
  Text,
  useState,
};
