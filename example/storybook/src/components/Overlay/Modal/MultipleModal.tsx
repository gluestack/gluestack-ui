import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, Button, CloseIcon, Text, Icon } from '../../../ui-components';
import { Modal, VStack, HStack, Heading } from '../../../ui-components';

export const MultipleModalStory = ({ ...props }: any) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <Wrapper>
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
          <Modal.CloseButton>
            <Icon as={CloseIcon} sx={{ w: 16, h: 16 }} />
          </Modal.CloseButton>
          <Modal.Header>
            <Text variant="modalHeader">Order</Text>
          </Modal.Header>
          <Modal.Body>
            <VStack space="sm">
              <HStack
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text sx={{ fontWeight: '$medium' }}>Sub Total</Text>
                <Text sx={{ color: '$blueGray400' }}>$298.77</Text>
              </HStack>
              <HStack
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text sx={{ fontWeight: '$medium' }}>Tax</Text>
                <Text sx={{ color: '$blueGray400' }}>$38.84</Text>
              </HStack>
              <HStack
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text sx={{ fontWeight: '$medium' }}>Total Amount</Text>
                <Text sx={{ color: '$green500' }}>$337.61</Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline"
              onPress={() => {
                setShowModal(false);
              }}
              sx={{ mr: 8 }}
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
          // eslint-disable-next-line no-console
          console.log('hello here 1111');
          setShowModal2(false);
        }}
      >
        <Modal.Backdrop />
        <Modal.Content {...props}>
          <Modal.CloseButton>
            <CloseIcon sx={{ w: 16, h: 16 }} />
          </Modal.CloseButton>
          <Modal.Header>
            <Text variant="modalHeader">Order</Text>
          </Modal.Header>
          <Modal.Body>
            <Center>
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
    </Wrapper>
  );
};
