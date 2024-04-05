import {
  Heading,
  ModalBackdrop,
  Button,
  ButtonText,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  Text,
  ModalFooter,
} from '../../../core-components/themed';
import React, { useState } from 'react';
import { OverlayProvider } from '@gluestack-ui/overlay';

const ModalDemo = () => {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  return (
    <OverlayProvider>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <ButtonText>Show Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
        size="lg"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Engage with Modals</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>Elevate user interactions.</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="xs"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="xs"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </OverlayProvider>
  );
};

export default ModalDemo;
