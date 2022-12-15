import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
// import { AlertDialog, Text, Button, ButtonText } from '@gluestack/ui';
import Wrapper from '../Wrapper';
interface AlertDialogProps {
  onPress: () => void;
  text: string;
}

export const AlertDialogComponent = (props: any) => {
  // return <View><Text>Hello</Text></View>
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  // const [size, setSize] = React.useState('md');

  // const handleSizeClick = (newSize: any) => {
  //   setSize(newSize);
  //   setAlertDialogVisible(!AlertDialogVisible);
  // };

  return (
    <>
      <Wrapper>
        {/* <Button onPress={() => setShowAlertDialog(true)}>
          <ButtonText>Click me</ButtonText>
        </Button>

        <AlertDialog
          isOpen={showAlertDialog}
          onClose={() => setShowAlertDialog(false)}
        >
          <AlertDialog.Backdrop />
          <AlertDialog.Content maxH="212">
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Delete Customer</AlertDialog.Header>
            <AlertDialog.Body>
              <Text>
                This will remove all data relating to Alex. This action cannot
                be reversed. Deleted data can not be recovered.
              </Text>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowAlertDialog(false);
                }}
              >
                Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog> */}
      </Wrapper>
    </>
  );
};
