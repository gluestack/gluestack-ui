import React from 'react';
import { CloseIcon, Button, Heading, Text, Icon } from '../../../ui-components';
import { Modal, Center, VStack, HStack } from '../../../ui-components';
import Wrapper from '../../Wrapper';

export const ModalStory = ({ ...props }) => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <Wrapper>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <Button.Text>Click me</Button.Text>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        {...props}
        overflow="hidden"
        finalFocusRef={ref}
      >
        <Modal.Backdrop />
        <Modal.Content pointerEvents="auto">
          <Modal.Header>
            <Heading fontSize="$md">Confirm your request</Heading>
            <Modal.CloseButton>
              <Icon as={CloseIcon} sx={{ w: 16, h: 16 }} />
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

export { Modal, CloseIcon, Button, Text, Center, VStack, HStack, Heading };
