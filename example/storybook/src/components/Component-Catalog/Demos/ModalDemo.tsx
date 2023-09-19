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
} from '@gluestack-ui/themed';
import React, { useState, useRef } from 'react';

const ModalDemo = () => {
  const [showModal, setShowModal] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <Button
        onPress={() => {
          setShowModal(true);
          setShowButton(false);
        }}
        ref={ref}
        display={showButton ? 'flex' : 'none'}
      >
        <ButtonText>Show Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setShowButton(true);
        }}
        finalFocusRef={ref}
        //@ts-ignore
        _experimentalOverlay={showModal}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="md">Delete Folder</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text size="sm">You sure you want to delete the folder?</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
                setShowButton(true);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              bg="$error600"
              action="negative"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
                setShowButton(true);
              }}
            >
              <ButtonText>Delete</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDemo;
