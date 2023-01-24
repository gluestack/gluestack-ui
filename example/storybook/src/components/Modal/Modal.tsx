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
import { createIcon } from '@universa11y/icon';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Root as IconRoot } from '../Icon/styled-component';

const ModalTemp = createModal({
  Root,
  Backdrop,
  Body,
  CloseButton,
  Content,
  Footer,
  Header,
}) as any;

const CloseIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M12 9.77778L4.22222 2L2 4.22222L9.77778 12L2 19.7778L4.22222 22L12 14.2222L19.7778 22L22 19.7778L14.2222 12L22 4.22222L19.7778 2L12 9.77778Z',
});

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
          <ModalTemp.CloseButton>
            <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
          </ModalTemp.CloseButton>
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
