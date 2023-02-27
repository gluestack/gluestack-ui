import React from 'react';
import { CloseIcon, Button, Heading, Text, Modal } from '../../ui-components';
import Wrapper from '../Wrapper';

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
          <Modal.Header>
            <Heading fontSize="$md">Confirm your request</Heading>
            <Modal.CloseButton>
              <CloseIcon sx={{ w: 16, h: 16 }} />
            </Modal.CloseButton>
          </Modal.Header>
          <Modal.Body>
            <Text fontSize="$sm">
              You're almost there! This modal is the final checkpoint before you
              reach your destination. Confirm that you're ready to go, and we'll
              hit the road!
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button
              // style="solid"
              action="primary"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Button.Text>Confirm</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Wrapper>
  );
};
