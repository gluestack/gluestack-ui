import React from 'react';
import { Button, Heading } from '@gluestack/design-system';

// @ts-ignore
import { CloseIcon } from '@gluestack/design-system';

import { Text } from '@gluestack/design-system';

import Wrapper from '../Wrapper';

import { createModal } from '@gluestack-ui/modal';
import {
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
} from '../styled-components/modal';

export const Modal = createModal({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
});

export const ModalStory = ({ ...props }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Wrapper>
      <Button onPress={() => setShowModal(true)}>
        <Button.Text>Click me</Button.Text>
      </Button>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        {...props}
      >
        <Modal.Backdrop />

        <Modal.Content>
          <Modal.CloseButton>
            <CloseIcon sx={{ w: 16, h: 16 }} />
          </Modal.CloseButton>
          <Modal.Header>
            <Heading fontSize="$md">Return Policy</Heading>
          </Modal.Header>
          <Modal.Body>
            <Text fontSize="$sm">
              Create a 'Return Request' under “My Orders” section of
              App/Website. Follow the screens that come up after tapping on the
              'Return’ button. Please make a note of the Return ID that we
              generate at the end of the process. Keep the item ready for pick
              up or ship it to us basis on the return mode.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button
              // style="solid"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Wrapper>
  );
};
