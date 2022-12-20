import React from 'react';
import {
  Button,
  Modal,
  CloseIcon,
  VStack,
  HStack,
  Center,
  Heading,
  Text,
} from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const ModalComponent = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <>
      <Wrapper>
        <Button onPress={() => setShowModal(true)}>
          <Button.Text>Button</Button.Text>
        </Button>

        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <Modal.Backdrop />
          <Modal.Content sx={{ style: { w: 300 } }}>
            <Modal.CloseButton>
              <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
            </Modal.CloseButton>
            <Modal.Header>
              <Text variant="modalHeader">Order</Text>
            </Modal.Header>
            <Modal.Body>
              <VStack sx={{ style: { gap: 10 } }}>
                <HStack
                  sx={{
                    style: {
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                  }}
                >
                  <Text sx={{ style: { fontWeight: '$medium' } }}>
                    Sub Total
                  </Text>
                  <Text sx={{ style: { color: '$blueGray400' } }}>$298.77</Text>
                </HStack>
                <HStack
                  sx={{
                    style: {
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                  }}
                >
                  <Text sx={{ style: { fontWeight: '$medium' } }}>Tax</Text>
                  <Text sx={{ style: { color: '$blueGray400' } }}>$38.84</Text>
                </HStack>
                <HStack
                  sx={{
                    style: {
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                  }}
                >
                  <Text sx={{ style: { fontWeight: '$medium' } }}>
                    Total Amount
                  </Text>
                  <Text sx={{ style: { color: '$green500' } }}>$337.61</Text>
                </HStack>
              </VStack>
            </Modal.Body>
            <Modal.Footer sx={{ style: { gap: 8 } }}>
              <Button
                variant="outline"
                onPress={() => {
                  setShowModal(false);
                }}
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
            console.log('hello here 1111');
            setShowModal2(false);
          }}
        >
          <Modal.Backdrop />
          <Modal.Content sx={{ style: { w: 300 } }}>
            <Modal.CloseButton>
              <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
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
    </>
  );
};
