import React from 'react';
import { OverlayProvider } from '@gluestack-ui/overlay';
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
} from '../../../core-components/nativewind';

const ModalDemo = () => {
  const [showModal, setShowModal] = React.useState(false);
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
        size="lg"
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent focusScope={false}>
          <ModalHeader>
            <Heading size="lg">Engage with Modals</Heading>
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>Elevate user interactions with our versatile modals.</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              className="mr-3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
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
