import { AlertDialog as AlertMain } from './AlertDialog';
import AlertDialogContent from './AlertDialogContent';
import AlertDialogBody from './AlertDialogBody';
import AlertDialogCloseButton from './AlertDialogCloseButton';
import AlertDialogFooter from './AlertDialogFooter';
import AlertDialogHeader from './AlertDialogHeader';
import AlertDialogBackdrop from './AlertDialogBackdrop';

export const createAlertDialog = ({
  StyledAlertDialog,
  StyledAlertDialogContent,
  StyledAlertDialogCloseButton,
  StyledAlertDialogHeader,
  StyledAlertDialogFooter,
  StyledAlertDialogBody,
  StyledAlertDialogBackdrop,
}: any) => {
  const AlertDialog: any = AlertMain(StyledAlertDialog);
  AlertDialog.Content = AlertDialogContent(StyledAlertDialogContent);
  AlertDialog.CloseButton = AlertDialogCloseButton(
    StyledAlertDialogCloseButton
  );
  AlertDialog.Header = AlertDialogHeader(StyledAlertDialogHeader);
  AlertDialog.Footer = AlertDialogFooter(StyledAlertDialogFooter);
  AlertDialog.Body = AlertDialogBody(StyledAlertDialogBody);
  AlertDialog.Backdrop = AlertDialogBackdrop(StyledAlertDialogBackdrop);

  AlertDialog.displayName = 'AlertDialog';
  AlertDialog.Content.displayName = 'AlertDialog.Content';
  AlertDialog.CloseButton.displayName = 'AlertDialog.CloseButton';
  AlertDialog.Header.displayName = 'AlertDialog.Header';
  AlertDialog.Footer.displayName = 'AlertDialog.Footer';
  AlertDialog.Body.displayName = 'AlertDialog.Body';
  AlertDialog.Backdrop.displayName = 'AlertDialog.Backdrop';

  return AlertDialog;
};
