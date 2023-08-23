import React from 'react';
import {
  AlertDialog,
  Text,
  Heading,
  Icon,
  Button,
  CloseIcon,
} from '../gluestack-ui-components';

const LogoutAlertDialog = ({
  openLogoutAlertDialog,
  setOpenLogoutAlertDialog,
}: any) => {
  const handleClose = () => {
    setOpenLogoutAlertDialog(false);
  };
  return (
    <AlertDialog isOpen={openLogoutAlertDialog} onClose={handleClose}>
      <AlertDialog.Backdrop />
      <AlertDialog.Content>
        <AlertDialog.Header>
          <Heading>Logout</Heading>
          <AlertDialog.CloseButton>
            <Icon as={CloseIcon} />
          </AlertDialog.CloseButton>
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Text>Are you sure, you want to logout?</Text>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button
            variant="outline"
            action="secondary"
            onPress={handleClose}
            mr="$3"
          >
            <Button.Text>Cancel</Button.Text>
          </Button>
          <Button action="negative" onPress={handleClose}>
            <Button.Text>Logout</Button.Text>
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default LogoutAlertDialog;
