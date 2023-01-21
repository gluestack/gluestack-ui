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
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
}: {
  Root: React.ComponentType<StyledAlertDialog>;
  Content: React.ComponentType<StyledAlertDialogContent>;
  CloseButton: React.ComponentType<StyledAlertDialogCloseButton>;
  Header: React.ComponentType<StyledAlertDialogHeader>;
  Footer: React.ComponentType<StyledAlertDialogFooter>;
  Body: React.ComponentType<StyledAlertDialogBody>;
  Backdrop: React.ComponentType<StyledAlertDialogBackdrop>;
}) {
  const AlertDialog: any = AlertMain(Root);
  AlertDialog.Content = AlertDialogContent(Content);
  AlertDialog.CloseButton = AlertDialogCloseButton(CloseButton);
  AlertDialog.Header = AlertDialogHeader(Header);
  AlertDialog.Footer = AlertDialogFooter(Footer);
  AlertDialog.Body = AlertDialogBody(Body);
  AlertDialog.Backdrop = AlertDialogBackdrop(Backdrop);

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
