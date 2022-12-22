import React from 'react';
import { Button, Actionsheet } from '@gluestack/ui';
import Wrapper from './../Wrapper';

export const BasicExample = ({ isOpen: isOpenProp, closeOnOverlayClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  return (
    <Wrapper>
      <Button
        onPress={() => {
          setIsOpen(true);
        }}
      >
        <Button.Text>Open</Button.Text>
      </Button>

      <Actionsheet
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        closeOnOverlayClick={closeOnOverlayClick}
      >
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
