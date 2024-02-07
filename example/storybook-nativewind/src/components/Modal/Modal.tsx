import React from 'react';
import { Button, ButtonText } from '../../components-example/themed/Button';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '../../components-example/themed/Modal';

import { X } from 'lucide-react-native';
import { Text } from 'react-native';

const ModalBasic = () => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <>
      <Button
        onPress={() => {
          setShowModal(!showModal);
        }}
      >
        <ButtonText>Open Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text>Are you absolutely sure?</Text>
            <ModalCloseButton>
              <X size={20} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </Text>
          </ModalBody>
          <ModalFooter className="gap-3">
            <Button
              variant="outline"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Continue</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBasic;

export {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  Text,
};
