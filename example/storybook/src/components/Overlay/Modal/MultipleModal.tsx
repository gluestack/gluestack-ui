import React from 'react';

import { Center, Button, CloseIcon, Text, Icon } from '../../../ui-components';
import { Modal, VStack, HStack, Heading } from '../../../ui-components';

const MultipleModalStory = ({ ...props }: any) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <>
      <Center>
        <Button onPress={() => setShowModal(true)}>
          <Button.Text>Button</Button.Text>
        </Button>
      </Center>

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
            <Heading>Order</Heading>
            <Modal.CloseButton>
              <Icon as={CloseIcon} />
            </Modal.CloseButton>
          </Modal.Header>
          <Modal.Body>
            <VStack space="sm">
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Sub Total</Text>
                <Text color="$blueGray400">$298.77</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Tax</Text>
                <Text color="$blueGray400">$38.84</Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="$medium">Total Amount</Text>
                <Text color="$green500">$337.61</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowModal(false);
              }}
              sx={{ mr: '$3' }}
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button
              onPress={() => {
                setShowModal2(true);
              }}
            >
              <Button.Text>Continue</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
        }}
      >
        <Modal.Backdrop />
        <Modal.Content {...props}>
          <Modal.Header>
            <Heading>Order</Heading>
            <Modal.CloseButton>
              <Icon as={CloseIcon} />
            </Modal.CloseButton>
          </Modal.Header>
          <Modal.Body>
            <Center h={100}>
              <Heading>Second Modal</Heading>
            </Center>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPress={() => {
                setShowModal2(false);
              }}
            >
              <Button.Text>Cancel</Button.Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default MultipleModalStory;
