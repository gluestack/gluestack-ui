import { AlertDialog as AlertMain } from './AlertDialog';
import AlertDialogContent from './AlertDialogContent';
import AlertDialogBody from './AlertDialogBody';
import AlertDialogCloseButton from './AlertDialogCloseButton';
import AlertDialogFooter from './AlertDialogFooter';
import AlertDialogHeader from './AlertDialogHeader';
import AlertDialogBackdrop from './AlertDialogBackdrop';
import type { IAlertDialogComponentType } from './types';

export function createAlertDialog<
  StyledAlertDialog,
  StyledAlertDialogContent,
  StyledAlertDialogCloseButton,
  StyledAlertDialogHeader,
  StyledAlertDialogFooter,
  StyledAlertDialogBody,
  StyledAlertDialogBackdrop
>({
  StyledAlertDialog,
  StyledAlertDialogContent,
  StyledAlertDialogCloseButton,
  StyledAlertDialogHeader,
  StyledAlertDialogFooter,
  StyledAlertDialogBody,
  StyledAlertDialogBackdrop,
}: {
  StyledAlertDialog: React.ComponentType<StyledAlertDialog>;
  StyledAlertDialogContent: React.ComponentType<StyledAlertDialogContent>;
  StyledAlertDialogCloseButton: React.ComponentType<StyledAlertDialogCloseButton>;
  StyledAlertDialogHeader: React.ComponentType<StyledAlertDialogHeader>;
  StyledAlertDialogFooter: React.ComponentType<StyledAlertDialogFooter>;
  StyledAlertDialogBody: React.ComponentType<StyledAlertDialogBody>;
  StyledAlertDialogBackdrop: React.ComponentType<StyledAlertDialogBackdrop>;
}) {
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

  return AlertDialog as IAlertDialogComponentType<
    StyledAlertDialog,
    StyledAlertDialogContent,
    StyledAlertDialogCloseButton,
    StyledAlertDialogHeader,
    StyledAlertDialogFooter,
    StyledAlertDialogBody,
    StyledAlertDialogBackdrop
  >;
}
