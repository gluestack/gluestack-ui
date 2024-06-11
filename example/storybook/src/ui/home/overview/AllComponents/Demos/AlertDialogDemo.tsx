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
  return (
    <>
      <Button
        display={!showAlertDialog ? 'flex' : 'none'}
        onPress={() => {
          setShowAlertDialog(true);
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
        <AlertDialogContent focusScope={false}>
          <AlertDialogHeader borderBottomWidth="$0">
            <HStack space="sm" alignItems="center">
              <Icon
                as={CheckCircleIcon}
                width={18}
                height={18}
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
