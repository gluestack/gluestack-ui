import React from 'react';
import {
  Button,
  Actionsheet,
  Center,
  AddIcon,
  Text,
  PlayIcon,
  ShareIcon,
  DeleteIcon,
  FavouriteIcon,
  CloseIcon,
  Box,
} from '@gluestack/ui';
import Wrapper from './../Wrapper';

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Wrapper>
      <Center>
        <Button onPress={() => setIsOpen(true)}>
          <Button.Text>Open</Button.Text>
        </Button>
      </Center>
      <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>

          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <Actionsheet.ItemText>Share</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setIsOpen(false)} isDisabled>
            <Actionsheet.ItemText>Play</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setIsOpen(false)}>
            <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
};
