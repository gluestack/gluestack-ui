import React from 'react';
import {
  Button,
  ButtonText,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  Heading,
  Icon,
  HStack,
  AlertDialogBody,
  Text,
  AlertDialogFooter,
  CheckCircleIcon,
} from '@gluestack-ui/themed';

const AlertDialogDemo = () => {
  const [showAlertDialog, setShowAlertDialog] = React.useState(true);
  const [showButton, setShowButton] = React.useState(false);
  return (
    <>
      <Button
        display={showButton ? 'flex' : 'none'}
        onPress={() => {
          setShowAlertDialog(true);
          setShowButton(false);
        }}
      >
        <ButtonText>Click me</ButtonText>
      </Button>
      <AlertDialog
        initialFocusRef={React.useRef(null)}
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
        // @ts-ignore
        _experimentalOverlay={showAlertDialog}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader borderBottomWidth="$0">
            <HStack space="sm" alignItems="center">
              <Icon
                as={CheckCircleIcon}
                w={18}
                h={18}
                color="$success700"
                sx={{
                  _dark: {
                    color: '$success300',
                  },
                }}
              />
              <Heading size="lg">Order placed</Heading>
            </HStack>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">Congratulations, your order has been placed!</Text>
          </AlertDialogBody>
          <AlertDialogFooter borderTopWidth="$0">
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              onPress={() => {
                setShowAlertDialog(false);
                setShowButton(true);
              }}
            >
              <ButtonText>Okay</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AlertDialogDemo;
