import React from 'react';
import {
  CloseIcon,
  Button,
  ButtonText,
  ButtonIcon,
  Heading,
  Text,
  Icon,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Center,
  VStack,
  HStack,
  CheckCircleIcon,
  Input,
  InputField,
  ArrowLeftIcon,
  Link,
} from '@custom-ui/themed';

const ModalBasic = ({ showModal: showModalProp = true, ...props }) => {
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <Modal
      isOpen={showModal || showModalProp}
      onClose={() => {
        setShowModal(false);
      }}
      {...props}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading maxWidth="80%">Engage with Modals</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text fontSize="$sm">
            Elevate user interactions with our versatile modals. Seamlessly
            integrate notifications, forms, and media displays. Make an impact
            effortlessly.
          </Text>
        </ModalBody>
        <ModalFooter gap="$3">
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            onPress={() => {
              setShowModal(false);
            }}
          >
            <ButtonText>Cancel</ButtonText>
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
              '_dark': {
                'bg': '$success600',
                ':hover': {
                  bg: '$success700',
                },
                ':active': {
                  bg: '$success800',
                },
              },
            }}
          >
            <ButtonText>Explore</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const FigmaModalStory = ({ _showModal, ...props }: any) => {
  return (
    <Modal
      isOpen={true}
      {...props}
      py="$16"
      w={1230}
      bg="#00000080"
      sx={{
        _dark: {
          bg: '#ffffff80',
        },
      }}
      // @ts-ignore
      _experimentalOverlay={true}
    >
      <ModalContent>
        <ModalHeader>
          <Heading maxWidth="80%">Engage with Modals</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text size="sm">
            Elevate user interactions with our versatile modals. Seamlessly
            integrate notifications, forms, and media displays. Make an impact
            effortlessly.
          </Text>
        </ModalBody>
        <ModalFooter gap="$3">
          <Button variant="outline" size="sm" action="secondary">
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button size="sm" action="positive">
            <ButtonText>Explore</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

FigmaModalStory.description =
  'This is a basic Modal component example. A Modal is a window on top of the primary content to draw the users attention to important information or actions. It provides a focused and interruptive way to interact with the application.';

export default ModalBasic;

export {
  FigmaModalStory,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  CloseIcon,
  Button,
  ButtonText,
  ButtonIcon,
  Text,
  Center,
  VStack,
  HStack,
  Heading,
  Icon,
  CheckCircleIcon,
  Input,
  InputField,
  ArrowLeftIcon,
  Link,
};
