import { AnimatedAnimatePresence } from '@gluestack-style/animation-resolver';
import { createAlertDialog } from '@gluestack-ui/alert-dialog';
import {
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
} from './styled-components';

export const AccessibleAlertDialog = createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  //@ts-ignore
  AnimatePresence: AnimatedAnimatePresence,
});

type IAlertDialog = typeof AccessibleAlertDialog;

interface AlertDialog extends IAlertDialog {
  /**
   * @deprecated Use AlertDialogContent instead.
   */
  Content: IAlertDialog['Content'];
  /**
   * @deprecated Use AlertDialogCloseButton instead.
   */
  CloseButton: IAlertDialog['CloseButton'];
  /**
   * @deprecated Use AlertDialogHeader instead.
   */
  Header: IAlertDialog['Header'];
  /**
   * @deprecated Use AlertDialogFooter instead.
   */
  Footer: IAlertDialog['Footer'];
  /**
   * @deprecated Use AlertDialogBody instead.
   */
  Body: IAlertDialog['Body'];
  /**
   * @deprecated Use AlertDialogBackdrop instead.
   */
  Backdrop: IAlertDialog['Backdrop'];
}

export const AlertDialog = AccessibleAlertDialog as AlertDialog;
export const AlertDialogContent = AccessibleAlertDialog.Content;
export const AlertDialogCloseButton = AccessibleAlertDialog.CloseButton;
export const AlertDialogHeader = AccessibleAlertDialog.Header;
export const AlertDialogFooter = AccessibleAlertDialog.Footer;
export const AlertDialogBody = AccessibleAlertDialog.Body;
export const AlertDialogBackdrop = AccessibleAlertDialog.Backdrop;
