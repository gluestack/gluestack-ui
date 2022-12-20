import React from 'react';
import { Modal, CloseIcon, Button, Text } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const ModalComponent = () => {
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
      >
        <Modal.Backdrop />

        <Modal.Content>
          <Modal.CloseButton>
            <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
          </Modal.CloseButton>
          <Modal.Header>
            <Text variant="modalHeader">Return Policy</Text>
          </Modal.Header>
          <Modal.Body>
            <Text>
              Create a 'Return Request' under “My Orders” section of
              App/Website. Follow the screens that come up after tapping on the
              'Return’ button. Please make a note of the Return ID that we
              generate at the end of the process. Keep the item ready for pick
              up or ship it to us basis on the return mode.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="solid"
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
