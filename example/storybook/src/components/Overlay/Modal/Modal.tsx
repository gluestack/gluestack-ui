import React from 'react';
import {
  CloseIcon,
  Button,
  ButtonText,
  Heading,
  Text,
  Icon,
} from '../../../ui-components';
import {
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
  ArrowLeftIcon,
  Link,
} from '../../../ui-components';

const ModalStory = ({ showModal: showModalProp = true, ...props }) => {
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
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
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
    <Modal isOpen={true} {...props} my="$16" _experimentalOverlay={false}>
      <Modal.Content>
        <Modal.Header>
          <Heading maxWidth="80%">Engage with Modals</Heading>
          <Modal.CloseButton>
            <Icon
              as={CloseIcon}
              dataSet={{
                'component-props': JSON.stringify({
                  'instance': true,
                  'instance-name': 'Icon',
                  'name': 'CloseIcon',
                  'size': 'md',
                }),
              }}
            />
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
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Button-outline',
                'size': 'sm',
                'action': 'secondary',
                'state': 'default',
              }),
            }}
          >
            <Button.Text>Cancel</Button.Text>
          </Button>
          <Button
            size="sm"
            action="positive"
            dataSet={{
              'component-props': JSON.stringify({
                'instance': true,
                'instance-name': 'Button-solid',
                'size': 'sm',
                'action': 'positive',
                'state': 'default',
              }),
            }}
          >
            <Button.Text>Explore</Button.Text>
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default FigmaModalStory;

export {
  ModalStory,
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
  Text,
  Center,
  VStack,
  HStack,
  Heading,
  Icon,
  CheckCircleIcon,
  Input,
  ArrowLeftIcon,
  Link,
};
