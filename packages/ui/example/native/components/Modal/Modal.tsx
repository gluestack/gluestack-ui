import React from 'react';
import { Modal, Text, Button, CloseIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';
interface ModalProps {
  onPress: () => void;
  text: string;
}

export const ModalComponent = (props: any) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
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
              <CloseIcon variant="modalHeader" />
            </Modal.CloseButton>
            <Modal.Header>
              <Text variant="modalHeader">Return Policy</Text>
            </Modal.Header>
            <Modal.Body>
              <Text>
                Create a 'Return Request' under “My Orders” section of
                App/Website. Follow the screens that come up after tapping on
                the 'Return’ button. Please make a note of the Return ID that we
                generate at the end of the process. Keep the item ready for pick
                up or ship it to us basis on the return mode.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="ghost"
                colorScheme="blueGray"
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
    </>
  );
};
