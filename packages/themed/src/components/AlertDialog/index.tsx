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
import { styled } from '../styled';

export const AlertDialog = createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  //@ts-ignore
  AnimatePresence: styled.Component,
});

export const AlertDialogContent = AlertDialog.Content;
export const AlertDialogCloseButton = AlertDialog.CloseButton;
export const AlertDialogHeader = AlertDialog.Header;
export const AlertDialogFooter = AlertDialog.Footer;
export const AlertDialogBody = AlertDialog.Body;
export const AlertDialogBackdrop = AlertDialog.Backdrop;
