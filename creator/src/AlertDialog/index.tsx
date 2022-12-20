import { AlertDialog } from './AlertDialog';
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
  const AlertDialogTemp: any = AlertDialog(StyledAlertDialog);
  AlertDialogTemp.Content = AlertDialogContent(StyledAlertDialogContent);
  AlertDialogTemp.CloseButton = AlertDialogCloseButton(
    StyledAlertDialogCloseButton
  );
  AlertDialogTemp.Header = AlertDialogHeader(StyledAlertDialogHeader);
  AlertDialogTemp.Footer = AlertDialogFooter(StyledAlertDialogFooter);
  AlertDialogTemp.Body = AlertDialogBody(StyledAlertDialogBody);
  AlertDialogTemp.Backdrop = AlertDialogBackdrop(StyledAlertDialogBackdrop);
  const AlertDialogg = AlertDialogTemp as any;
  return AlertDialogg;
};
