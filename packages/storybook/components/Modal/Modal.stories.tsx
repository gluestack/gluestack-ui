import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
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

// var st = document.createElement('style');
// var st2 = document.createElement('style');

// st.innerHTML = `#story--modal--basic{ height: 350px }`;
// st2.innerHTML = `#story--modal--multiple-modal{ height: 350px }`;

// document.body.append(st);
// document.body.append(st2);

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: 'OVERLAY/Modal',
  component: Modal,
  argTypes: {},
  args: {},
};

export default ModalMeta;

type ModalStory = ComponentStory<typeof Modal>;
type MultipleModalStory = ComponentStory<typeof Modal>;

export const Basic: ModalStory = ({ ...props }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Wrapper>
      <Button onPress={() => setShowModal(true)}>
        <Button.Text>Click me</Button.Text>
      </Button>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <Modal.Backdrop />

        <Modal.Content>
          <Modal.CloseButton>
            <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
          </Modal.CloseButton>
          <Modal.Header>
            <Text variant="modalHeader">Return Policy</Text>
          </Modal.Header>
          <Modal.Body>
            <Text>
              Create a 'Return Request' under “My Orders” section of
              App/Website. Follow the screens that come up after tapping on the
              'Return’ button. Please make a note of the Return ID that we
              generate at the end of the process. Keep the item ready for pick
              up or ship it to us basis on the return mode.
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="solid"
              onPress={() => {
                setShowModal(false);
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
export const MultipleModal: MultipleModalStory = (args) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <>
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
              <VStack space="sm">
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
            <Modal.Footer>
              <Button
                variant="outline"
                onPress={() => {
                  setShowModal(false);
                }}
                sx={{ style: { mr: 8 } }}
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
