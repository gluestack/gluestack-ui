import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Modal, Text, Button, ButtonText } from '@gluestack/ui';
import Wrapper from '../Wrapper';
interface ModalProps {
  onPress: () => void;
  text: string;
}

export const ModalComponent = (props: any) => {
  // return <View><Text>Hello</Text></View>
  const [showModal, setShowModal] = React.useState(false);
  // const [size, setSize] = React.useState('md');

  // const handleSizeClick = (newSize: any) => {
  //   setSize(newSize);
  //   setModalVisible(!modalVisible);
  // };

  return (
    <>
      <Wrapper>
        <Button onPress={() => setShowModal(true)}>
          <ButtonText>Click me</ButtonText>
        </Button>

        <Modal
          isOpen={showModal}
          onClose={() => {
            console.log('hello here 1111');
            setShowModal(false);
          }}
        >
          <Modal.Backdrop />
          <Modal.Content maxH="212">
            <Modal.CloseButton />
            <Modal.Header>Return Policy</Modal.Header>
            <Modal.Body>
              <Text>
                Create a 'Return Request' under “My Orders” section of
                App/Website. Follow the screens that come up after tapping on
                the 'Return’ button. Please make a note of the Return ID that we
                generate at the end of the process. Keep the item ready for pick
                up or ship it to us basis on the return mode.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  // setModalVisible(false);
                }}
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Wrapper>
    </>
  );
};
