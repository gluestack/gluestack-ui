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
        finalFocusRef={ref}
        animationPreset="slide"
      >
        <Modal.Backdrop />
        <Modal.Content>
          <Modal.Header>
            <Heading>Engage with Impactful Modals</Heading>
            <Modal.CloseButton>
              <Icon as={CloseIcon} />
            </Modal.CloseButton>
          </Modal.Header>
          <Modal.Body>
            <Text fontSize="$sm">
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button
              size="sm"
              action="positive"
              onPress={() => {
                setShowModal(false);
              }}
              sx={{
                'bg': '$success700',
                ':hover': {
                  bg: '$success800',
                },
                ':active': {
                  bg: '$success900',
                },
              }}
            >
              <Button.Text>Explore</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Wrapper>
  );
};

export {
  Modal,
  CloseIcon,
  Button,
  Text,
  Center,
  VStack,
  HStack,
  Heading,
  Icon,
};
