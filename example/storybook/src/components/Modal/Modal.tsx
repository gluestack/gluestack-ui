import {
  Root,
  Backdrop,
  Body,
  CloseButton,
  Content,
  Footer,
  Header,
} from './styled-component';
import { createModal } from '@universa11y/modal';
import React from 'react';
import { Pressable, Text } from 'react-native';

const ModalTemp = createModal({
  Root,
  Backdrop,
  Body,
  CloseButton,
  Content,
  Footer,
  Header,
}) as any;

export const Modal = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Pressable onPress={() => setShowModal(true)}>Click Me</Pressable>
      <ModalTemp
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalTemp.Backdrop />

        <ModalTemp.Content>
          {/* <ModalTemp.CloseButton> */}
          {/* <CloseIco sx={{ style: { w: 16, h: 16 } }} /> */}
          {/* </ModalTemp.CloseButton> */}
          <ModalTemp.Header>
            <Text>Return Policy</Text>
          </ModalTemp.Header>
          <ModalTemp.Body>
            <Text>
              Create a 'Return Request' under “My Orders” section of
              App/Website. Follow the screens that come up after tapping on the
              'Return’ button. Please make a note of the Return ID that we
              generate at the end of the process. Keep the item ready for pick
              up or ship it to us basis on the return mode.
            </Text>
          </ModalTemp.Body>
          <ModalTemp.Footer>
            <Pressable
              // variant="solid"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text>Cancel</Text>
            </Pressable>
          </ModalTemp.Footer>
        </ModalTemp.Content>
      </ModalTemp>
    </>
  );
};
