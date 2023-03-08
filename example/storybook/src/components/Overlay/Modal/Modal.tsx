import React from 'react';
import { CloseIcon, Button, Heading, Text } from '../../../ui-components';
import { Modal, Center, VStack, HStack } from '../../../ui-components';
import Wrapper from '../../Wrapper';
import { Slide, Fade } from '@gluestack-ui/transitions';
import { StyleSheet } from 'react-native';
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
        overflow="hidden"
      >
        <Fade
          in={showModal}
          style={StyleSheet.absoluteFill}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 200 } }}
          exit={{ opacity: 0, transition: { duration: 100 } }}
        >
          <Modal.Backdrop />
        </Fade>

        <Slide
          in={showModal}
          placement="bottom"
          overlay={false}
          duration={500}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <Modal.Content pointerEvents="auto">
            <Modal.Header>
              <Heading fontSize="$md">Confirm your request</Heading>
              <Modal.CloseButton>
                <CloseIcon sx={{ w: 16, h: 16 }} />
              </Modal.CloseButton>
            </Modal.Header>
            <Modal.Body>
              <Text fontSize="$sm">
                You're almost there! This modal is the final checkpoint before
                you reach your destination. Confirm that you're ready to go, and
                we'll hit the road!
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
        </Slide>
      </Modal>
    </Wrapper>
  );
};

export { Modal, CloseIcon, Button, Text, Center, VStack, HStack, Heading };
