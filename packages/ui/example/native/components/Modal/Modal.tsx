import React from 'react';
import { Modal, Text, Button } from '@gluestack/ui-components';
import Wrapper from '../Wrapper';
// interface ModalProps {
//   onPress: () => void;
//   text: string;
// }
/* eslint-disable no-console */

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
          console.log('hello here 1111');
          setShowModal(false);
        }}
      >
        <Modal.Backdrop /> {/* done */}
        <Modal.Content maxH="212">
          <Modal.CloseButton>
            <Text>X</Text>
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
              variant="outline"
              onPress={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Wrapper>
  );
};
