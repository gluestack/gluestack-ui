import { AlertDialog as AlertMain } from './AlertDialog';
import AlertDialogContent from './AlertDialogContent';
import AlertDialogBody from './AlertDialogBody';
import AlertDialogCloseButton from './AlertDialogCloseButton';
import AlertDialogFooter from './AlertDialogFooter';
import AlertDialogHeader from './AlertDialogHeader';
import AlertDialogBackdrop from './AlertDialogBackdrop';
import type { IAlertDialogComponentType } from './types';

export function createAlertDialog<
  AlertDialog,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
  AlertDialogAnimatePresence
>({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  AnimatePresence,
}: {
  Root: React.ComponentType<AlertDialog>;
  Content: React.ComponentType<AlertDialogContent>;
  CloseButton: React.ComponentType<AlertDialogCloseButton>;
  Header: React.ComponentType<AlertDialogHeader>;
  Footer: React.ComponentType<AlertDialogFooter>;
  Body: React.ComponentType<AlertDialogBody>;
  Backdrop: React.ComponentType<AlertDialogBackdrop>;
  AnimatePresence?: React.ComponentType<AlertDialogAnimatePresence>;
}) {
  const AlertDialog: any = AlertMain(Root);
  AlertDialog.Content = AlertDialogContent(Content, AnimatePresence);
  AlertDialog.CloseButton = AlertDialogCloseButton(CloseButton);
  AlertDialog.Header = AlertDialogHeader(Header);
  AlertDialog.Footer = AlertDialogFooter(Footer);
  AlertDialog.Body = AlertDialogBody(Body);
  AlertDialog.Backdrop = AlertDialogBackdrop(Backdrop, AnimatePresence);

  AlertDialog.displayName = 'AlertDialog';
  AlertDialog.Content.displayName = 'AlertDialog.Content';
  AlertDialog.CloseButton.displayName = 'AlertDialog.CloseButton';
  AlertDialog.Header.displayName = 'AlertDialog.Header';
  AlertDialog.Footer.displayName = 'AlertDialog.Footer';
  AlertDialog.Body.displayName = 'AlertDialog.Body';
  AlertDialog.Backdrop.displayName = 'AlertDialog.Backdrop';

  return AlertDialog as IAlertDialogComponentType<
    AlertDialog,
    AlertDialogContent,
    AlertDialogCloseButton,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogBody,
    AlertDialogBackdrop
  >;
}
